# AcroStack.AccountPro

管理员模拟登录（impersonation）：以某个用户/租户身份登录系统，并提供会话审计与撤销。**替代 ABP Pro 的 Account 模块（模拟登录 / IdentityUserDelegation）**（依据 `Options` 注释 "Mirrors AbpAccountOptions"）。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `ImpersonationSession` | 模拟会话审计聚合根（多租户）：双方用户/租户/用户名快照、ClientId、结束/撤销信息 |
| 应用服务 | `ImpersonationSessionAppService` | 会话审计查询 + 幂等撤销（禁用多租户过滤，host 侧跨租户查看） |
| OpenIddict | `ImpersonationGrantHandler` / `BackToImpersonatorGrantHandler` | 自定义授权流：进入模拟 / 返回本人账户 |
| 校验器 | `ImpersonationTokenValidator` | 在 `/connect/token` 手工校验 Bearer 令牌 |

权限（host 专属）：`AbpIdentity.Users.Impersonation`、`AbpTenantManagement.Tenants.Impersonation`、`ManageImpersonationSessions`。

## 关键设计决策

- **令牌不携带管理员凭据**：早期方案把管理员 access token 塞进 `impersonator_token` claim，等于把管理员完整凭据交给被模拟端且无法审计，已废弃。现改为**服务端持久化会话**：模拟令牌只带会话 Id（`impersonation_session_id`），"返回我的账户"由 `BackToImpersonator` grant 为管理员重新签发令牌。历史决策细节见 `docs/archive/HANDOFF-P0P1P2.md`。
- **已知撤销边界**：已签发的模拟 JWT 在有效期内仍然可用（撤销只阻止后续签发），见代码注释。
- `/connect/token` 端点不在 UoW/审计管线内，因此会话实体的审计属性（CreationTime 等）需显式赋值；登录过程手动派发 `ProcessSignInContext` 并调用 `CreateDynamicAsync` 补齐动态 claims。

## 依赖

仅框架模块：`AbpDdd.Application`、`AbpIdentity.Domain`、`AbpOpenIddict.Domain`。不依赖其他内部模块。是唯一深入 OpenIddict 服务端管线（自定义 grant）的模块。
