# AGENTS.md

## Monorepo Structure

- **pnpm workspace** with `apps/*`, `packages/*`, `tools/*` (tools/ unused currently)
- `apps/website` — Vite app, builds with `tsc && vp build`
- `packages/utils` — TypeScript library, builds with `vp pack` (uses `tsgo: true` for DTS generation)

## Commands

- `vp install` — install dependencies (after pulling changes)
- `vp run ready` — full validation: check + test + build all packages
- `vp run website#dev` — run only the website dev server
- `vp run -r test` — run tests across all packages
- `vp run -r build` — build all packages
- `vp check` — format, lint, and type-check (type-aware + type-check enabled)
- `vp test` — run tests in current package
- `vp staged` — lint staged files (runs on pre-commit)
- `vp check --fix` — auto-fix lint/format issues

## Vite+ Toolchain Rules

- **Do not use pnpm/npm/yarn directly.** Always use `vp add`, `vp rm`, etc.
- **Do not install vitest, oxlint, oxfmt, or tsdown.** They are bundled in Vite+.
- **Do not run `vp vitest` or `vp oxlint`.** Use `vp test` and `vp lint`.
- **Import from `vite-plus`, not `vite`/`vitest`:**
  - `import { defineConfig } from 'vite-plus'`
  - `import { expect, test, vi } from 'vite-plus/test'`
- **Built-in commands shadow scripts.** If a `package.json` script shares a name with a `vp` built-in, use `vp run <script>` to run the custom one.
- **Use `vp dlx` instead of `npx`.**

## Dependency Management

- Workspace catalog (`pnpm-workspace.yaml`) pins shared dependency versions.
- `vite` and `vitest` are remapped to Vite+ internal packages via catalog overrides and peer dependency rules — never install them directly.
- Node >= 22.12.0 required.

## Validation Checklist

- Run `vp install` after pulling remote changes
- Run `vp check` and `vp test` to validate changes
- Pre-commit hook runs `vp staged` (which does `vp check --fix`)
