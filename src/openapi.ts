import upstream from "../openapi/upstream.json" with { type: "json" };

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
  serverDescription?: string;
  info?: OpenApiInfo;
}

export function buildOpenApiDocument(options: OpenApiBuildOptions): Record<string, unknown> {
  const document = upstream as Record<string, unknown>;
  return {
    ...document,
    ...(options.info ? { info: options.info } : {}),
    servers: [
      { url: options.publicBaseUrl, description: options.serverDescription ?? "Deployment" },
    ],
  };
}
