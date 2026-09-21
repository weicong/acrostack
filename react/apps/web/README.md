# AcroStack - React UI

AcroStack 解决方案的 React SPA，基于 [Vite+](https://viteplus.dev/)、[React 19](https://react.dev/) 与 TypeScript。**界面文案为硬编码中文，无 i18n 层。**

## 技术栈

| 技术                                                       | 用途                                                                 |
| ---------------------------------------------------------- | -------------------------------------------------------------------- |
| [Vite+](https://viteplus.dev/)                             | 统一工具链（Vite、Oxlint、Oxfmt 等，`vp` CLI）                       |
| [React](https://react.dev/) 19                             | UI 框架                                                              |
| [TanStack Router](https://tanstack.com/router)             | 文件式路由                                                           |
| [TanStack Query](https://tanstack.com/query)               | 服务端状态与请求编排                                                 |
| [TanStack Form](https://tanstack.com/form)                 | 表单状态管理                                                         |
| [Fluent UI React](https://react.fluentui.dev/) v9          | 组件库                                                               |
| [Axios](https://axios-http.com/)                           | HTTP 客户端                                                          |
| [oidc-client-ts](https://github.com/authts/oidc-client-ts) | OIDC 认证（对接 ABP Auth Server）                                    |
| [Zod](https://zod.dev/)                                    | Schema 校验                                                          |
| [@acrostack/core](../../packages/core)                     | ABP 框架接入层：运行时配置 / OIDC 授权 / 权限 / 多租户 / HTTP 拦截器 |
| [@acrostack/api-client](../../packages/api-client)         | Kubb 从 Swagger 生成的 API 客户端（本应用只消费）                    |

## 目录结构

```text
react/
├── dynamic-env.json      # 运行时环境变量（部署时可改，无需重新构建）
├── src/
│   ├── components/       # layout（RootLayout 等）+ ui 通用组件
│   ├── lib/              # 应用横切基础设施：core.ts（组合根：注入 env / 403 跳转 /
│   │                     #   共享 axios 实例）、routing（router/菜单/403 事件）、theme
│   ├── pages/            # 页面，按业务域分目录（account、identity 等）
│   ├── routes/           # TanStack Router 文件路由（routeTree.gen.ts 自动生成）
│   ├── App.tsx           # 根组件（Providers）
│   ├── env.ts            # 编译期环境变量兜底
│   └── main.tsx          # 启动：config → OIDC → interceptors → render
├── Dockerfile / nginx.conf
└── vite.config.ts        # /api、/connect、/swagger 代理
```

分层规则与准入条件（lib 不得 import 业务代码等）见 [AGENTS.md](AGENTS.md)——与 README 冲突时以 AGENTS.md 为准。

## 快速开始

1. 启动后端宿主（见仓库根 README）
2. 安装 `vp` CLI 并安装依赖：

```bash
vp install
vp dev          # http://localhost:5173，API 请求自动代理到后端
```

## 开发命令

| Script    | 实际命令               | 说明                             |
| --------- | ---------------------- | -------------------------------- |
| `dev`     | `vp dev`               | 启动开发服务器                   |
| `build`   | `vp check && vp build` | 检查（格式/lint/类型）+ 生产构建 |
| `preview` | `vp preview`           | 预览生产构建                     |
| `check`   | `vp check --fix`       | 格式化 + lint + 类型检查         |

提交前跑 `vp check`。改了后端 API 后先在 `react/` 执行 `vp run generate-api` 重新生成客户端，再写前端调用。

## 生成 API 客户端

API 客户端由 `@acrostack/api-client`（`packages/api-client`）承载：Kubb 从 Swagger 生成 TypeScript 类型（models）、Axios 客户端（clients）与 React Query hooks（hooks），输出到该包的 `src/generated/`（按后端 tag 分目录）；本应用只消费生成结果。

```bash
# 在工作区根（react/）执行；需要后端已运行
vp run generate-api
# 或直达后端契约（不经 dev server 代理）
KUBB_INPUT=https://localhost:44320/swagger/v1/swagger.json vp -C packages/api-client run generate
```

Kubb 配置为 `clean: true`：生成前会清空 `src/generated/`，因此后端必须先启动（否则会拿到空契约）。生成物禁止手改，调整输出形态请改该包的 `kubb.config.ts`。

## 环境变量

| 变量            | 用途                   | 开发默认                  |
| --------------- | ---------------------- | ------------------------- |
| `VITE_API_URL`  | 后端 API 地址          | `https://localhost:44320` |
| `VITE_AUTH_URL` | OIDC Issuer 地址       | `https://localhost:44320` |
| `VITE_APP_URL`  | OAuth 回调所属应用地址 | `http://localhost:5173`   |

配置在 `.env.development`，改后需重启 dev server（代理目标在启动时读取）。

**生产部署**：`.env.production` 使用相对路径（`/api`、`/connect`）；部署时通过 `dynamic-env.json` 运行时覆盖环境变量（vite 插件会将其拷贝到 public/），适合 nginx/Helm 场景下不重建镜像改配置。

## 认证

OIDC 授权码流程（`@acrostack/core` 的 `initUserManager` 基于 `@volo/abp-react-oidc-auth` 创建 client，自动静默续期）：受保护路由的 `beforeLoad` 中由 `@acrostack/core` 的 `authGuard` / `createPermissionGuard` 校验，未登录跳转 OAuth 登录页，权限不足跳 `/admin/403`。模拟登录（impersonation）、HTTP 拦截器（Bearer 注入、401 刷新重放、403 分流、`__tenant` 多租户头）同样由 `@acrostack/core` 提供；宿主差异（env、403 跳转、共享 axios 实例）统一在 `src/lib/core.ts` 注入。

## Docker

在 `react/` 目录下构建：

```bash
vp build
docker build -t acrostack/react:latest .
```

镜像为 `node:20-alpine` 构建（Corepack + pnpm，`pnpm run build` 内部即 `vp check && vp build`）+ `nginx:alpine` 运行，`nginx.conf` 处理 SPA fallback 与 API 代理。
