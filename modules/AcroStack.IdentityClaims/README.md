# AcroStack.IdentityClaims

管理 Identity 的 ClaimType 及用户/角色自定义 claims。**替代 ABP Pro 的 Identity 模块 Claim 管理功能**（开源版 Identity 无此管理面，推断）。

## 服务

| 名称 | 说明 |
| --- | --- |
| `IdentityClaimTypeAppService` | Claim 类型 CRUD + GetAll |
| `IdentityUserClaimAppService` | 用户 claims：GetList / Create / Update / Delete |
| `IdentityRoleClaimAppService` | 角色 claims：GetList / Create / Update / Delete |

权限：`AcroStack.IdentityClaims.*`（UserClaims/RoleClaims/ClaimTypes）。

## 关键设计决策

- **无自有实体**：复用 ABP Identity 的 `IdentityClaimType/IdentityUserClaim/IdentityRoleClaim`；ClaimType 服务同时注入 user/role claim 仓储，用于删除前的引用校验。
- 权限、本地化资源在模块内自持（与其他模块同一模式）。

## 依赖

`AbpDdd.Application`、`AbpIdentity.Domain`（含 Domain.Shared）、Mapperly，无内部模块依赖。
