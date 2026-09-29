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

- **API 层已移出本应用**：Kubb 生成的 models / clients / hooks 位于 `@workspace/api-client`（生成物禁止手改）。应用侧按 `@workspace/api-client/hooks/...`、`/models/...`、`/clients/...` 导入；生成命令见 `packages/api-client/AGENTS.md`。
- `src/shell/` — **应用装配层**：把「本应用的路由树 + ABP 权限 + OIDC 会话」翻译成 `@workspace/layout` 认识的数据形状。
  - `route-meta.ts` — 路由元数据（`staticData.nav` / `staticData.breadcrumb`）→ 侧栏分组与面包屑标签索引；**本文件不认识权限系统**，可见性由调用方注入谓词。
  - `layout.tsx` — `renderLink`、`useShellNav()`（路由树 → 按 `isGranted` 过滤 → 分组）、`useShellUser()`。
  - `breadcrumb.tsx` — 由 URL 推导面包屑；`route-states.tsx` — pending / notFound / error；`app-layout.tsx` / `account-layout.tsx` — 两种外壳接线；`impersonation-banner.tsx`。
- `src/lib/` — app-owned cross-cutting infrastructure: `core.ts` (composition root: injects env / 403 navigation / the shared axios transport into `@workspace/core`), `routeEvents.ts` + `RouteEventProvider.tsx`（非 React 上下文 → 路由导航的事件总线）, and truly single-file infrastructure flat at the root (`useDataTableQuery.ts`).
  - **Admission rule**: `lib/` holds framework concerns only — no business semantics. If a file serves a single feature (e.g. a page's constants), put it in that feature's folder instead.
  - **Framework layer lives in `@workspace/core`**: HTTP, auth (incl. impersonation), permissions, runtime config and the global query client. Add ABP framework capabilities there, not here.
  - **Dependency edge**: `lib/core.ts` is the **only** place allowed to import the generated API layer (`@workspace/api-client/client`, for `transport`). Pages/routes/components consume generated hooks directly.
- `src/components/` — app chrome only: `ErrorBoundary.tsx`。通用原语在 `@workspace/ui/components/*`，应用外壳在 `@workspace/layout` —— **不要在这里重建 `ui/` 或 `layout/`**。业务专属组件放在所属页面目录下（`src/pages/<域>/components/`）。
- `src/pages/` — 业务页面，按业务域分目录，自带 `components/` / `hooks/` / `schemas/` / `types/` / `utils/`。`src/routes/` — **薄壳**：`createFileRoute` + `staticData` 元数据 + 权限守卫，组件直接指向 `pages/`。
- **菜单与面包屑来自路由元数据**：每个路由在 `staticData.nav`（侧栏）或 `staticData.breadcrumb`（仅面包屑）里声明自己的位置与名字，由 `shell/route-meta.ts` 从路由树推导——**没有第二份菜单清单要同步**。菜单层级跟随路由树的嵌套关系。
- **No frontend i18n**: UI text is hardcoded Chinese. Backend-localized error keys are translated centrally in `@workspace/core` (`localizeAbpError` / `extractAbpErrorMessage`) — never hand-map keys elsewhere.

## 样式

样式体系是 **Tailwind CSS v4 + shadcn/ui `base-nova`**（底层 Base UI）。规则：

- 排布与外观一律用 Tailwind 原子类；**不写自定义 CSS 文件、不新增样式定义**。
- 全应用唯一的全局样式表是 `packages/ui/src/styles/globals.css`（令牌 + `@theme inline`），应用入口 `main.tsx` 里那一行 import 加载它。
- 颜色只消费语义令牌（`bg-background` / `text-muted-foreground` / `border-border` / `ring-ring` …），**不写十六进制色值**。
- 明暗主题靠 `<html>` 上的 `dark` 类（首屏由 `index.html` 的内联脚本预先应用，避免闪白），React 侧没有主题 Provider；切换用 `@workspace/layout` 的 `useTheme()`。
- 内联 `style` 只允许用于**运行时才知道的值**（尺寸、位置、进度、`transform`、CSS 变量透传）。
- **Use shadcn components as-is.** 不改造原语自带外观；需要新原语时用 `shadcn` CLI 加进 `packages/ui/src/components/`，不要在应用里就地拼一个。
- **Base UI ≠ Radix**：`asChild` 用 `render`；`data-[state=open]:` 在菜单触发器上是 `data-popup-open:`；`DropdownMenuLabel` 必须在 `DropdownMenuGroup` 内；`Button` 的 `render` 指向 `<a>` 时加 `nativeButton={false}`。
- **评审要点**：本次改动是否在 `packages/ui` 之外新增了样式定义或色值？排布能力不够时优先用 Tailwind 表达，确实要复用的再抽成原语。
