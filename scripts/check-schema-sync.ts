import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [k: string]: JsonValue };

const UPSTREAM_URL = "https://api.swaggerhub.com/apis/JAMESKEARS/ramblers-group-email/1.0.0";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

async function fetchUpstream(): Promise<JsonValue> {
  const response = await fetch(UPSTREAM_URL, {
    headers: { Accept: "application/json", "User-Agent": "ramblers-salesforce-contract-schema-sync" },
  });
  if (!response.ok) {
    throw new Error(`SwaggerHub returned ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as JsonValue;
}

function loadJson(relativePath: string): JsonValue {
  return JSON.parse(readFileSync(resolve(root, relativePath), "utf-8")) as JsonValue;
}

function normaliseRefs(value: JsonValue): JsonValue {
  if (Array.isArray(value)) return value.map(normaliseRefs);
  if (value !== null && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) =>
        k === "$ref" && typeof v === "string" && v.startsWith("#/components/schemas/")
          ? [k, v.replace("#/components/schemas/", "#/$defs/")]
          : [k, normaliseRefs(v)],
      ),
    );
  }
  return value;
}

function stableSerialise(value: JsonValue): string {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableSerialise).join(",")}]`;
  const sortedKeys = Object.keys(value).sort();
  const parts = sortedKeys.map((k) => `${JSON.stringify(k)}:${stableSerialise(value[k]!)}`);
  return `{${parts.join(",")}}`;
}

async function main(): Promise<void> {
  const live = await fetchUpstream();
  const mirror = loadJson("openapi/upstream.json");
  const schema = loadJson("schema/salesforce-api.schema.json") as { $defs?: Record<string, JsonValue> };

  const failures: string[] = [];

  if (stableSerialise(live) !== stableSerialise(mirror)) {
    failures.push(
      "openapi/upstream.json no longer matches the published SwaggerHub document. The upstream spec has changed: review the differences, update the mirror, regenerate the schema and types, and bump the package version.",
    );
  }

  const mirrorComponents = ((mirror as { components?: { schemas?: Record<string, JsonValue> } }).components?.schemas) ?? {};
  const localDefs = schema.$defs ?? {};
  const expectedDefs = normaliseRefs(mirrorComponents) as Record<string, JsonValue>;
  const defNames = [...new Set([...Object.keys(expectedDefs), ...Object.keys(localDefs)])].sort();
  const mismatchedDefs = defNames.filter(
    (name) => stableSerialise(expectedDefs[name] ?? null) !== stableSerialise(localDefs[name] ?? null),
  );
  if (mismatchedDefs.length > 0) {
    failures.push(
      `schema/salesforce-api.schema.json is out of step with openapi/upstream.json for: ${mismatchedDefs.join(", ")}. Regenerate the schema from the mirror.`,
    );
  }

  if (failures.length === 0) {
    console.log(`Schema sync check: OK (${defNames.length} defs in sync with SwaggerHub 1.0.0)`);
    return;
  }

  failures.map((failure) => console.error(failure));
  process.exit(1);
}

main().catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  console.error(`Schema sync check failed: ${message}`);
  process.exit(2);
});
