import type { BouncedEmailRequest, Supporter, UnsubscribeRequest } from "./types.js";
export interface SupportersOptions {
    teamCode: string;
}
export interface UnsubscribeOptions {
    teamCode: string;
    request: UnsubscribeRequest;
    appliedAt: Date;
}
export interface BounceOptions {
    teamCode: string;
    request: BouncedEmailRequest;
    appliedAt: Date;
}
export type SupportersResult = {
    kind: "ok";
    supporters: Supporter[];
} | {
    kind: "teamNotFound";
};
export type SupporterUpdateResult = {
    kind: "ok";
} | {
    kind: "supporterNotFound";
};
export interface SupporterProvider {
    supporters(options: SupportersOptions): Promise<SupportersResult>;
    unsubscribe(options: UnsubscribeOptions): Promise<SupporterUpdateResult>;
    bounce(options: BounceOptions): Promise<SupporterUpdateResult>;
}
//# sourceMappingURL=supporter-provider.d.ts.map