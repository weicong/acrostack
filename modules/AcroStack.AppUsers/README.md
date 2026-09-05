# AcroStack.AppUsers

`IdentityUser` 的反规范化只读投影（读模型）：供其他模块（Chat 等）按 UserId 查用户名/头像类信息，**避免业务模块直连 Identity 表**。对应 ABP Pro 场景下"跨模块用户查询"的自建 CQRS 读侧。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `AppUser` | 只读投影（`IMultiTenant`——必须实现，否则跨租户泄露） |
| DTO/事件 | `AppIdentityUserEto` | 分布式事件载体（显式带 TenantId） |
| 应用服务 | `AppUserAppService` | 分页查询 + Delete（删除走真实 `IdentityUserManager`，禁止自删，同 UoW 同步清投影行） |
| 缓存 | `AppUserCacheService` | `IDistributedCache` 缓存 30 分钟 |
| 事件处理 | `AppUserSyncHandler` / `AppUserCacheInvalidationHandler` | 处理 Identity 的 Created/Updated/Deleted Eto，幂等 upsert / 失效缓存 |

## 关键设计决策

- **同步机制靠 ABP 分布式事件管道**：宿主 `AddAll` 配置 ETO 映射，本模块只做幂等消费，不侵入 Identity 写路径。
- **缓存纵深防御**：缓存键不含租户 Id（读多写少场景简化 key），但读取时校验实体 `TenantId` 与当前租户一致，不一致视为未命中。
- 权限复用 `Volo.Abp.Identity.IdentityPermissions`，不自定义权限组。

## 依赖

`Abp.Identity.Domain` / `Abp.Identity.Application`。被 `AcroStack.Chat` 依赖（全仓库唯一一条模块间依赖边 Chat → AppUsers）。
