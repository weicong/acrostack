# AcroStack - React UI

AcroStack 解决方案的 React SPA，基于 [Vite+](https://viteplus.dev/)、[React 19](https://react.dev/) 与 TypeScript。**界面文案为硬编码中文，无 i18n 层。**

## 技术栈

| 技术                                                       | 用途                                                                 | 引入方式             |
| ---------------------------------------------------------- | -------------------------------------------------------------------- | -------------------- |
| [Vite+](https://viteplus.dev/)                             | 统一工具链（Vite、Oxlint、Oxfmt 等，`vp` CLI）                       | 工作区根             |
| [React](https://react.dev/) 19                             | UI 框架                                                              | 直接依赖             |
| [TanStack Router](https://tanstack.com/router)             | 文件式路由                                                           | 直接依赖             |
| [TanStack Query](https://tanstack.com/query)               | 服务端状态与请求编排                                                 | 直接依赖             |
| [shadcn/ui](https://ui.shadcn.com/) `base-nova`            | 组件原语（底层 [Base UI](https://base-ui.com/)）                     | 经 `@acrostack/ui`   |
| [Tailwind CSS](https://tailwindcss.com/) v4                | 样式体系（原子类 + CSS 变量令牌）                                    | 直接依赖             |
| [lucide-react](https://lucide.dev/)                        | 图标                                                                 | 直接依赖             |
| [Zod](https://zod.dev/)                                    | Schema 校验                                                          | 直接依赖             |
| [TanStack Form](https://tanstack.com/form)                 | 表单状态管理                                                         | 经 `@acrostack/ui`   |
| [Sonner](https://sonner.emilkowal.ski/)                    | Toast                                                                | 经 `@acrostack/ui`   |
| [Axios](https://axios-http.com/)                           | HTTP 客户端                                                          | 经 `@acrostack/core` |
| [oidc-client-ts](https://github.com/authts/oidc-client-ts) | OIDC 认证（对接 ABP Auth Server）                                    | 经 `@acrostack/core` |
| [@acrostack/core](../../packages/core)                     | ABP 框架接入层：运行时配置 / OIDC 授权 / 权限 / 多租户 / HTTP 拦截器 | workspace 包         |
| [@acrostack/ui](../../packages/ui)                         | shadcn 原语 + 全局样式表 + data-table / dialog / form 机制封装       | workspace 包         |
| [@acrostack/layout](../../packages/layout)                 | 路由无关的应用外壳（AppShell / 侧栏 / 面包屑 / 主题）                | workspace 包         |
| [@acrostack/api-client](../../packages/api-client)         | Kubb 从 Swagger 生成的 API 客户端（本应用只消费）                    | workspace 包         |

## 目录结构

```text
apps/web/
├── dynamic-env.json      # 运行时环境变量（部署时可改，无需重新构建）
├── Dockerfile / nginx.conf
├── vite.config.ts        # /api、/connect、/swagger 代理 + Tailwind 插件
└── src/
    ├── shell/            # 应用装配：route-meta（staticData → 菜单/面包屑）、layout、
    │                     #   breadcrumb、route-states、app-layout、account-layout、
    │                     #   impersonation-banner
    ├── lib/              # 应用横切基础设施：core.ts（组合根）、routeEvents.ts +
    │                     #   RouteEventProvider、useDataTableQuery.ts
    ├── pages/            # 业务页面，按域分目录（account、identity、settings、features…）
    ├── routes/           # 文件路由（createFileRoute + staticData；routeTree.gen.ts 自动生成）
    ├── components/       # 应用级组件（仅 ErrorBoundary）
    ├── App.tsx           # 根组件（Providers + Toast 宿主）
    ├── env.ts            # 编译期环境变量兜底
    ├── router.tsx        # 路由实例
    └── main.tsx          # 启动：config → OIDC → interceptors → render
```

`shell/` 与 `lib/` 的分层规则与准入条件（不得承载业务语义等）见 [AGENTS.md](AGENTS.md)——与 README 冲突时以 AGENTS.md 为准。

## 快速开始

1. 启动后端宿主（见仓库根 README）
2. 在工作区根（`react/`）安装依赖并启动：

```bash
vp install
vp dev          # http://localhost:5173，API 请求自动代理到后端
```

## 开发命令

| Script    | 实际命令     | 说明           |
| --------- | ------------ | -------------- |
| `dev`     | `vp dev`     | 启动开发服务器 |
| `build`   | `vp build`   | 生产构建       |
| `preview` | `vp preview` | 预览生产构建   |

提交前在工作区根跑 `vp check`（格式化 + lint + 类型检查）与 `vp test`。改了后端 API 后先执行 `vp run generate-api` 重新生成客户端，再写前端调用；生成规程与已知问题见 [packages/api-client/AGENTS.md](../../packages/api-client/AGENTS.md)。

## 环境变量

| 变量            | 用途                   | 开发默认                  |
| --------------- | ---------------------- | ------------------------- |
| `VITE_API_URL`  | 后端 API 地址          | `https://localhost:44320` |
| `VITE_AUTH_URL` | OIDC Issuer 地址       | `https://localhost:44320` |
| `VITE_APP_URL`  | OAuth 回调所属应用地址 | `http://localhost:5173`   |

配置在 `.env.development`，改后需重启 dev server（代理目标在启动时读取）。

**生产部署**：`.env.production` 使用相对路径（`/api`、`/connect`）；部署时通过 `dynamic-env.json` 运行时覆盖环境变量（vite 插件会将其拷贝到 public/），适合 nginx/Helm 场景下不重建镜像改配置。

## 认证

OIDC 授权码流程（`@acrostack/core` 的 `initUserManager` 基于 `@volo/abp-react-oidc-auth` 创建 client，自动静默续期）：受保护路由的 `beforeLoad` 中由 `authGuard` / `createPermissionGuard` 校验，未登录跳转 OAuth 登录页，权限不足跳 `/admin/403`。模拟登录（impersonation）、HTTP 拦截器（Bearer 注入、401 刷新重放、403 分流、`__tenant` 多租户头）同样由 `@acrostack/core` 提供；宿主差异（env、403 跳转、共享 axios 实例）统一在 `src/lib/core.ts` 注入。

## Docker

**构建上下文是仓库根**（`COPY` 路径都从 `react/` 开始）：

```bash
docker build -f react/apps/web/Dockerfile -t acrostack/react:latest .
```

镜像为 `node:22-alpine` 构建（Corepack + pnpm，`pnpm run build` 即工作区根脚本 `vp -C apps/web build`）+ `nginx:alpine` 运行，`nginx.conf` 处理 SPA fallback 与 API 代理。
