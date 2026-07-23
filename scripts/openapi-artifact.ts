import { stringify as toYaml } from "yaml";
import { buildOpenApiDocument } from "../src/openapi.js";

export const ARTIFACT_FILES = {
  json: "openapi/openapi.json",
  yaml: "openapi/openapi.yaml",
} as const;

export function buildOpenApiArtifact(): { json: string; yaml: string } {
  const document = buildOpenApiDocument({
    publicBaseUrl: "https://salesforce-mock.ngx-ramblers.org.uk",
    serverDescription: "Reference mock server",
  });
  return {
    json: `${JSON.stringify(document, null, 2)}\n`,
    yaml: toYaml(document),
  };
}
