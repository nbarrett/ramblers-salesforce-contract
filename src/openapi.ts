import salesforceApiSchema from "../schema/salesforce-api.schema.json" with { type: "json" };

interface SchemaFile {
  title?: string;
  description?: string;
  $defs: Record<string, unknown>;
}

export interface OpenApiInfo {
  title: string;
  version: string;
  description: string;
  contact?: {
    name: string;
    url: string;
  };
}

export interface OpenApiBuildOptions {
  publicBaseUrl: string;
  info: OpenApiInfo;
  serverDescription?: string;
}

export function buildOpenApiDocument(options: OpenApiBuildOptions): Record<string, unknown> {
  const parsed = salesforceApiSchema as unknown as SchemaFile;

  const rewriteRefs = (value: unknown): unknown => {
    if (Array.isArray(value)) return value.map(rewriteRefs);
    if (value !== null && typeof value === "object") {
      const out: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
        if (k === "$ref" && typeof v === "string" && v.startsWith("#/$defs/")) {
          out[k] = v.replace("#/$defs/", "#/components/schemas/");
        } else {
          out[k] = rewriteRefs(v);
        }
      }
      return out;
    }
    return value;
  };

  const schemas: Record<string, unknown> = {};
  for (const [name, def] of Object.entries(parsed.$defs)) {
    schemas[name] = rewriteRefs(def);
  }

  return {
    openapi: "3.0.3",
    info: {
      title: options.info.title,
      description: options.info.description,
      version: options.info.version,
      ...(options.info.contact ? { contact: options.info.contact } : {}),
    },
    servers: [
      { url: options.publicBaseUrl, description: options.serverDescription ?? "Deployment" },
    ],
    security: [{ bearerAuth: [] }],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "opaque" },
      },
      schemas,
    },
    paths: {
      "/api/groups/{groupCode}/members": {
        get: {
          summary: "List members for a group or area",
          description:
            "Returns the complete member list for a group (4-char code) or area (2-char code). Supports incremental sync via `since`.",
          parameters: [
            {
              name: "groupCode",
              in: "path",
              required: true,
              schema: { type: "string" },
              description: "4-character group code or 2-character area code.",
            },
            {
              name: "since",
              in: "query",
              required: false,
              schema: { type: "string", format: "date-time" },
              description: "ISO 8601 date for incremental sync.",
            },
            {
              name: "includeExpired",
              in: "query",
              required: false,
              schema: { type: "boolean" },
              description: "Include recently lapsed members for renewal warnings.",
            },
          ],
          responses: {
            "200": {
              description: "Member list",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/MemberListResponse" },
                },
              },
            },
            "401": errorResponse("Unauthorised"),
            "404": errorResponse("Group not found"),
          },
        },
      },
      "/api/members/{membershipNumber}/consent": {
        post: {
          summary: "Consent writeback",
          description:
            "Record a consent change against a member. Fires only on transitions to fully opted-out of group-level communications, per the #209 trigger rule.",
          parameters: [
            {
              name: "membershipNumber",
              in: "path",
              required: true,
              schema: { type: "string" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/ConsentUpdateRequest" },
              },
            },
          },
          responses: {
            "200": {
              description: "Consent update applied",
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/ConsentUpdateResponse" },
                },
              },
            },
            "400": errorResponse("Bad request"),
            "401": errorResponse("Unauthorised"),
            "404": errorResponse("Member not found"),
          },
        },
      },
    },
  };
}

function errorResponse(description: string): Record<string, unknown> {
  return {
    description,
    content: {
      "application/json": {
        schema: { $ref: "#/components/schemas/ApiErrorResponse" },
      },
    },
  };
}
