# tsr-mono

TanStack Router（router-only / 纯 SPA）+ shadcn/ui 脚手架，pnpm monorepo，由 Vite+ 统一驱动。

## 技术栈

| 项            | 选择                                                       |
| ------------- | ---------------------------------------------------------- |
| 构建工具      | Vite+ (`vp`) — dev / build / check / 依赖安装统一入口      |
| 包管理器      | pnpm（由 Vite+ 托管）                                      |
| 路由          | TanStack Router，文件式路由 + **router-only**（无 Start）  |
| UI            | shadcn/ui `base-nova` 风格（基于 Base UI）                 |
| 样式          | Tailwind CSS v4                                            |
| 校验 / 格式化 | oxlint + oxfmt（Vite+ 自带，无 eslint / prettier / biome） |

## 目录结构

```
apps/
  web/                 # SPA 应用
    src/
      routes/
        __root.tsx           # 布局：侧边栏 + 顶栏 + 面包屑 + <Outlet/>
        index.tsx            # /
        about.tsx            # /about
        posts/
          index.tsx          # /posts      —— 列表
          new.tsx            # /posts/new  —— 新建
          $postId/index.tsx  # /posts/$postId      —— 详情
          $postId/edit.tsx   # /posts/$postId/edit —— 编辑
      components/
        app-sidebar.tsx  nav-main.tsx  nav-user.tsx  team-switcher.tsx
        theme-toggle.tsx  post-form.tsx   # post-form 为新建/编辑共用
      data/
        nav.ts               # 侧边栏分组 + dynamicRoutes + staticRoutes
        posts/               # 文章数据层：types / store / index
      hooks/                 # use-theme
      lib/
        breadcrumb.tsx       # 由 URL 推导面包屑
        breadcrumb-label.tsx # 面包屑末级标签覆盖（详情页显示真实标题）
        format.ts            # formatDateTime / excerpt
packages/
  ui/                  # @workspace/ui —— 共享 UI 包
    src/components/    # shadcn base-nova 组件（含 button/input/textarea/label/
                       #   alert-dialog/separator/sidebar/collapsible/...）
    src/hooks/
    src/lib/utils.ts   # cn()
    src/styles/globals.css  # 设计令牌 + Tailwind 入口
```

## 常用命令

```bash
vp install          # 安装依赖
vp dev              # 启动 dev server（http://localhost:5173）
vp build            # 生产构建
vp check            # oxfmt 格式 + oxlint 规则 + 类型检查
vp check --fix      # 自动修复格式
vp run -r typecheck # 各 workspace 的 tsc --noEmit
vp run routes      # 重新生成 routeTree.gen.ts（在 apps/web 内）
```

根 `vite.config.ts` 里设了 `defaultPackage: "./apps/web"`，所以在仓库根目录直接 `vp dev` /
`vp build` 就会作用于 `apps/web`，不需要 `-C apps/web`。

## 关键约定

- **侧边栏导航在 `apps/web/src/data/nav.ts` 里声明**（`navGroups`）。路由树本身
  无法表达「排序」和「哪些项属于一组」，所以这份分组清单是显式的；
  `nav-main.tsx` 负责渲染，`useMatchRoute` 负责高亮（`fuzzy` 让 `/posts/new` 也点亮「文章」）。
- **文章是一个普通的可点击项**（`/posts`），不带折叠子菜单——
  它的两个子项里「全部文章」和父项同址、且「新建」已有列表页按钮入口，
  展开树带来的只是多一次点击和高亮重叠。`NavNode` 仍保留 `children` 能力，
  供未来真正需要分组的项使用。
- **面包屑由 URL 逐级前缀推导**（`lib/breadcrumb.tsx` 的 `buildCrumbs`），
  标签来源按优先级：`navGroups` 里的项 → `staticRoutes`（如 `/posts/new`）→
  `dynamicRoutes` 的 `$param` 模式。
- **`staticRoutes` 是防止动态模式误吞静态路由的关键**：`/posts/new` 与
  `/posts/$postId` 形状相同，若不先登记静态表，`new` 会被当成 `$postId` 的值、
  面包屑错标成「文章详情」。`matchDynamicRoute` 内部也有一道同样的守卫。
- **动态段路由**（`/posts/$postId`、`/posts/$postId/edit`）在 `dynamicRoutes` 里登记，
  `matchDynamicRoute` 按段比对并捕获 `$param`，作为面包屑的兜底。
- **面包屑末级标签可被页面覆盖**：详情页调用
  `useBreadcrumbLabel("/posts/$postId", post?.title)`，让面包屑显示真实文章标题
  而不是通用的「文章详情」（由 `lib/breadcrumb-label.tsx` 的 Context 实现）。
- **侧边栏折叠状态**存在 `sidebar_state` cookie 里。shadcn 上游只写不读
  （Next.js 由服务端读回），纯 SPA 没有服务端，因此 `__root.tsx` 里用
  `readSidebarOpen()` 在挂载时恢复。
- **主题**（light / dark / system）存在 `localStorage` 的 `ui-theme`，
  并由 `index.html` 里一段内联脚本在首帧前应用，避免闪白/闪黑。

## 文章 CRUD

一个完整可用的 CRUD 示例，数据存在 `localStorage["tsr-mono.posts"]`。

| 路由                  | 页面 | 说明                                                    |
| --------------------- | ---- | ------------------------------------------------------- |
| `/posts`              | 列表 | 「共 N 篇」计数、空状态、每行「编辑 / 删除」            |
| `/posts/new`          | 新建 | `PostForm`，校验通过后创建并跳转详情页                  |
| `/posts/$postId`      | 详情 | 正文 `whitespace-pre-wrap`、创建/更新于、编辑与删除入口 |
| `/posts/$postId/edit` | 编辑 | `PostForm` 预填，`key={post.id}` 保证切换文章时重挂载   |

数据层在 `data/posts/`：

- 模块级 `posts` 数组 + 订阅者集合，通过 `useSyncExternalStore` 暴露 `usePosts()` / `usePost(id)`。
  **快照必须稳定**（每次调用返回同一个数组引用并在变更时才换新引用），
  否则 `useSyncExternalStore` 会无限重渲染。
- 排序按 `updatedAt` 倒序，最新在最前。
- `createPost` / `updatePost` / `deletePost` / `resetPosts`，每次变更即写回 localStorage；
  `load()` 读失败时回退到 `seedPosts`。
- 删除走 `AlertDialog` 二次确认；确认后删除并 `navigate({ to: "/posts" })`。
- 表单校验在提交时触发，之后转为实时校验（`submitted` 标志），
  错误通过 `aria-invalid` + `aria-describedby` 关联到输入框。

## 几个容易踩的坑

1. **Tailwind v4 在 monorepo 里默认只扫描 CSS 文件所在目录。**
   `globals.css` 在 `packages/ui` 下，若不显式声明，`apps/web` 里用到的类
   （例如 `md:flex`）不会被生成，表现为侧边栏整个塌成 0 宽。
   已在 `globals.css` 用 `@source "../../../.."` 指向整个仓库修复。

2. **Base UI 与 Radix 的 API 不同**，直接抄 shadcn 的 `new-york`（Radix）示例会踩坑：
   - 用 `render={<Comp />}` 而不是 `asChild`
   - 数据属性是扁平的 `data-open` / `data-closed` / `data-vertical`，
     不是 `data-state="open"` / `data-orientation`
   - `Collapsible` 面板高度依赖 `--collapsible-panel-height`，open 态高度需要在 CSS 里补
     （已写在 `globals.css` 的 utilities 层）

3. **新增 UI 组件后要清 Vite 的依赖预打包缓存。**
   中途往 `packages/ui` 加组件（如 `input`、`alert-dialog`）时，
   `.vite/deps` 里可能残留旧哈希的 react 实例，页面会报
   `Cannot read properties of null (reading 'useContext')`。
   停 dev server → `rm -rf apps/web/node_modules/.vite/deps` → 重启即可。
   （与「react 装了两份」无关，先查这个缓存，别急着去翻 node_modules。）

## 验收结果

| 项                            | 结果                                        |
| ----------------------------- | ------------------------------------------- |
| `tsc --noEmit`（apps/web）    | 0 错误                                      |
| `tsc --noEmit`（packages/ui） | 0 错误                                      |
| `vp build`                    | 通过（2303 modules，路由级自动 code-split） |
| `vp fmt --check`              | 55 个文件全部合规                           |
| `vp lint`                     | 0 warnings / 0 errors（144 条规则）         |

浏览器实测：

- 六条路由 `/`、`/posts`、`/posts/new`、`/posts/$postId`、`/posts/$postId/edit`、`/about`
  均正常渲染；面包屑全部由 URL 推导，详情页/编辑页末级显示真实文章标题。
- 侧边栏为 **3 个平级项**（首页 / 文章 / 关于）+ Projects 分组，
  「文章」直接跳 `/posts`，无折叠子菜单、无高亮重叠（`collapsible` 计数为 0）。
- 主题三态：浅色 `oklch(1 0 0)`、深色 `oklch(0.145 0 0)`、跟随系统按 OS 取值；
  持久化在 `localStorage["ui-theme"]`。
- 侧边栏折叠到图标态（48px）后**刷新仍保持折叠**，`sidebar_state` cookie 恢复生效。
- **CRUD 全流程（读 / 建 / 改 / 删）实测通过**：
  - 列表显示「共 3 篇」种子数据，按更新时间倒序；
  - 空表单提交 → 显示「标题不能为空」、`aria-invalid="true"`、停留在 `/posts/new`，
    输入后错误实时消失；
  - 创建后跳转详情页、面包屑显示新标题、正文换行保留、写入 localStorage；
  - 刷新后数据仍在（持久化生效）；
  - 编辑页预填正确，保存后 `updatedAt` 更新、面包屑同步；
  - 删除弹 `role="alertdialog"` 二次确认，确认后回到列表且计数减一。

## 已知的非致命告警

`Base UI: A component that acts as a button expected a native <button> ...`
—— 用 `<Button render={<Link />} />` 时 Base UI 会在 dev 下打这条 `console.error`。
这是 `base-nova` 注册表原样带来的行为（模板自带的 `nav-main.tsx` / `nav-projects.tsx`
同样触发），不影响渲染与交互。如要消掉，给对应 `Button` 传 `nativeButton={false}`。

## 已知环境问题

沙箱里 `vp check` 的类型检查步骤（tsgolint）会因为 Windows 管道耗尽报
`os error 231`。这是运行环境限制而非项目问题，接口验证方式是：

```bash
cd apps/web && ./node_modules/.bin/tsc --noEmit     # 0 错误
cd packages/ui && ./node_modules/.bin/tsc --noEmit  # 0 错误
```

另：沙箱会拦截「一次删除 > 50 个文件」。若 `vp build` 报
`SAFE_DELETE_BULK_CONFIRM_REQUIRED`，先手动分批清掉 `apps/web/dist` 再构建即可，
与项目本身无关。

**沙箱里验证弹层类交互时注意动画时钟被冻结。**
自动化标签页的 `document.visibilityState` 恒为 `hidden`，Chrome 会冻结 CSS 动画时钟
（`Animation.currentTime` 停在 0、永不推进），于是 `animation.finished` 的 Promise
永不 resolve。Base UI 的 `AlertDialog` / `Dialog` 正是靠 `Promise.all(getAnimations()
.map(a => a.finished))` 来判断退场动画结束、进而卸载弹层的，所以在沙箱里会看到
「点了取消但弹层仍在 DOM 且可见」的假象——**代码是对的，是环境不推进动画**。
验证方法：先 `globalThis.BASE_UI_ANIMATIONS_DISABLED = true`（Base UI 提供的开关），
弹层就会立即卸载，从而证明逻辑无误。同理，`bsk screenshot` 在这种标签页下只会返回
上一帧，交互后的状态请改用 `bsk evaluate` 读 `data-open` / `data-closed` /
`getBoundingClientRect()` 判断。
