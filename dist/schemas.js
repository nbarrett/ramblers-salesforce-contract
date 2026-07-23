import { z } from "zod";
export const supportersQuerySchema = z.object({
    api_key: z.string().min(1),
    team_code: z.string().min(1),
});
export const unsubscribeRequestSchema = z.object({
    emailAddress: z.string().email(),
    memberRef: z.string().min(1),
});
export const bouncedEmailRequestSchema = z.object({
    emailAddress: z.string().email(),
    memberRef: z.string().min(1),
    bounceType: z.enum(["Hard", "Soft"]),
});
//# sourceMappingURL=schemas.js.map