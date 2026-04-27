import { z } from "zod";
export const listMembersQuerySchema = z.object({
    since: z
        .string()
        .datetime({ offset: true })
        .optional(),
    includeExpired: z
        .string()
        .optional()
        .transform((v) => v === undefined ? undefined : v === "true" || v === "1"),
});
export const consentUpdateRequestSchema = z
    .object({
    emailMarketingConsent: z.boolean().optional(),
    groupMarketingConsent: z.boolean().optional(),
    areaMarketingConsent: z.boolean().optional(),
    otherMarketingConsent: z.boolean().optional(),
    source: z.enum(["ngx-ramblers", "mailman"]),
    timestamp: z.string().datetime({ offset: true }),
    reason: z.string().optional(),
})
    .refine((body) => body.emailMarketingConsent !== undefined ||
    body.groupMarketingConsent !== undefined ||
    body.areaMarketingConsent !== undefined ||
    body.otherMarketingConsent !== undefined, { message: "At least one consent flag must be present" });
//# sourceMappingURL=schemas.js.map