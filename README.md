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
      routes/          # 文件式路由：__root / index / posts/index / posts/new / about
      components/      # AppSidebar、NavMain、NavUser、TeamSwitcher、ThemeToggle
      data/nav.ts      # 导航数据的唯一来源（侧边栏 + 面包屑共用）
      hooks/           # use-theme
      lib/breadcrumb.tsx
packages/
  ui/                  # @workspace/ui —— 共享 UI 包
    src/components/    # shadcn base-nova 组件
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

- **导航数据只在 `apps/web/src/data/nav.ts` 声明一次**，侧边栏与面包屑都读它，
  两边不会各写一份标签。
- **面包屑由 URL 自动推导**：`buildCrumbs()` 遍历路径的每一级前缀，
  所以 `/posts/new` → 「首页 › 文章 › 新建」是推导出来的，没有逐路由硬编码。
- **侧边栏折叠状态**存在 `sidebar_state` cookie 里。shadcn 上游只写不读
  （Next.js 由服务端读回），纯 SPA 没有服务端，因此 `__root.tsx` 里用
  `readSidebarOpen()` 在挂载时恢复。
- **主题**（light / dark / system）存在 `localStorage` 的 `ui-theme`，
  并由 `index.html` 里一段内联脚本在首帧前应用，避免闪白/闪黑。

## 两个容易踩的坑

1. **Tailwind v4 在 monorepo 里默认只扫描 CSS 文件所在目录。**
   `globals.css` 在 `packages/ui` 下，若不显式声明，`apps/web` 里用到的类
   （例如 `md:flex`）不会被生成，表现为侧边栏整个塌成 0 宽。
   已在 `globals.css` 用 `@source "../../../.."` 指向整个仓库修复。

2. **Base UI 与 Radix 的 API 不同**，直接抄 shadcn 的 `new-york`（Radix）示例会踩坑：
   - 用 `render={<Comp />}` 而不是 `asChild`
   - 数据属性是扁平的 `data-open` / `data-vertical`，不是 `data-state="open"` / `data-orientation`
   - `Collapsible` 面板高度依赖 `--collapsible-panel-height`，open 态高度需要在 CSS 里补
     （已写在 `globals.css` 的 utilities 层）

## 验收结果

| 项                            | 结果                                        |
| ----------------------------- | ------------------------------------------- |
| `tsc --noEmit`（apps/web）    | 0 错误                                      |
| `tsc --noEmit`（packages/ui） | 0 错误                                      |
| `vp build`                    | 通过（2256 modules，路由级自动 code-split） |
| `vp fmt --check`              | 43 个文件全部合规                           |
| `vp lint`                     | 0 warnings / 0 errors（129 条规则）         |

浏览器实测：

- 四条路由 `/`、`/posts`、`/posts/new`、`/about` 均正常渲染；
  面包屑分别为「首页」「首页 › 文章」「首页 › 文章 › 新建」「首页 › 关于」，全部由 URL 推导。
- 主题三态：浅色 `oklch(1 0 0)`、深色 `oklch(0.145 0 0)`、跟随系统按 OS 取值；
  持久化在 `localStorage["ui-theme"]`。
- 侧边栏折叠到图标态（48px）后**刷新仍保持折叠**，`sidebar_state` cookie 恢复生效。
- 嵌套路由：`/posts/new` 时「文章」分组自动展开且「新建」高亮；`/posts` 时「全部文章」高亮。

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
