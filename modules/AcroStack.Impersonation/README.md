# AcroStack.Impersonation

用户模拟登录（impersonation）：管理员以某个用户的身份登录系统，并提供会话审计与撤销。**对应 ABP Account Pro 的 impersonation 能力**（开源 Account 模块不含该功能，Account Pro 需商业许可）。

本模块**只实现 impersonation**，不覆盖 Account Pro 的其他能力（Session Management、WebAuthn passkeys、Authority Delegation、Linked Accounts、邮箱登录、动态社交登录、头像上传等）。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `ImpersonationSession` | 模拟会话审计聚合根：双方用户/用户名快照、ClientId、结束/撤销信息 |
| 应用服务 | `ImpersonationSessionAppService` | 会话审计查询 + 幂等撤销 |
| OpenIddict | `ImpersonationGrantHandler` / `BackToImpersonatorGrantHandler` | 自定义授权流：进入模拟 / 返回本人账户 |
| 校验器 | `ImpersonationTokenValidator` | 在 `/connect/token` 手工校验 Bearer 令牌 |

权限：`AbpIdentity.Users.Impersonation`（发起模拟，字符串与 ABP 官方一致）、`AbpIdentity.Users.ManageImpersonationSessions`（会话审计/撤销）。

## 关键设计决策

- **令牌不携带管理员凭据**：早期方案把管理员 access token 塞进 `impersonator_token` claim，等于把管理员完整凭据交给被模拟端且无法审计，已废弃。现改为**服务端持久化会话**：模拟令牌只带会话 Id（`impersonation_session_id`），"返回我的账户"由 `BackToImpersonator` grant 为管理员重新签发令牌。
- **已知撤销边界**：已签发的模拟 JWT 在有效期内仍然可用（撤销只阻止后续签发），见代码注释。
- **仅用户模拟**：宿主已关闭多租户（官方单层模板默认），因此不实现租户模拟，会话实体不含租户字段。

## 实现注意（改动本模块前必读）

- `/connect/token` 不在 ABP 验证中间件与 UoW/审计管线内：调用方 Bearer 必须手工校验（`ImpersonationTokenValidator`），会话实体的审计属性（CreationTime 等）也需显式赋值。
- 自定义 grant 走 `context.HandleRequest()` 跳过内置 token 处理器，**必须**在 `CreatePrincipalAsync` 内调 `IAbpClaimsPrincipalFactory.CreateDynamicAsync` 补齐动态声明，否则 `ICurrentUser.Roles` 为空、权限全否、SPA 侧边栏塌掉。
- impersonator 相关 claim 必须在 `CreateDynamicAsync` **之后**添加，否则会被剥离。
- `BackToImpersonator` 的顺序是**先落库关闭会话、再签发**管理员令牌；反之若写库失败会留下可被重复换回的"进行中"会话。
- SQLite 单写者：会话落库复用 `/connect/token` 的 ambient UoW（无参 `IUnitOfWorkManager.Begin()`），避免与 OpenIddict 写 token 各开一条连接触发锁竞争；仅补偿用的 `TryEndSessionAsync` 用 `requiresNew`。
- scope 解析：从 JWT 还原的 principal 只有 `scope` 声明（空格分隔），没有 OpenIddict 私有的 `oi_scp`，`ResolveScopes` 两种都兼容。

## 依赖

仅框架模块：`AbpDdd.Application`、`AbpIdentity.Domain`、`AbpOpenIddict.Domain`。不依赖其他内部模块。是唯一深入 OpenIddict 服务端管线（自定义 grant）的模块。
