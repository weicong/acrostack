# MEMORY.md — tsr-mono 项目长期笔记

## 项目定位

`E:\test5\tsr-mono` —— TanStack Router（router-only / 纯 SPA）+ shadcn/ui 脚手架 monorepo。
按 `docs/requirements.md` 实现，2026-09-24 完成并通过全部验收。

## 技术栈（勿擅自替换）

| 项 | 选择 | 备注 |
|---|---|---|
| 构建工具 | **Vite+ (`vp`)** | dev / build / check / 依赖安装统一入口，**不得引入 eslint / prettier / biome** |
| 包管理器 | pnpm | 由 Vite+ 托管 |
| 路由 | TanStack Router | **必须 router-only**，不是 TanStack Start |
| UI | shadcn/ui **`base-nova`** | 基于 **Base UI**（不是 Radix！） |
| 样式 | Tailwind v4 | |

## 目录约定

- `apps/web` = 应用；`packages/ui` = `@workspace/ui` 共享包（组件 / 样式 / 工具）
- **导航数据只在 `apps/web/src/data/nav.ts` 声明一次**，侧边栏与面包屑都读它。
  新增路由时改这一处 + 加路由文件即可。
- 别名：UI 包内部用 `#components/*` `#lib/*` `#hooks/*`（package.json imports）；
  app 侧用 `@/*` 指自己、`@workspace/ui/*` 指共享包。
- 根 `vite.config.ts` 有 `defaultPackage: "./apps/web"` → 仓库根直接 `vp dev` / `vp build`。

## 铁律（都是踩过坑换来的）

1. **Tailwind v4 必须显式声明 `@source`。**
   `packages/ui/src/styles/globals.css` 里那两行 `@source` 不能删——
   删掉后 `apps/web` 用到的类（如 `md:flex`）不会被生成，侧边栏会整体塌成 0 宽 0 高。

2. **Base UI 的 API 与 Radix 不同，不要照抄 shadcn 的 `new-york` 示例。**
   `render={<Comp/>}` 而非 `asChild`；数据属性是 `data-open` / `data-vertical`（扁平）；
   Tailwind 用 `data-open:` / `group-data-open/`。
   另：`render={<SidebarMenuItem />}` 会把 `data-slot` 覆盖到 `li` 上，
   按 `data-slot=collapsible` 查节点会漏。

3. **侧边栏折叠靠 `sidebar_state` cookie，`__root.tsx` 的 `readSidebarOpen()` 不能删。**
   上游只写不读（Next.js 由服务端读回），纯 SPA 必须自己恢复，否则刷新即丢。

4. **Collapsible 的 open 态高度规则在 `globals.css` utilities 层**，不能删。

5. **两个 `components.json` 的 `style` / `iconLibrary` / `baseColor` 必须一致**，
   Tailwind v4 下 `tailwind.config` 留空 `""`。

## 环境注意

- **`vp check` 里 tsgolint 在本沙箱必失败**（`os error 231`，Windows 管道耗尽）——
  环境限制，非项目问题。类型验证用：
  `cd apps/web && ./node_modules/.bin/tsc --noEmit`（同理 packages/ui）。
- `vp install` 时根 `package.json` **不要放 `prepare: vp config`**，
  本机 git 路径让 `vp config` 报 `git command not found`（exit 1）导致安装失败。
- `tsr generate` 会打一条 `replaceRouteChunk` 的 circular dependency warning，无害。
- 沙箱里 dev server 曾被 `--port` 参数覆盖；`apps/web` 的 `dev` 脚本已写死
  `vp dev --port 5173`，**本项目固定用 5173**。
  ⚠️ 本机 `localhost:3000` 被另一个无关项目占用，别搞混。
- 探测端口产物别用标题判断，看 `document.title` + 专属字符串，
  或 `curl localhost:<port>/src/main.tsx` 看里面的绝对路径。

## 验证手法

- 交互后的 UI 状态**不要靠截图**（沙箱标签页 `visibilityState` 恒 hidden，截图只返回上一帧）。
  用 `bsk evaluate` 读 `data-state` / `data-open` / `getBoundingClientRect()`。
- 用脚本遍历 `document.styleSheets` 找 CSS 规则时，**必须递归 `@layer` / `@media` 的
  `cssRules`**，否则得到「0 条规则」的假象。

## 相关 skill

`~/.workbuddy-ai/skills/shadcn-basemono-monorepo/SKILL.md`
—— 完整搭建流程 + 全部坑位，下次做同类脚手架先读它。
