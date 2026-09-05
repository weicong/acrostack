# AcroStack

ABP 模块化单体 + React SPA 的课堂实时答题系统。基于 ABP 单层模板起步，宿主保持极薄，业务全部下沉到 `modules/` 下的功能模块——其中一组模块**手写替代了 ABP Commercial（Pro）的商业模块**，避免商业授权依赖。

## 架构

```text
main/AcroStack/        组合根（宿主）：AcroStackModule、唯一 AcroStackDbContext、
│                      EF 迁移、种子、Swagger、HomeController。不含业务逻辑。
modules/               业务模块（每个模块自带 Entities/Services/Dtos/Permissions/Localization）
│  ├── AcroStack.*      单项目功能模块（9 个，多数替代 ABP Pro 对应模块）
│  ├── AcroStack.Common 跨模块共享基础设施
│  └── classroom/       完整分层 ABP 模块（Domain / Application / EFCore / HttpApi / Tests）
react/                 React 19 SPA（Vite+ 工具链，TanStack Router/Query/Form，Fluent UI v9）
```

要点：

- **多租户开启**（`AcroStackModule.IsMultiTenant = true`），数据库为 SQLite（`main/AcroStack/AcroStack.db`）。
- **宿主禁用了全局 UoW 事务**（SQLite 单写者限制）。跨聚合写入必须走显式事务执行器：优先 `IAcroStackTransactionExecutor`（`modules/AcroStack.Common/Transactions/`），classroom 场景用其 EF 原生 `IClassroomTransactionExecutor`。
- **Mapperly** 做对象映射（非 AutoMapper），各模块 `ObjectMapping/` 目录。
- **自动 API**：应用服务按约定暴露为 REST 端点，仅少量手写 Controller。
- 前端 `react/src/api/` 由 **Kubb** 从 Swagger 生成，禁止手改。

## 模块一览

| 模块 | 职责 | 对应 ABP Pro 模块（推断/注释声明） |
| --- | --- | --- |
| `AcroStack.AccountPro` | 管理员模拟登录用户/租户，服务端持久化会话，可审计可撤销 | Account Pro（模拟登录） |
| `AcroStack.Chat` | 实时聊天：会话、消息、附件、回应、拉黑、在线状态，SignalR 推送 | Chat |
| `AcroStack.FileManagement` | 层级文件夹、上传下载、版本历史、分享链接、租户配额 | File Management Pro（去病毒扫描） |
| `AcroStack.OpenIddictManagement` | OpenIddict 应用/Scope/令牌/授权的管理 API | OpenIddict Pro 管理 UI |
| `AcroStack.IdentityClaims` | ClaimType 与用户/角色自定义 claims 管理 | Identity Pro（Claim 管理） |
| `AcroStack.AuditLogging` | 审计日志查询/统计/Excel 导出/过期清理 Worker | AuditLogging Pro |
| `AcroStack.BackgroundJobs` | 后台作业查询/重试/放弃运维 API | BackgroundJobs Pro 管理 UI |
| `AcroStack.AppUsers` | IdentityUser 只读投影 + 缓存，供其他模块跨模块查用户 | —（自建读模型） |
| `AcroStack.Books` | 图书 CRUD，课程模板演示模块 | —（示例） |
| `AcroStack.Common` | `IAcroStackTransactionExecutor` 等共享基础设施 | — |
| `classroom` | 课堂业务：题目、测验、课次、参与、答题记录 | —（核心业务） |

各模块详情见 `modules/<模块名>/README.md`；classroom 见 [modules/classroom/README.md](modules/classroom/README.md)。

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

常用命令速查见 [AGENTS.md](AGENTS.md)（后端构建/迁移、前端 `vp check`、`vp run generate-api` 等）。

## 文档结构

| 文档 | 内容 |
| --- | --- |
| [AGENTS.md](AGENTS.md) | 架构约定、命令、编码规范（最权威，随代码同步维护） |
| `.agents/skills/` | ABP 各专题模式沉淀（应用层、DDD、EF Core、多租户等） |
| `modules/*/README.md` | 各模块的业务场景、替代关系、关键设计决策 |
| [react/README.md](react/README.md) / [react/AGENTS.md](react/AGENTS.md) | 前端技术栈、目录结构、工具链与准入规则 |
| `docs/archive/` | 已完结的过程性文档（交接、修复计划），仅作历史参考 |

维护规则：新增/重命名模块时同步更新该模块 README 与本文件的模块一览；过程性文档完成后移入 `docs/archive/`。

## 生产部署

- 生产环境需正式的 `openiddict.pfx` 签名证书（宿主生产环境对证书缺失 fail-fast）：

```bash
dotnet dev-certs https -v -ep openiddict.pfx -p <your-password>
```

- 生产 OpenIddict 证书、classroom HMAC 密钥等配置见 `main/AcroStack/appsettings.json`。
- 前端 Docker 部署见 [react/README.md](react/README.md)，支持 `dynamic-env.json` 运行时覆盖环境变量（无需重新构建）。
- 参考部署脚本：`etc/build/`（镜像构建）、`etc/docker/`（docker-compose）。

## 相关资源

- [classroom 课堂实时答题模块](modules/classroom/README.md)
- [ABP Framework 文档](https://abp.io/docs/latest)
- [Application (Single Layer) Startup Template](https://abp.io/docs/latest/solution-templates/application-single-layer)
