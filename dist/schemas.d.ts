import { z } from "zod";
export declare const supportersQuerySchema: z.ZodObject<{
    api_key: z.ZodString;
    team_code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    api_key: string;
    team_code: string;
}, {
    api_key: string;
    team_code: string;
}>;
export declare const unsubscribeRequestSchema: z.ZodObject<{
    emailAddress: z.ZodString;
    memberRef: z.ZodString;
}, "strip", z.ZodTypeAny, {
    emailAddress: string;
    memberRef: string;
}, {
    emailAddress: string;
    memberRef: string;
}>;
export declare const bouncedEmailRequestSchema: z.ZodObject<{
    emailAddress: z.ZodString;
    memberRef: z.ZodString;
    bounceType: z.ZodEnum<["Hard", "Soft"]>;
}, "strip", z.ZodTypeAny, {
    emailAddress: string;
    memberRef: string;
    bounceType: "Hard" | "Soft";
}, {
    emailAddress: string;
    memberRef: string;
    bounceType: "Hard" | "Soft";
}>;
//# sourceMappingURL=schemas.d.ts.map