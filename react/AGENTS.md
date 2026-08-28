<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` to format, lint, and type check changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->

## Source Layout

- `src/api/` — Kubb-generated API layer (`models/` `clients/` `hooks/`, grouped by Swagger tag). Never hand-edit; regenerate with `vp run generate-api` after backend contract changes.
- `src/lib/` — framework-level, cross-cutting infrastructure: HTTP (`lib/http/`), auth (`lib/auth/`), routing (`lib/routing/`), runtime config, tenant, theme, global query client.
  - **Admission rule**: `lib/` holds framework concerns only — no business semantics. If a file names a business concept (e.g. `impersonation`) or serves a single feature, put it in that feature's folder instead.
  - **Subdirectory threshold**: a subdirectory needs ≥2 strongly related files (`auth/`, `routing/`, `http/`, `theme/`, `ui/` qualify); single-file infrastructure (`runtimeConfig.ts`, `queryClient.ts`, `tenant.ts`) stays flat at the `lib/` root.
  - **Dependency edge**: `lib/` may import generated `src/api/` code only inside `lib/http/client.ts` (the axios adapter). Pages/routes/components consume generated hooks from `@/api/hooks/...` directly.
- `src/pages/` — feature folders owning page UI, sub-components, hooks and schemas. `src/routes/` — thin TanStack Router file-route wrappers (guard + layout binding) that delegate to `pages/`.
- Menus: route modules export `routeConfig`, auto-discovered by `lib/routing/route-config.ts` via `import.meta.glob` — no manual registration.
