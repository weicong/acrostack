# AcroStack.AccountPro

用户模拟登录（impersonation）：管理员以某个用户的身份登录系统，并提供会话审计与撤销。**对应 ABP Account Pro 的 impersonation 能力**（开源 Account 模块不含该功能，Account Pro 需商业许可）。

本次只实现 impersonation 这一项，不覆盖 Account Pro 的其他能力（Session Management、WebAuthn passkeys、Authority Delegation、Linked Accounts、Email Login(OTP/Magic Link)、动态社交登录、头像上传等）。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `ImpersonationSession` | 模拟会话审计聚合根：双方用户/用户名快照、ClientId、结束/撤销信息 |
| 应用服务 | `ImpersonationSessionAppService` | 会话审计查询 + 幂等撤销 |
| OpenIddict | `ImpersonationGrantHandler` / `BackToImpersonatorGrantHandler` | 自定义授权流：进入模拟 / 返回本人账户 |
| 校验器 | `ImpersonationTokenValidator` | 在 `/connect/token` 手工校验 Bearer 令牌 |

权限：`AbpIdentity.Users.Impersonation`（发起模拟，字符串与 ABP 官方一致）、`AbpIdentity.Users.ManageImpersonationSessions`（会话审计/撤销）。

## 关键设计决策

- **令牌不携带管理员凭据**：早期方案把管理员 access token 塞进 `impersonator_token` claim，等于把管理员完整凭据交给被模拟端且无法审计，已废弃。现改为**服务端持久化会话**：模拟令牌只带会话 Id（`impersonation_session_id`），"返回我的账户"由 `BackToImpersonator` grant 为管理员重新签发令牌。历史决策细节见 `docs/archive/HANDOFF-P0P1P2.md`。
- **已知撤销边界**：已签发的模拟 JWT 在有效期内仍然可用（撤销只阻止后续签发），见代码注释。
- `/connect/token` 端点不在 UoW/审计管线内，因此会话实体的审计属性（CreationTime 等）需显式赋值；登录过程手动派发 `ProcessSignInContext` 并调用 `CreateDynamicAsync` 补齐动态 claims。
- **仅用户模拟**：宿主已关闭多租户（官方单层模板默认），因此不实现租户模拟，会话实体不含租户字段。

## 依赖

仅框架模块：`AbpDdd.Application`、`AbpIdentity.Domain`、`AbpOpenIddict.Domain`。不依赖其他内部模块。是唯一深入 OpenIddict 服务端管线（自定义 grant）的模块。
