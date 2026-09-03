# 交接文档：手写 ABP Pro 模块替代品的修复与补全（P0 / P1 / P2）

> **进度更新（2026-09-03 接手会话）**：本文档所列任务已**全部完成**。
> - §1 已写代码：编译通过（0 错误）。
> - §2 宿主接线（2.1–2.7）：接手前已完成；迁移 `AddImpersonationSessions` / `RemoveAuditLogExcelFiles` 已生成。
> - §2.8 前端：会话管理页面 + `generate-api` 产物已存在并验证通过（tsc + lint 0 错误）。
> - §3.1：以变体实现完成——`AuditLogExcelFiles` DbSet 因 `IAuditLoggingDbContext` 接口强制要求而保留属性，通过 `builder.Ignore<AuditLogExcelFile>()` 排除映射，迁移已生成。
> - §3.2：已新建 `modules/AcroStack.Common/`（`AcroStackCommonModule` + `Transactions/IAcroStackTransactionExecutor|AcroStackTransactionExecutor`，UoW 事务方式），`AuditLogAppService.DeleteManyAsync` 已接入；`AGENTS.md` 已更新约定说明。
> - §4.1：已新增 `OpenIddictTokenAppService` / `OpenIddictAuthorizationAppService`（列表/删除/撤销），权限 `AcroStack.OpenIddictManagement.Tokens|.Authorizations` + 本地化 + 种子授权；前端 `OpenIddictTokensPage` / `OpenIddictAuthorizationsPage` + 路由（菜单自动发现）已落地，`generate-api` 已重跑。
> - §4.2：`ChatOnlineTracker` 已改为类型化 `IDistributedCache<ChatOnlineCacheItem>`（CacheName `ChatOnlineUser`，TTL 60s 滑动过期，租户隔离靠 ABP key 规范化）；`ChatHub.Ping()` + 前端 20s 心跳已接入。
> - 验证：`dotnet build` 0 错误；`vp exec tsc --noEmit` / `vp lint` 通过；`--migrate-database` 已执行（种子含新权限）。
> - 注意：仓库存在**全局性 oxfmt 格式漂移**（HEAD 中未改动的文件也报格式差异，约 1392 个文件），本次未做全量格式化以避免污染 diff；仅对本次改动文件做了格式化。接手者如需统一，可单独跑 `vp fmt` 专项提交。

> 目的：本项目用「单项目 + React SPA」手写替代了 ABP Commercial 的一组 Pro 模块（AccountPro 模拟登录、AuditLogging、OpenIddictManagement、Chat 等）。
> 本次工作针对其中发现的缺陷做修复与功能补全。本文档供接手 AI 继续执行剩余任务。
>
> 完整架构分析见对话上下文；本文件只记录**当前进度**与**下一步要做什么**。**动手前务必先 `dotnet build` 后端、`npx vp lint` 前端，确认我新写的代码能编译**——本次会话未做编译验证。

---

## 0. 关键约定（先读，避免踩雷）

- **编程风格遵循 `AGENTS.md`**（位于仓库根目录）。改 C# 后必须跑 `dotnet build`；改 React 后必须跑 `npx vp lint src`。
- **前后端契约由 Kubb 从 Swagger 生成 TS**：任何新增/修改的 AppService 接口，改完后端后必须跑 `cd react && npm run generate-api`，再写/改前端调用。
- 宿主是 `main/AcroStack`（app-nolayer 单项目），所有模块实体最终都进宿主 `AcroStackDbContext`（`main/AcroStack/Data/AcroStackDbContext.cs`），通过 `Configure<...>()` 扩展方法挂载表。
- EF 迁移：`dotnet ef migrations add <Name> --project main/AcroStack --startup-project main/AcroStack`（需要 `dotnet-ef` 工具）。
- SQLite 单写者：事务/多连接要小心（见 §5 踩坑）。

---

## 1. 已完成的工作（本次会话已写入，尚未编译验证）

### P0 — 模拟登录安全重构（消除「把管理员令牌塞进 JWT」）

**核心设计变更**：原来模拟令牌内嵌管理员的原始 access token（`impersonator_token` claim），前端据此「返回我的账户」。这等于把管理员完整有效凭据交给被模拟端，且无法审计/撤销。
改为：**服务端持久化 `ImpersonationSession` 记录**；模拟令牌只携带会话 Id（`impersonation_session_id`）；「返回我的账户」由新的 `BackToImpersonator` grant 为管理员重新签发令牌。

**已新建/重写文件（均位于 `modules/AcroStack.AccountPro/`）：**

| 文件 | 作用 |
|---|---|
| `Entities/ImpersonationSession.cs` | 会话聚合根（`CreationAuditedAggregateRoot<Guid>, IMultiTenant`）。字段：ImpersonatorUserId/TenantId/UserName、TargetUserId/TenantId/UserName、ClientId、EndTime、IsRevoked、RevokedByUserId、RevocationTime。归属租户 = 模拟者租户（`TenantId = ImpersonatorTenantId`，host 为 null）。`IsActive` 派生属性。 |
| `EfCore/AccountProEfCoreDbContextExtensions.cs` | `ConfigureAccountPro()`：表 `AppImpersonationSessions`，列宽与 IdentityUser 对齐，含 3 个索引。 |
| `Services/ImpersonationTokenValidator.cs` | 在 `/connect/token` 上手工校验调用方 Bearer 令牌（ABP 验证中间件不作用于该端点）。逻辑抽自原 `ImpersonationGrantHandler`。配置了 `Issuer` 时启用 issuer 校验。 |
| `Handlers/ImpersonationGrantHandlerBase.cs` | 两个自定义 grant 的共享基类：读取 Bearer、构造 principal（`CreatePrincipalAsync` 继承 scope + 调 `IAbpClaimsPrincipalFactory.CreateDynamicAsync` 补齐 ABP 动态声明）、触发 `ProcessSignInContext` 签发。 |
| `Handlers/ImpersonationGrantHandler.cs` | **重写**。移除 `impersonator_token`；新增：落库 `ImpersonationSession`、`AddImpersonatorClaims`（在 `CreatePrincipalAsync` 之后加 claim，否则被剥离）、签发失败补偿关闭会话。常量 `ImpersonationSessionIdClaimType = "impersonation_session_id"`、`GrantType = "Impersonation"`。 |
| `Handlers/BackToImpersonatorGrantHandler.cs` | **新建**。`GrantType = "BackToImpersonator"`：校验当前模拟令牌 → 查会话（跨租户）→ 校验 active + 互相指认 → 解析管理员（在其租户下）→ 先关闭会话再签发新令牌。 |
| `AccountProAppServiceBase.cs` | 模块 AppService 基类，绑定 `AccountProResource` 本地化。 |
| `Dtos/ImpersonationSessionDto.cs`、`Dtos/GetImpersonationSessionListInput.cs` | 会话列表 DTO/查询输入。 |
| `Services/IImpersonationSessionAppService.cs`、`Services/ImpersonationSessionAppService.cs` | 历史查询 + 撤销。权限 `[Authorize(ImpersonationPermissions.ManageImpersonationSessions)]`，host-only，查询时 `IDataFilter<IMultiTenant>.Disable()` 跨租户。 |
| `Localization/AccountPro/en.json`、`zh-Hans.json` | 新增 `Permission:ManageImpersonationSessions`。 |

### P1 — AuditLogging 修复（部分完成）

| 文件 | 改动 |
|---|---|
| `modules/AcroStack.AuditLogging/Services/AuditLogAppService.cs` | 1) `ApplyFilters` 补齐 `HttpStatusCode` 过滤（此前 DTO 有该字段但从未兑现）；2) `GetListToExcelAsync` 改为读取 `AuditLogOptions.ExcelExportMaxRows` 配置项（替代写死的 `MaxExcelExportRows = 50000`，并删除该常量）。 |

---

## 2. 待完成（P0 残留）

> 以下都是在**宿主**或**配置/种子**层把已写好的后端代码「接上线」，并补齐前端。

### 2.1 模块依赖与包
- `modules/AcroStack.AccountPro/AcroStack.AccountPro.csproj`：新增包 `Volo.Abp.Ddd.Application`（提供 `ApplicationService`、`PagedResultDto` 等）和 `Volo.Abp.EntityFrameworkCore`（提供 `ConfigureByConvention` / `ModelBuilder` 扩展）。版本 `10.6.0`。
- `modules/AcroStack.AccountPro/AccountProModule.cs`：`[DependsOn(...)]` 增加 `typeof(AbpDddApplicationModule)`（仓储/AppService 需要）。EF 配置扩展不强制要求 DependsOn `AbpEntityFrameworkCoreModule`，但引用了包即可。

### 2.2 宿主 DbContext
- `main/AcroStack/Data/AcroStackDbContext.cs`：
  - 顶部 `using AcroStack.AccountPro;`
  - 新增 `public DbSet<ImpersonationSession> ImpersonationSessions { get; set; }`
  - `OnModelCreating` 中 `builder.ConfigureAccountPro(DbTablePrefix, DbSchema);`（放在 `ConfigureChat` 附近）

### 2.3 宿主自动 API 控制器（关键，否则会话管理 API 不暴露）
- `main/AcroStack/AcroStackModule.cs` 的 `ConfigureAutoApiControllers()`（约 401 行）新增一行：
  `options.ConventionalControllers.Create(typeof(AccountProModule).Assembly);`
  （目前该方法未包含 AccountPro，所以 `ImpersonationSessionAppService` 不会被自动暴露 HTTP API。）

### 2.4 OpenIddict：放行 `BackToImpersonator` grant
- `main/AcroStack/AcroStackModule.cs` 的 `PreConfigure<OpenIddictServerBuilder>`（约 182 行）：在已注册 `ImpersonationGrantHandler` 的旁边，增加
  `serverBuilder.AllowCustomFlow(BackToImpersonatorGrantHandler.GrantType);`
  以及 `serverBuilder.AddEventHandler<HandleTokenRequestContext>(cfg => cfg.UseScopedHandler<BackToImpersonatorGrantHandler>().SetOrder(0));`
  （注意 `using AcroStack.AccountPro;` 已存在。）
- `modules/AcroStack.OpenIddictManagement/Services/OpenIddictApplicationAppService.cs` 的 `KnownPermissions` 静态集合（约 28 行）加入字符串 `"BackToImpersonator"`，与已有的 `"Impersonation"` 并列（否则 OpenIddict 应用种子/校验会因未知 grant 报错）。

### 2.5 种子数据
- `main/AcroStack/Data/OpenIddictDataSeedContributor.cs`：在 React client 的 `grantTypes` 列表中加入 `"BackToImpersonator"`（与 `"Impersonation"` 并列，约 81 行）。否则前端（public client）不允许使用该 grant。
- `main/AcroStack/Data/ImpersonationPermissionsDataSeedContributor.cs`：在 `context.TenantId == null` 分支（host 侧）授予 admin 新权限 `AbpIdentity.Users.ManageImpersonationSessions`（true）。已存在两个 Impersonation 权限附近加即可。

### 2.6 权限常量与定义
- `modules/AcroStack.AccountPro/Permissions/ImpersonationPermissions.cs`：新增 `public const string ManageImpersonationSessions = "AbpIdentity.Users.ManageImpersonationSessions";`
- `modules/AcroStack.AccountPro/Permissions/ImpersonationPermissionDefinitionProvider.cs`：在 `AbpIdentity.Users` 权限下 `AddChild(ManageImpersonationSessions, L("Permission:ManageImpersonationSessions"))`，`.WithProperty("MultiTenancySide", MultiTenancySides.Host)`。

### 2.7 生成 EF 迁移
- `dotnet ef migrations add AddImpersonationSessions --project main/AcroStack --startup-project main/AcroStack`

### 2.8 前端（React）
- `react/src/lib/auth/impersonation.ts`：
  - 新增常量 `BACK_TO_IMPERSONATOR_GRANT_TYPE = "BackToImpersonator"`。
  - 新增 `callBackToImpersonatorEndpoint()`：向 `/connect/token` POST `grant_type=BackToImpersonator`、`client_id`，并带当前访问令牌 `Authorization: Bearer` 头；收到新令牌后 `userManager.storeUser` + `window.location.replace("/")`（与原 `callImpersonationEndpoint` 同构，只是不再传 `user_id`）。
  - 重写 `backToMyAccount()`：改为读取 JWT 中的 `impersonation_session_id` claim（而非 `impersonator_token`），调用上面的函数恢复管理员会话。
  - 更新文件顶部 JSDoc（移除 `impersonator_token` 描述，改述为会话 Id 方案）。
- `react/src/lib/http/error.ts`：在 `ABP_ERROR_MESSAGES` 增加后端新增的 key 映射：`Volo.Account:NotImpersonating`、`Volo.Account:ImpersonationSessionNotFound`、`Volo.Account:ImpersonationSessionNotActive`、`Volo.Account:ImpersonationSessionMismatch`、`Volo.Account:ImpersonatorUserNotFound`（中文文案自拟，如「当前并非模拟状态」「模拟会话不存在」「模拟会话已结束」「模拟会话不匹配」「管理员账户不存在」）。
- 新增会话管理页面（审计 + 撤销）：建议放 `react/src/pages/identity/impersonation-sessions/`（参考 `react/src/pages/audit-logging/` 的列表页写法），调用 Kubb 生成的 `impersonationSession` 客户端；在左侧菜单加入口（参考现有菜单配置，注意需要 `AbpIdentity.Users.ManageImpersonationSessions` 权限）。**这一步依赖 2.3 暴露 API + 跑 `generate-api` 后才能写调用。**

---

## 3. 待完成（P1 残留）

### 3.1 删除 AuditLogExcelFiles 死表
- `main/AcroStack/Data/AcroStackDbContext.cs` 第 58 行：删除 `public DbSet<AuditLogExcelFile> AuditLogExcelFiles { get; set; }`
- 生成迁移：`dotnet ef migrations add RemoveAuditLogExcelFiles --project main/AcroStack --startup-project main/AcroStack`
- 确认没有其他地方引用 `AuditLogExcelFile`（全文搜索）。

### 3.2 共享事务执行器（AcroStack.Common）
- 新建模块/项目 `modules/AcroStack.Common/`（`AcroStack.Common.csproj`，`common.props` 风格）：依赖 `Volo.Abp.Ddd.Application`（提供 `IUnitOfWorkManager`）。
- 提供 `IAcroStackTransactionExecutor` + 实现，封装
  `using var uow = unitOfWorkManager.Begin(requiresNew: true, isTransactional: true); await action(); await uow.CompleteAsync();`
  （与 Chat 模块既有的事务写法一致；注释说明 SQLite/WAL 注意事项）。
- 让需要的事务性删除改用它。落地点：
  - `modules/AcroStack.AuditLogging/Services/AuditLogAppService.cs` 的 `DeleteManyAsync`：用执行器包住多实体删除（目前是单 `DeleteManyAsync`，若要批量删日志+子表可纳入事务）。
- 更新 `AGENTS.md`（或新建简短 README）：说明今后多步写操作统一走 `IAcroStackTransactionExecutor`，不再到处手写 `IUnitOfWorkManager.Begin`。
- 注意：classroom 的 `ClassroomTransactionExecutor` 走的是 EF-native 事务（同一 `DbContext` 实例，避免 SQLite 多连接锁），与之并存，不要改动它。

---

## 4. 待完成（P2）

### 4.1 OpenIddict Token / Authorization 管理（补全 OpenIddict Pro 的缺失半）
- 在 `modules/AcroStack.OpenIddictManagement/` 新建：
  - `Dtos/OpenIddictTokenDto.cs`、`Dtos/GetOpenIddictTokenListInput.cs`
  - `Dtos/OpenIddictAuthorizationDto.cs`、`Dtos/GetOpenIddictAuthorizationListInput.cs`
  - `Services/IOpenIddictTokenAppService.cs`、`Services/OpenIddictTokenAppService.cs`
  - `Services/IOpenIddictAuthorizationAppService.cs`、`Services/OpenIddictAuthorizationAppService.cs`
- 实体用官方 `Volo.Abp.OpenIddict.Tokens.OpenIddictToken` / `Volo.Abp.OpenIddict.Authorizations.OpenIddictAuthorization`（宿主 DbContext 已 `ConfigureOpenIddict()`，仓储由 `AddDefaultRepositories(includeAllEntities: true)` 覆盖）。
- 操作：**列表查询**（支持按 ApplicationId/Subject/Status/Type/时间过滤）、**删除**、**撤销**（` OpenIddict.Abstractions` 的 `IOpenIddictTokenManager.TryRevokeAsync` / `IOpenIddictAuthorizationManager.TryRevokeAsync` 官方方法——7.5 版本已具备）。
- 权限：`OpenIddictManagementPermissions.Tokens` / `.Authorizations`，挂 `AcroStack.OpenIddictManagement.Applications` 下，host-only；本地化 en/zh-Hans 加键；`ImpersonationPermissionsDataSeedContributor` 授予 admin；`KnownPermissions` 若涉及 scope/endpoint 静态校验则相应补充。
- **生效边界（务必在文档/注释写明）**：已签发的 JWT 访问令牌不会因撤销立即失效（OpenIddict 对 JWT access token 默认不回查库）；只有 reference token / introspection 场景才即时生效。撤销主要影响 token 续期与「返回我的账户」链路。

### 4.2 Chat 在线状态缓存多租户修复
- `ChatOnlineTracker` 当前用 `IDistributedCache<string>`，key 形如 `online:{userId}`，**缺租户前缀** → 跨租户用户会互相覆盖在线状态。
- 改为 ABP **类型化分布式缓存**：`[CacheName("ChatOnlineUser")] public class ChatOnlineCacheItem { public DateTime LastSeen { get; set; } }`，注入 `IDistributedCache<ChatOnlineCacheItem>`，key 用 `userId`，租户隔离交给 ABP 缓存 key 规范化（已确认 key 只含缓存名 + 租户前缀，不含用户前缀，可安全跨用户共享）。
- 心跳：`ChatHub`（`modules/AcroStack.Chat/Hubs/ChatHub.cs`）新增 `[Authorize] public Task Ping()` → 内部 `SetOnlineAsync`；`react/src/pages/chat/constants/chatHub.ts` 的 `ChatHubMethods` 加 `Ping: "Ping"`；`react/src/pages/chat/hooks/useChatConnection.ts` 加定时（约 20s）`invoke("Ping")` 心跳；滑动过期 TTL 调至 ~60s。

---

## 5. 关键技术决策与踩坑（接手者必读）

1. **`/connect/token` 端点没有 `HttpContext.User`**：OpenIddict 验证中间件不作用于服务器端点，所以两个 grant 必须手工校验调用方 Bearer（已抽成 `ImpersonationTokenValidator`）。`GetBearerToken` 依赖 `IHttpContextAccessor`，基类已注入。
2. **ABP 动态声明必须显式补全**：自定义 grant 走 `context.HandleRequest()` 跳过了 ABP 内置 token 处理器，后者本应调用 `IAbpClaimsPrincipalFactory.CreateDynamicAsync` 补齐 role/email 等声明。缺失会导致 `ICurrentUser.Roles` 为空、权限全否、SPA 侧边栏塌掉。因此 `CreatePrincipalAsync` 内 `using (CurrentPrincipalAccessor.Change(principal))` 调了 `CreateDynamicAsync`。
3. **impersonator claims 必须在 `CreateDynamicAsync` 之后加**：否则被 AddDynamicClaims 剥离（原代码注释已说明）。
4. **会话记录归属租户 = 模拟者租户**：host 模拟租户时 `TenantId = null`，记录落在 host；查询/返回时要 `IDataFilter<IMultiTenant>.Disable()` + 按 `session.ImpersonatorTenantId` 用 `ICurrentTenant.Change(...)` 定位用户。
5. **关闭会话 vs 签发的顺序**：`BackToImpersonator` 先落库关闭会话、再签发管理员令牌。反之若 DB 写入失败会留下「可进行中」的会话可被重复换回。
6. **SQLite 单写者**：会话落库复用 `/connect/token` 的 ambient UoW（`IUnitOfWorkManager.Begin()` 无参，非 requiresNew），避免与 OpenIddict 写 token 各开一条连接触发锁竞争（补偿用的 `TryEndSessionAsync` 才用 `requiresNew`）。
7. **scope 解析**：从 JWT 还原的 principal 只有 `scope` 声明（空格分隔），没有 OpenIddict 私有的 `oi_scp`；`ImpersonationTokenValidator.ResolveScopes` 两种都兼容。
8. **targetUser.TenantId 比 CurrentTenant.Id 更准确**地表示被模拟用户所属租户（用户模拟场景）。

---

## 6. 验证与交付清单（全部改完后）

1. `dotnet build main/AcroStack/AcroStack.csproj` —— 后端编译通过。
2. 应用新增迁移（`Update-Database` 或 EF 自动迁移）。
3. `cd react && npm run generate-api` —— 重新生成 TS 客户端（拿到 `ImpersonationSession` / `OpenIddictToken` 等 service）。
4. `cd react && npx vp lint src` —— 前端 lint 通过。
5. 手动验证：host 管理员「模拟用户」→ 行为正常 → 「返回我的账户」能恢复管理员会话（且浏览器 DevTools 的 token 里不再含 `impersonator_token`，只有 `impersonation_session_id`）；访问会话管理页可看到记录并能撤销。
6. （可选）对照 `AGENTS.md` 的其余 lint 命令。

---

## 7. 给接手 AI 的优先级建议

1. 先编译已写后端（§1）→ 修所有编译错误。
2. 完成 §2 宿主接线（2.1–2.7）→ 生成迁移 → 启动后端冒烟「模拟/返回」。
3. 完成 §2.8 前端 → `generate-api` + 写调用 + lint。
4. 完成 §3（AuditLogging 死表 + 事务执行器）。
5. 完成 §4（OpenIddict Token/Authorization + Chat 缓存）。
6. 全文 lint + 文档更新（AGENTS.md）。

> 注意：本次会话**未执行任何 git 提交**，也未删任何临时文件。所有新建/修改文件均保留在工作区，接手者自行 review 后提交。
