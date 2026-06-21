import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ARTIFACT_FILES, buildOpenApiArtifact } from "./openapi-artifact.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const artifact = buildOpenApiArtifact();
mkdirSync(resolve(root, "openapi"), { recursive: true });
writeFileSync(resolve(root, ARTIFACT_FILES.json), artifact.json);
writeFileSync(resolve(root, ARTIFACT_FILES.yaml), artifact.yaml);
console.log(`Wrote ${ARTIFACT_FILES.json} and ${ARTIFACT_FILES.yaml}`);
