import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTIFACT_FILES, buildOpenApiArtifact } from "./openapi-artifact.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const expected = buildOpenApiArtifact();

function readArtifact(relativePath: string): string {
  return readFileSync(resolve(root, relativePath), "utf-8");
}

const mismatches: string[] = [];
if (readArtifact(ARTIFACT_FILES.json) !== expected.json) mismatches.push(ARTIFACT_FILES.json);
if (readArtifact(ARTIFACT_FILES.yaml) !== expected.yaml) mismatches.push(ARTIFACT_FILES.yaml);

if (mismatches.length === 0) {
  console.log("OpenAPI artifact check: OK (static spec matches buildOpenApiDocument)");
} else {
  console.error(
    `OpenAPI artifact out of sync: ${mismatches.join(", ")}. Run pnpm build:openapi and commit.`,
  );
  process.exitCode = 1;
}
