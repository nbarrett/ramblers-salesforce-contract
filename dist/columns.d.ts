export type ParseKind = "string" | "date" | "boolean" | "memberTerm" | "membershipType";
export interface ColumnDef {
    header: string;
    apiKey: string;
    parse: ParseKind;
}
export declare const INSIGHT_HUB_COLUMNS: readonly ColumnDef[];
/** Normalise a header cell for tolerant matching (trim, lowercase, collapse spaces). */
export declare function normaliseHeader(raw: string): string;
export declare function findColumn(headerText: string): ColumnDef | undefined;
//# sourceMappingURL=columns.d.ts.map