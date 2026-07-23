import upstream from "../openapi/upstream.json" with { type: "json" };
export function buildOpenApiDocument(options) {
    const document = upstream;
    return {
        ...document,
        ...(options.info ? { info: options.info } : {}),
        servers: [
            { url: options.publicBaseUrl, description: options.serverDescription ?? "Deployment" },
        ],
    };
}
//# sourceMappingURL=openapi.js.map