export interface OpenApiInfo {
    title: string;
    version: string;
    description: string;
    contact?: {
        name: string;
        url: string;
    };
}
export type OpenApiSecurity = {
    kind: "opaque";
} | {
    kind: "entra";
    openIdConnectUrl?: string;
};
export interface OpenApiBuildOptions {
    publicBaseUrl: string;
    info: OpenApiInfo;
    serverDescription?: string;
    security?: OpenApiSecurity;
}
export declare function buildOpenApiDocument(options: OpenApiBuildOptions): Record<string, unknown>;
//# sourceMappingURL=openapi.d.ts.map