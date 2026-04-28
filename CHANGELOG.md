# Changelog

All notable changes to `@ramblers/sf-contract` are recorded here. The package follows [semver](https://semver.org/): a major version bump signals a breaking change to the wire format, types or schemas. Both consumers (`ramblers-salesforce-mock` and `ramblers-salesforce-server`) pin a tag and update deliberately.

## [v0.2.0] — 2026-04-28

### Added

- **`MemberProvider` port** plus its option and result types (`ListMembersOptions`, `ApplyConsentOptions`, `ListMembersResult`, `ApplyConsentResult`). The interface is the seam every server consumes between HTTP/validation and the data layer. Until v0.2.0 this lived only in the mock at `src/ports/member-provider.ts`. Phase 3 introduced a second server, so the port belongs in the contract — both servers now import it from one place. Re-exported from `@ramblers/sf-contract`.

### Why

`ramblers-salesforce-server` shipped on 28 April. Without the port in the contract, both servers would have carried duplicate copies of the interface that could quietly disagree. The seam shape is now a compile-time constraint shared across the family.

## [v0.1.0] — 2026-04-27

### Added

- Initial extraction of the wire-format contract out of `ramblers-salesforce-mock` (Phase 2 of the [_From Mock to Production_](https://www.ngx-ramblers.org.uk/how-to/technical-articles/2026-04-27-salesforce-mock-to-production) migration).
- **TypeScript types**: `SalesforceMember`, `MemberListResponse`, `MemberChange`, `ConsentUpdateRequest`, `ConsentUpdateResponse`, `ApiErrorResponse`, `ApiErrorCode`, plus shared sub-shapes (`GroupMembership`, `AreaMembership`, etc.).
- **Zod request schemas**: `listMembersQuerySchema` (for `GET /api/groups/{groupCode}/members` query parameters) and `consentUpdateRequestSchema` (for `POST /api/members/{membershipNumber}/consent` body).
- **Error envelope helpers**: `STATUS_BY_API_ERROR_CODE` mapping for runtime use.
- **OpenAPI builder**: `buildOpenApiDocument(options)` — produces the OpenAPI 3.0 document at runtime; consumers inject their own `publicBaseUrl`.
- **Insight Hub columns**: `INSIGHT_HUB_COLUMNS` (the 36-column `ExportAll.xlsx` mapping per [#209](https://github.com/nbarrett/ngx-ramblers/issues/209)) plus the `findColumn` and `normaliseHeader` helpers used by the mock's xlsx ingest.
- **JSON Schema**: the day-one schema lives at `schema/salesforce-api.schema.json`. The `check:schema-sync` script in `scripts/` verifies it still mirrors the body of [ngx-ramblers#209](https://github.com/nbarrett/ngx-ramblers/issues/209) and exits non-zero on any mismatch — CI gates pushes on this.

[v0.2.0]: https://github.com/nbarrett/ramblers-salesforce-contract/releases/tag/v0.2.0
[v0.1.0]: https://github.com/nbarrett/ramblers-salesforce-contract/releases/tag/v0.1.0
