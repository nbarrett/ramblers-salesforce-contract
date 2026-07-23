# @ramblers/sf-contract

Wire-format contract for the Ramblers Team Emails API. The shared piece of code that the mock server and NGX-Ramblers depend on, so neither can disagree about the shape of the data on the wire.

From v1.0.0 the contract mirrors the API published by Ramblers Head office: [JAMESKEARS/ramblers-group-email 1.0.0](https://app.swaggerhub.com/apis/JAMESKEARS/ramblers-group-email/1.0.0) on SwaggerHub. Earlier versions (v0.x) carried the jointly-proposed shape from [nbarrett/ngx-ramblers#209](https://github.com/nbarrett/ngx-ramblers/issues/209); that proposal is superseded by the published upstream spec, which this package now tracks verbatim, quirks included, until the upstream fixes them.

## What lives here

| File | What it provides |
|---|---|
| `src/types.ts` | TypeScript types for `Supporter`, `VolunteerRole`, `UnsubscribeRequest`, `BouncedEmailRequest`, the success/error response shapes and their enums |
| `src/schemas.ts` | Zod schemas for request validation: `supportersQuerySchema`, `unsubscribeRequestSchema`, `bouncedEmailRequestSchema` |
| `src/errors.ts` | Mapping from upstream `errorType` values → HTTP status |
| `src/openapi.ts` | `buildOpenApiDocument(options)` — serves the mirrored upstream document with an injected `publicBaseUrl` |
| `src/supporter-provider.ts` | `SupporterProvider` — the interface a server implements to answer the three endpoints |
| `src/columns.ts` | The 36 Insight Hub column definitions (`INSIGHT_HUB_COLUMNS`), retained for data generation and legacy import parity |
| `openapi/upstream.json` | Verbatim mirror of the published SwaggerHub document — the authority everything else derives from |
| `schema/salesforce-api.schema.json` | JSON Schema `$defs` generated from the upstream components |
| `scripts/check-schema-sync.ts` | CI helper that fetches the live SwaggerHub document and fails if the mirror or schema no longer match it |

## Endpoints covered

| Endpoint | Purpose |
|---|---|
| `GET /get_supporters` | Members, affiliated members, volunteers and wellbeing walkers for a team (group or area) |
| `POST /unsubscribe` | Consent writeback when a supporter unsubscribes |
| `POST /bounced_email` | Hard/soft bounce writeback |

Authentication is `api_key` + `team_code` as query parameters, per the upstream spec.

## Consumers

- [`nbarrett/ramblers-salesforce-mock`](https://github.com/nbarrett/ramblers-salesforce-mock) — the reference / development server. Live at <https://salesforce-mock.ngx-ramblers.org.uk>.
- [`nbarrett/ngx-ramblers`](https://github.com/nbarrett/ngx-ramblers) — consumes the API via its Salesforce adapter.

## Versioning

Semver. **Major** = breaking wire-format change. Consumers pin majors and update deliberately. The `check:schema-sync` script fetches the published SwaggerHub document and fails when the upstream spec changes, so an upstream revision has to be reviewed and mirrored here before anything downstream moves.

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
