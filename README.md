# AcroStack

ABP **单层（no-layer）模板**的基础版：ASP.NET Core 宿主 + React 19 SPA，保留 ABP 官方单层模板自带的模块，并在其上**自研实现 ABP Account Pro 的模拟登录（impersonation）**，以避免商业授权依赖。

## 架构

```text
main/AcroStack/        组合根（宿主）：AcroStackModule、唯一 AcroStackDbContext、
│                      EF 迁移、种子、Swagger、HomeController。不含业务逻辑。
modules/
│  └── AcroStack.Impersonation   自研模块：用户模拟登录（对应 ABP Account Pro 的 impersonation）
react/                 React 19 SPA（Vite+ 工具链，TanStack Router/Query/Form，Fluent UI v9）
```

要点：

- **模块集对齐 ABP 官方单层模板**：Account、Identity、OpenIddict（核心）、Permission / Setting / Feature Management，以及 Audit Logging、Background Job、BLOB Storing、Autofac、Serilog、Swagger。CMS Kit、Chat、File Management、OpenIddict 管理 UI、Tenant Management / SaaS 均**不在**其中。
- **多租户关闭**（`AbpMultiTenancyOptions.IsEnabled` 保持默认 `false`）——与官方单层模板默认一致；实体不携带 `TenantId`。
- 数据库为 SQLite（`main/AcroStack/AcroStack.db`）。宿主**禁用了全局 UoW 事务**（SQLite 单写者限制），跨聚合写入必须走显式事务。
- **Mapperly** 做对象映射（非 AutoMapper）。
- **自动 API**：应用服务按约定暴露为 REST 端点；仅 `HomeController` 手写。
- 前端 `react/src/api/` 由 **Kubb** 从 Swagger 生成，禁止手改。

## 模块一览

| 模块 | 职责 | 来源 |
| --- | --- | --- |
| Account / Identity / OpenIddict / Permission / Setting / Feature Management | 官方单层模板的基础模块 | ABP 开源包 |
| Audit Logging / Background Jobs / BLOB Storing | 官方单层模板预配置的数据与后台能力 | ABP 开源包 |
| `AcroStack.Impersonation` | 用户模拟登录：服务端持久化会话，可审计可撤销 | 自研（对应 Account Pro 的 impersonation） |

各模块详情见 `modules/<模块名>/README.md`，Impersonation 见 [modules/AcroStack.Impersonation/README.md](modules/AcroStack.Impersonation/README.md)。

## 快速开始

环境要求：.NET 10 SDK、Node 18/20、pnpm、`vp` CLI（[Vite+](https://viteplus.dev/)）。

```bash
# 1. 后端（首次或拉取后先迁移 + 种子）
dotnet run --project main/AcroStack --migrate-database
dotnet run --project main/AcroStack        # https://localhost:44320，Swagger 在 /swagger

# 2. 前端
cd react
vp install
vp dev                                     # http://localhost:5173
```

默认管理员账号见 `main/AcroStack/AcroStackConsts.cs`（仅开发环境种子）。

常用命令速查见 [AGENTS.md](AGENTS.md)（后端构建/迁移、前端 `vp check`、`vp run generate-api` 等）。

## 文档结构

| 文档 | 内容 |
| --- | --- |
| [AGENTS.md](AGENTS.md) | 架构约定、命令、编码规范（最权威，随代码同步维护） |
| `.agents/skills/` | ABP 各专题模式沉淀（应用层、DDD、EF Core、多租户等） |
| `modules/*/README.md` | 各模块的业务场景、对应关系、关键设计决策 |
| [react/README.md](react/README.md) / [react/AGENTS.md](react/AGENTS.md) | 前端技术栈、目录结构、工具链与准入规则 |
| `docs/archive/` | 已完结的过程性文档（交接、修复计划），仅作历史参考 |

维护规则：新增/重命名模块时同步更新该模块 README 与本文件的模块一览；过程性文档完成后移入 `docs/archive/`。

## 生产部署

- 生产环境需正式的 `openiddict.pfx` 签名证书（宿主生产环境对证书缺失 fail-fast）：

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p <your-password>
```

- 生产 OpenIddict 证书等配置见 `main/AcroStack/appsettings.json`（证书口令经环境变量 `AuthServer__CertificatePassPhrase` 或 `appsettings.secrets.json` 提供）。
- 前端 Docker 部署见 [react/README.md](react/README.md)，支持 `dynamic-env.json` 运行时覆盖环境变量（无需重新构建）。
- 参考部署脚本：`etc/build/`（镜像构建）、`etc/docker/`（docker-compose）。

## 相关资源

- [ABP Framework 文档](https://abp.io/docs/latest)
- [Single Layer Solution 模板文档](https://abp.io/docs/latest/solution-templates/single-layer-web-application/overview)
- [Account (Pro) 模块文档](https://abp.io/docs/latest/modules/account-pro)（模拟登录的设计参照）
