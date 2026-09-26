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
        posts/               # 文章数据层：types / store / index
      hooks/                 # use-theme
      lib/
        route-meta.ts        # 路由元数据（staticData 的 nav / breadcrumb）→ 菜单与面包屑标签
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
