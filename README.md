# @ramblers/sf-contract

Wire-format contract for the Ramblers Salesforce API. The shared piece of code that both the mock server and (eventually) the real production server depend on, so neither can disagree about the shape of the data on the wire.

## What lives here

| File | What it provides |
|---|---|
| `src/types.ts` | TypeScript types for `SalesforceMember`, `MemberListResponse`, `ConsentUpdateRequest`, `ConsentUpdateResponse`, the error envelope and the error code enum |
| `src/schemas.ts` | Zod schemas for request validation: `listMembersQuerySchema`, `consentUpdateRequestSchema` |
| `src/errors.ts` | Mapping from `ApiErrorCode` → HTTP status |
| `src/openapi.ts` | `buildOpenApiDocument(options)` — produces the OpenAPI 3.0 document at runtime; consumers inject `publicBaseUrl` |
| `src/columns.ts` | The 36 Insight Hub column definitions (`INSIGHT_HUB_COLUMNS`) |
| `schema/salesforce-api.schema.json` | The JSON Schema that mirrors [nbarrett/ngx-ramblers#209](https://github.com/nbarrett/ngx-ramblers/issues/209) |
| `scripts/check-schema-sync.ts` | CI helper that diffs the local JSON Schema against the #209 issue body and exits non-zero on a mismatch |

## Consumers

- [`nbarrett/ramblers-salesforce-mock`](https://github.com/nbarrett/ramblers-salesforce-mock) — the reference / development server. Live at <https://salesforce-mock.ngx-ramblers.org.uk>.
- `nbarrett/ramblers-salesforce-server` — production server (Phase 3 of [_From Mock to Production_](https://www.ngx-ramblers.org.uk/how-to/technical-articles/2026-04-27-salesforce-mock-to-production)). Not yet a real repo.

## Versioning

Semver. **Major** = breaking wire-format change. Both consumer servers pin majors and update deliberately. The `check:schema-sync` script keeps the JSON Schema honest against the #209 issue body so a contract change has to come through this repo first.

## Local development

```sh
corepack enable
pnpm install
pnpm typecheck
pnpm build
pnpm check:schema-sync
```

## Publishing

Tags drive releases. Push a `vX.Y.Z` tag from this repo; consumers then bump their `package.json` to depend on `github:nbarrett/ramblers-salesforce-contract#vX.Y.Z` and run `pnpm install`.

When GitHub Packages publishing is set up, consumers can switch to a registry version range instead.
