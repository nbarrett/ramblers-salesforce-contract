import { stringify as toYaml } from "yaml";
import { buildOpenApiDocument } from "../src/openapi.js";
import pkg from "../package.json" with { type: "json" };

const OPEN_ID_CONNECT_URL =
  "https://login.microsoftonline.com/{tenant-id}/v2.0/.well-known/openid-configuration";

export const ARTIFACT_FILES = {
  json: "openapi/openapi.json",
  yaml: "openapi/openapi.yaml",
} as const;

export function buildOpenApiArtifact(): { json: string; yaml: string } {
  const version = (pkg as unknown as { version: string }).version;
  const document = buildOpenApiDocument({
    publicBaseUrl: "https://salesforce-server.ngx-ramblers.org.uk",
    serverDescription: "Reference production server",
    info: {
      title: "Ramblers Salesforce API",
      version,
      description:
        "Joint wire-format contract for the Ramblers Salesforce member API (ngx-ramblers#209). This static OpenAPI document is generated from the contract package's JSON Schema and OpenAPI builder, so a consumer can generate a typed client in any language without running Node.",
    },
    security: {
      kind: "entra",
      openIdConnectUrl: OPEN_ID_CONNECT_URL,
    },
  });
  return {
    json: `${JSON.stringify(document, null, 2)}\n`,
    yaml: toYaml(document),
  };
}
