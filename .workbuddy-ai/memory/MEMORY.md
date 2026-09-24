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
- **侧边栏导航在 `data/nav.ts` 的 `navGroups` 里显式声明**（路由树表达不了排序与分组）。
  ⚠️ 曾经有过一版 `staticData` + `lib/nav/*` 的重构，**当前工作树里没有**——
  `lib/nav/` 是空目录（已删）、全仓 0 处 `staticData`。别照那份设计文档改代码。
- **「文章」是普通可点击项**（→ `/posts`），无折叠子菜单。理由：原来两个子项里
  「全部文章」与父项同址、「新建」已有列表页按钮入口，展开树只带来多一次点击 + 高亮重叠。
  `NavNode.children` 能力保留，供未来真需要分组的项用。
- **面包屑标签的三级优先级**（`buildCrumbs`）：
  `navGroups` 项 → `staticRoutes`（如 `/posts/new`）→ `dynamicRoutes` 的 `$param` 模式。
- **`staticRoutes` 是必需的一道守卫**：`/posts/new` 与 `/posts/$postId` 形状相同，
  不先登记静态表就会把 `new` 当成 `$postId` 的值、错标成「文章详情」。
  `matchDynamicRoute` 内部也有同样的 early-return 守卫。
- 动态段路由（`/posts/$postId`、`/posts/$postId/edit`）在 `dynamicRoutes` 登记。
- 面包屑末级可被页面覆盖：`useBreadcrumbLabel(pattern, label)`（`lib/breadcrumb-label.tsx`）。
- 别名：UI 包内部用 `#components/*` `#lib/*` `#hooks/*`（package.json imports）；
  app 侧用 `@/*` 指自己、`@workspace/ui/*` 指共享包。
- 根 `vite.config.ts` 有 `defaultPackage: "./apps/web"` → 仓库根直接 `vp dev` / `vp build`。

## 文章 CRUD（数据层模式）

- `apps/web/src/data/posts/`：模块级数组 + `Set<Listener>`，
  `useSyncExternalStore` 暴露 `usePosts()` / `usePost(id)`。
  **快照必须稳定引用**——每次调用都返回新解析的数组会无限重渲染。
- 持久化键 `tsr-mono.posts`；读失败回退 `seedPosts`；按 `updatedAt` 倒序。
- 新建/编辑共用 `components/post-form.tsx`；编辑页用 `key={post.id}` 强制重挂载。
- 校验：`aria-invalid` + `aria-describedby`，提交时触发后转实时。
- 路由表：`/posts`（列表）、`/posts/new`、`/posts/$postId`（详情）、`/posts/$postId/edit`。

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

6. **加了新 UI 组件后要清 Vite 依赖预打包缓存。**
   报 `Cannot read properties of null (reading 'useContext')` 时，
   先 `rm -rf apps/web/node_modules/.vite/deps` 再重启 dev，别先去查 node_modules 重复。
   （沙箱拦批量删除，需 `dangerouslyDisableSandbox`。）

7. **⚠️ 沙箱标签页 `visibilityState` 恒 hidden → CSS 动画时钟被冻结。**
   靠 `animation.finished` 触发状态迁移的组件（Base UI 的 `AlertDialog` / `Dialog`、
   折叠、Toast 等）在沙箱里会「关不掉」，`getAnimations()[0].currentTime` 永远停在 0。
   **这是环境假象，代码通常是对的。**
   验证逻辑用 `globalThis.BASE_UI_ANIMATIONS_DISABLED = true`——置上后弹层立即卸载即证明无误。
   相关源码：`@base-ui/react/internals/useAnimationsFinished.js`、
   `dialog/popup/DialogPopup.js` 的 `hidden: !mounted`。

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
  用 `bsk evaluate` 读 `data-state` / `data-open` / `data-closed` / `getBoundingClientRect()`。
- **点按钮要派发完整事件序列**：`pointerdown → mousedown → pointerup → mouseup → click`，
  只调 `.click()` 有时不触发 Base UI 的 Close。
- bsk 会插入 `BROWSER-SKILL-OVERLAY`，`document.elementFromPoint` 会先命中它，
  比较「最顶层元素」时要绕开。
- **`bsk` 的 CLI 用位置参数**：`bsk navigate --session <id> <url>`、
  `bsk evaluate --session <id> "<expr>"`。写成 `--url` / `--expression` 只会打印 help 后静默不做。
- 用脚本遍历 `document.styleSheets` 找 CSS 规则时，**必须递归 `@layer` / `@media` 的
  `cssRules`**，否则得到「0 条规则」的假象。

## 相关 skill

`~/.workbuddy-ai/skills/shadcn-basemono-monorepo/SKILL.md`
—— 完整搭建流程 + 全部坑位，下次做同类脚手架先读它。
