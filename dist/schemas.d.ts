import { z } from "zod";
export declare const listMembersQuerySchema: z.ZodObject<{
    since: z.ZodOptional<z.ZodString>;
    includeExpired: z.ZodEffects<z.ZodOptional<z.ZodString>, boolean | undefined, string | undefined>;
}, "strip", z.ZodTypeAny, {
    since?: string | undefined;
    includeExpired?: boolean | undefined;
}, {
    since?: string | undefined;
    includeExpired?: string | undefined;
}>;
export declare const consentUpdateRequestSchema: z.ZodEffects<z.ZodObject<{
    emailMarketingConsent: z.ZodOptional<z.ZodBoolean>;
    groupMarketingConsent: z.ZodOptional<z.ZodBoolean>;
    areaMarketingConsent: z.ZodOptional<z.ZodBoolean>;
    otherMarketingConsent: z.ZodOptional<z.ZodBoolean>;
    source: z.ZodEnum<["ngx-ramblers", "mailman"]>;
    timestamp: z.ZodString;
    reason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    source: "ngx-ramblers" | "mailman";
    timestamp: string;
    emailMarketingConsent?: boolean | undefined;
    groupMarketingConsent?: boolean | undefined;
    areaMarketingConsent?: boolean | undefined;
    otherMarketingConsent?: boolean | undefined;
    reason?: string | undefined;
}, {
    source: "ngx-ramblers" | "mailman";
    timestamp: string;
    emailMarketingConsent?: boolean | undefined;
    groupMarketingConsent?: boolean | undefined;
    areaMarketingConsent?: boolean | undefined;
    otherMarketingConsent?: boolean | undefined;
    reason?: string | undefined;
}>, {
    source: "ngx-ramblers" | "mailman";
    timestamp: string;
    emailMarketingConsent?: boolean | undefined;
    groupMarketingConsent?: boolean | undefined;
    areaMarketingConsent?: boolean | undefined;
    otherMarketingConsent?: boolean | undefined;
    reason?: string | undefined;
}, {
    source: "ngx-ramblers" | "mailman";
    timestamp: string;
    emailMarketingConsent?: boolean | undefined;
    groupMarketingConsent?: boolean | undefined;
    areaMarketingConsent?: boolean | undefined;
    otherMarketingConsent?: boolean | undefined;
    reason?: string | undefined;
}>;
//# sourceMappingURL=schemas.d.ts.map