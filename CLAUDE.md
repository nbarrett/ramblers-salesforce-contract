# CLAUDE.md

## Critical Rules

1. **NEVER commit or push without explicit instruction** — make file changes freely, but `git commit` and `git push` each require the user to explicitly ask for that specific action.
2. **No code comments** — no `//`, no `/* */`, no JSDoc `/** */`. Self-documenting names. When editing existing code, remove stray comments rather than preserve them.
3. **No AI attribution in commits** — no `Co-Authored-By`, no `Generated with`, nothing. The `commit-msg` hook enforces.
4. **Strict TypeScript everywhere** — `.ts` only, no `.js` / `.mjs` / `.cjs` source files. The committed `dist/` is build output, not source.
5. **DRY** — search before writing new code. The contract is small; reuse over duplicate.
6. **Wire-format stability** — every change to the published surface (`src/index.ts` exports, the JSON Schema, the OpenAPI shape) is a deliberate version bump. Major = breaking; mock and the eventual production server pin majors.

## Project Overview

- **Purpose**: shared wire-format contract for the Ramblers Salesforce API. Consumed today by [`nbarrett/ramblers-salesforce-mock`](https://github.com/nbarrett/ramblers-salesforce-mock); consumed in future by `nbarrett/ramblers-salesforce-server` (Phase 3 of [_From Mock to Production_](https://www.ngx-ramblers.org.uk/how-to/technical-articles/2026-04-27-salesforce-mock-to-production)).
- **Architecture**: Node 20+, pure TypeScript, zero runtime web/server framework. Just types, Zod schemas, an OpenAPI builder, and an Insight Hub column table.
- **Repository**: https://github.com/nbarrett/ramblers-salesforce-contract
- **Source**: `src/` (TypeScript only). `dist/` is committed build output for git-tag distribution.
- **Schema source**: `schema/salesforce-api.schema.json` — mirrors [nbarrett/ngx-ramblers#209](https://github.com/nbarrett/ngx-ramblers/issues/209). The `check-schema-sync` script verifies this stays true.

## Code Style

- **Double quotes** always, never single quotes
- **No "get" prefixes** on methods (`tenant()` not `getTenant()`)
- **`undefined` for absence**
- **`T[]` not `Array<T>`**
- **Immutable operations** — prefer `map` / `reduce` / `filter` over mutation
- **kebab-case for filenames** (`check-schema-sync.ts`, not `checkSchemaSync.ts`)
- **UK English** in commits, README, prose ("centralised", "colour", "behaviour")
- **Minimal changes** — keep patches targeted

## Bans

| Banned | Use instead |
|--------|------------|
| `console.log/warn/error` in package source | structured throws or return values; the package is library-shaped, not application-shaped |
| Inline comments (`//`, `/* */`, `/** */`) | self-documenting code |
| `any` (without justification) | concrete types or `unknown` + narrowing |
| Re-implementing existing helpers | search `src/` first |
| `^` / `~` ranges in `package.json` | pin every dependency to an exact version. The lockfile is authoritative; `package.json` should agree |
| `.js`, `.mjs`, `.cjs` source files | `.ts` only |

(Stylistic prose preferences — words to avoid in commits / issues / PRs — live globally in `~/.claude/CLAUDE.md`.)

## Git Workflow

- **Conventional commits**: `<type>(<scope>): <description>` (feat, fix, refactor, test, docs, style, build, ci)
- **Commit message style**: paragraph-style body explaining the root cause and supporting fixes; no bullet-only summaries; no AI attribution trailers
- **100% trunk-based — no PRs, no branches, no worktrees.** All work goes directly on `main`. Never run `git checkout -b`, never run `gh pr create`, never use a worktree unilaterally
- **No literal `\n`** in commit messages — use real newlines or multiple `-m` flags
- **Hook setup**: `pnpm setup:hooks` (one-off, sets `core.hooksPath` to `.githooks/`). Hooks enforce no-AI-attribution on `commit-msg`, lint on `pre-commit`, and typecheck/build on `pre-push`

## Versioning & Distribution

- **Semver tags drive releases.** `v0.1.0`, `v0.2.0`, `vX.Y.Z`. Major = breaking wire change.
- The repo commits `dist/` so consumers can install via git URL (`github:nbarrett/ramblers-salesforce-contract#vX.Y.Z`) without needing a build step in their own pipeline.
- **Schema sync against #209.** Every change to `schema/salesforce-api.schema.json` must keep the `check:schema-sync` script green. CI gates the build on this.
- **No GitHub Packages publishing yet.** When a second consumer (the production server) needs registry installs, set up the publish workflow then.

## Build Pipeline

- `pnpm build` — `tsc -p tsconfig.build.json`. Outputs to `dist/`.
- `pnpm typecheck` — `tsc --noEmit` against the full `tsconfig.json` (includes the lint config and any other `.ts` at the root).
- `pnpm check:schema-sync` — runs `scripts/check-schema-sync.ts`; fetches issue #209, parses the five JSON Schema blocks out of the body, normalises refs and diffs against `schema/salesforce-api.schema.json`. Exits non-zero on a mismatch.

## Commands

```bash
pnpm install                # corepack enable first if pnpm not yet active
pnpm build                  # tsc → dist/
pnpm typecheck              # tsc --noEmit (every .ts file)
pnpm lint                   # eslint src/ scripts/
pnpm check:schema-sync      # diff schema/salesforce-api.schema.json against ngx-ramblers#209
pnpm setup:hooks            # one-off — activate .githooks/ for this clone
```

`corepack enable` once on a fresh checkout activates the pnpm version pinned in `packageManager`.

## Error Handling

- No empty catch blocks — always log via `console.error` (this is a library; the consumer logs) or rethrow with context
- Prefer small, targeted try/catch blocks
