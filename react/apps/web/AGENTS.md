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
- `src/lib/` — app-owned cross-cutting infrastructure: `core.ts` (composition root: injects env / 403 navigation / the shared axios transport into `@acrostack/core`), routing (`lib/routing/`), and truly single-file infrastructure flat at the root (`useDataTableQuery.ts` list-query bridge, `useMediaQuery.ts`, `usePageTitle.ts`).
  - **Admission rule**: `lib/` holds framework concerns only — no business semantics. If a file serves a single feature (e.g. a page's constants), put it in that feature's folder instead.
  - **Framework layer lives in `@acrostack/core`**: HTTP, auth (incl. impersonation), permissions, runtime config and the global query client were moved to `packages/core` (subpath exports `config` / `http` / `auth` / `permissions` / `tenant` / `query`; conventions in `packages/core/AGENTS.md`). Add ABP framework capabilities there, not here.
  - **Subdirectories**: open a `lib/` subdirectory per semantic concern (`routing/`); a directory is justified by cohesion, not file count. Truly single-file infrastructure stays flat at the `lib/` root (`core.ts`, `useMediaQuery.ts`, `usePageTitle.ts`).
  - **Dependency edge**: `lib/core.ts` is the **only** place allowed to import the generated API layer (`@acrostack/api-client/client`, for `transport`) — that import also wires the generated singleton onto the shared axios instance. Pages/routes/components consume generated hooks from `@acrostack/api-client/hooks/...` directly.
- `src/components/` — app chrome only: `layout/` (Root/App/Account/Page layouts, Sidebar, Header, UserMenu, ThemeSwitcher, ImpersonationBanner) and `ErrorBoundary.tsx` (wired once in `main.tsx`) at the root. Generic, feature-agnostic primitives live in `@acrostack/ui` (layout / theme / form / data-table incl. `ListToolbar` / dialog / app-shell) — do not recreate a `components/ui/` here. Business-specific components live in the owning page folder under `src/pages/`.
- `src/pages/` — feature folders owning page UI, sub-components, hooks and schemas. `src/routes/` — thin TanStack Router file-route wrappers (guard + layout binding) that delegate to `pages/`.
- Menus: route modules export `routeConfig`, auto-discovered by `lib/routing/route-config.ts` via `import.meta.glob` — no manual registration.
- **No frontend i18n**: UI text is hardcoded Chinese. Backend-localized error keys are translated centrally in `@acrostack/core` (`localizeAbpError` / `extractAbpErrorMessage`) — never hand-map keys elsewhere.
- **样式禁令**：本应用**不定义任何样式**——样式只能在 `@acrostack/ui` 内定义（完整规则见 `packages/ui/AGENTS.md` 的「样式所有权」）：
  - 禁止 `makeStyles`/`tokens`/`shorthands`/`mergeClasses`；禁止导入 `.css`/`.scss` 等样式表（**唯一例外**：`main.tsx` 中加载 `@acrostack/ui/styles/globals.css` 的那一行）；禁止用 `className` 承载样式；禁止用内联 `style` 写静态外观。
  - 排布一律用 `@acrostack/ui/layout` 的原语（`VStack`/`HStack`/`StackItem`/`Grid`/`GridSpan`/`Center`/`Section`/`Layout` 家族/`FormLayout`）：间距取刻度 `0 · 0.5 · 1 · 1.5 · 2 · 3 · 4 · 5 · 6 · 8 · 10`（2/4/6/8/12/16/20/24/32/40px）；尺寸用 `width`/`height`/`maxWidth`/`minWidth`/`minHeight`（数字按像素）。
  - 颜色与明暗：只用 `@acrostack/ui/theme`（`AppThemeProvider`/`useThemeMode`/主题对象），不在这里声明颜色。
  - 运行时动态值（尺寸、位置、进度、`transform`）允许内联 `style`；Fluent 的语义 props（`appearance`/`size`/`block` 等）不受限制。
  - **评审要点**：这个 PR 是否在 `@acrostack/ui` 之外新增了样式定义？缺少的能力先补进 `@acrostack/ui/layout`（做成通用原语），不要就地写样式。
- **Use Fluent components as-is.** 不改造 Fluent 组件自带外观；`Card`/`CardHeader` 已自带 padding 与 gap，需要更松/更紧时用它们的 `size` 属性。
