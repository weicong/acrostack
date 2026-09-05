# AcroStack.BackgroundJobs

为 ABP 开源版 BackgroundJobs（EF Core 存储版 `BackgroundJobRecord`）提供查询/运维 API：开源版只有作业执行，无管理界面。**替代 ABP Pro 的 BackgroundJobs 管理 UI**（推断）。

## 服务

| 名称 | 说明 |
| --- | --- |
| `BackgroundJobAppService` | `Get` / `GetList`（按 JobName/IsAbandoned/时间/Filter 过滤）、`DeleteAsync`、`RequeueAsync`（清 TryCount、重置 NextTryTime）、`AbandonAsync`（放弃作业） |

权限：ViewJobs / Delete / Requeue / Abandon 四级。

## 关键设计决策

- **无自有实体**：直接操作 ABP 的 `BackgroundJobRecord`。
- `CompletionTime` 为 ABP 10 新增字段，DTO 映射已补齐（曾有专门迁移）。

## 依赖

`AbpBackgroundJobs.Domain`，无其他模块依赖。
