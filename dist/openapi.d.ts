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
export declare function buildOpenApiDocument(options: OpenApiBuildOptions): Record<string, unknown>;
//# sourceMappingURL=openapi.d.ts.map