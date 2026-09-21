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

- **API 层已移出本应用**：Kubb 生成的 models / clients / hooks 位于 `@acrostack/api-client`（`packages/api-client`，生成物禁止手改）。应用侧按 `@acrostack/api-client/hooks/...`、`/models/...`、`/clients/...` 导入；生成命令见 `packages/api-client/AGENTS.md`。
- `src/lib/` — framework-level, cross-cutting infrastructure: HTTP (`lib/http/`), auth (`lib/auth/`, including impersonation — a self-built replacement for ABP Account Pro's feature), routing (`lib/routing/`), theme, runtime config, global query client.
  - **Admission rule**: `lib/` holds framework concerns only — no business semantics. If a file serves a single feature (e.g. a page's constants), put it in that feature's folder instead. Cross-cutting capabilities that reimplement an ABP framework module (e.g. `auth/impersonation.ts`) are infrastructure, not business.
  - **Subdirectories**: open a `lib/` subdirectory per semantic concern (`auth/`, `http/`, `routing/`, `theme/`); a directory is justified by cohesion, not file count. Truly single-file infrastructure stays flat at the `lib/` root (`runtimeConfig.ts`, `queryClient.ts`).
  - **Dependency edge**: `lib/` may import the generated API layer only inside `lib/http/client.ts` (the axios adapter — it takes the bare `client` from `@acrostack/api-client/client`). Pages/routes/components consume generated hooks from `@acrostack/api-client/hooks/...` directly.
- `src/components/` — `ui/` holds all generic, feature-agnostic primitives (form fields + `useAppForm`, data-table, `ConfirmDialog`); `layout/` holds app chrome (Shell, Sidebar, Header, layouts); `ErrorBoundary.tsx` (wired once in `main.tsx`) sits at the root. Business-specific components live in the owning page folder under `src/pages/`.
- `src/pages/` — feature folders owning page UI, sub-components, hooks and schemas. `src/routes/` — thin TanStack Router file-route wrappers (guard + layout binding) that delegate to `pages/`.
- Menus: route modules export `routeConfig`, auto-discovered by `lib/routing/route-config.ts` via `import.meta.glob` — no manual registration.
- **No frontend i18n**: UI text is hardcoded Chinese. Backend-localized error keys are translated centrally in `lib/http/error.ts` (`localizeAbpError` / `extractAbpErrorMessage`) — never hand-map keys elsewhere.
- **Styling rules** (Fluent UI v9 — see the official _Concepts / Developer / Styling components_ doc):
  - **Use Fluent components as-is.** Never re-skin their default appearance (padding, radius, colors, shadows, focus rings). `Card`/`CardHeader` already provide padding + gap via `--fui-Card--size` (8/12/16px) — pass `size` instead of writing `padding`.
  - **All styling goes through Griffel `makeStyles`** (module scope, one `useStyles` hook). The only global CSS is the document-level reset in `src/styles/globals.css` (box-sizing + full height) — no component appearance there, ever.
  - **Design decisions come from tokens** (`tokens.colorNeutralBackground2`, `tokens.spacingVerticalL`, `tokens.borderRadiusMedium`, `tokens.fontSizeBase400`, …). Hardcoded colors are forbidden; the brand color is defined once in `src/lib/theme/brand.ts` and expanded by `createLightTheme`/`createDarkTheme`.
  - **No CSS shorthand properties** in Griffel styles (unsupported): use `shorthands.padding(...)`, `shorthands.gap(...)`, `shorthands.borderBottom(...)`, `shorthands.flex(...)`, `shorthands.overflow(...)`.
  - **Class merging only via `mergeClasses()`** — never string-concatenate class names, and a parent-provided `className` always goes last.
  - **No inline `style={{…}}`**; layout wrappers of our own (`<div className={styles.grid}>`) are fine, but do not target Fluent component internals with selectors.
  - Responsive layout uses Griffel media queries with the shared breakpoint (`DESKTOP_MEDIA_QUERY` in `src/lib/useMediaQuery.ts`); colors/typography never change per breakpoint.
  - **Theme-agnostic**: light / dark / system are all first-class (`AppThemeProvider`). Never assume a light canvas or a specific brand hue in styles.
