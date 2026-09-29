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
  web/                              # SPA 应用
    src/
      routes/                       # 文件式路由：文件名即 URL
        __root.tsx                  #   根布局：AppShell + <Outlet/>
        index.tsx                   #   /
        about.tsx                   #   /about
        posts/
          index.tsx                 #   /posts              —— 列表
          new.tsx                   #   /posts/new          —— 新建
          $postId/index.tsx         #   /posts/$postId      —— 详情
          $postId/edit.tsx          #   /posts/$postId/edit —— 编辑
      features/                     # 业务特性：一个领域一个目录
        posts/
          components/post-form.tsx  #   新建 / 编辑共用
          data/                     #   数据层：types / store / index
          lib/excerpt.ts
          index.ts                  #   该特性唯一的公共出口
      shell/                        # 应用装配：把路由接到外壳上
        layout.tsx                  #   导航数据、teams / user、renderLink
        route-meta.ts               #   路由元数据（staticData 的 nav / breadcrumb）
        breadcrumb.tsx              #   由 URL 推导面包屑
        route-states.tsx            #   路由级 pending / notFound / error
      lib/format.ts
      router.tsx  main.tsx
      routeTree.gen.ts              # 生成物，勿手改（`vp run routes` 重新生成）

packages/
  ui/                               # @workspace/ui —— 无状态 primitives
    src/components/                 #   shadcn base-nova 组件（button / input / sidebar / ...）
    src/hooks/  src/lib/utils.ts    #   use-mobile；cn()
    src/styles/globals.css          #   设计令牌 + Tailwind 入口
  layout/                           # @workspace/layout —— 应用外壳
    src/components/                 #   app-shell / app-sidebar / nav-main / nav-user /
                                    #   team-switcher / page-header / theme-* / breadcrumb*
    src/hooks/                      #   use-theme / use-breadcrumb-label
    src/lib/types.ts                #   外壳的对外契约（NavItem / Team / ShellUser ...）
    src/index.ts                    #   完整入口（含 AppShell）
    src/primitives.ts               #   子集入口：只要零件、不要整个 AppShell 时用

docs/
  requirements.md                   # 需求与依据
  migration/                        # Radix → Base UI 迁移报告（每组件一份 + project.md）
```

### 三条约定

**依赖方向单向**：`apps/web` → `packages/layout` → `packages/ui`，没有反向引用。
`packages/layout` 不 import 任何路由库——导航数据和链接渲染由 app 注入（`nav` / `renderLink`），
所以它换个路由器也能用。

**shadcn 组件只有一个归属地**：所有组件都加进 `packages/ui`。三份 `components.json` 的
`ui` / `utils` 别名统一指向 `@workspace/ui/*`，所以在哪个目录跑 `shadcn add` 都会落到同一个包。

**AI 工具目录**：`.agents/skills/` 是真实的 skill 安装位置，版本锁在 `skills-lock.json`。
`.codeartsdoer/` `.codebuddy/` `.trae/` `.zcode/` 只是指向它的 Windows junction，已加入
`.gitignore`——git 存不了 junction，跟踪它们会在 clone 时落出 5 份实体拷贝。

## 常用命令

```bash
vp install          # 安装依赖
vp dev              # 启动 dev server（http://localhost:7527）
vp build            # 生产构建
vp preview          # 预览生产构建（http://localhost:7627）
vp check            # oxfmt 格式 + oxlint 规则 + 类型检查
vp check --fix      # 自动修复格式
vp run -r typecheck # 各 workspace 的 tsc --noEmit
vp run routes      # 重新生成 routeTree.gen.ts（在 apps/web 内）
```

根 `vite.config.ts` 里设了 `defaultPackage: "./apps/web"`，所以在仓库根目录直接 `vp dev` /
`vp build` 就会作用于 `apps/web`，不需要 `-C apps/web`。

### 端口

**故意不用 Vite 的 5173 / 4173**——那是所有 Vite 项目的默认值，跟机器上任何别的 Vite 检出都会撞。
端口配在 `apps/web/vite.config.ts`（dev `7527`、preview `7627`），选值的原则是：避开常见默认
（3000 / 5173 / 8080 / 4173），且**低于 49152**，免得被操作系统当成临时端口随机占用。

并且开了 `strictPort`：**被占用时直接报错，而不是静默顺延到 7528**，免得实际 URL 和这里写的不一致。

要跑第二个实例（并行 worktree、另一个 agent），给它一个自己的端口：

```bash
PORT=5300 vp dev              # 环境变量
vp -C apps/web dev --port 5300  # 或命令行（Vite 原生参数，优先级最高）
```

若你更希望"总是能起一个 server、端口随便"，把 `apps/web/vite.config.ts` 里的
`strictPort: true` 删掉即可恢复 Vite 的自动顺延。
