# AcroStack.OpenIddictManagement

OpenIddict 客户端应用、Scope、令牌、授权的管理 API。**替代 ABP Pro 的 OpenIddict Pro 管理 UI/API**（命名与功能对应，推断）。

## 服务

| 名称 | 说明 |
| --- | --- |
| `OpenIddictApplicationAppService` | 应用 CRUD（含回调地址校验） |
| `OpenIddictScopeAppService` | Scope CRUD |
| `OpenIddictTokenAppService` / `OpenIddictAuthorizationAppService` | 令牌/授权的分页查询、删除、撤销 |

权限：`AcroStack.OpenIddictManagement.*`（Applications/Scopes/Tokens/Authorizations）。

## 关键设计决策

- **无自有实体**：直接操作 `AbpOpenIddict.Domain` 的 `OpenIddictApplication/Scope/Token/Authorization`，是最薄的纯应用层模块。
- 创建/更新应用时强校验：回调地址必须是 https 绝对地址、权限限定白名单（`role:` 前缀）、`ClientType`/`ConsentType` 受限枚举、JSON 列解析容错。

## 依赖

`AbpDdd.Application` + `AbpOpenIddict.Domain`，无内部模块依赖。
