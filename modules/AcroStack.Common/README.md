# AcroStack.Common

跨模块共享的极小基础设施库。目前只有一件事：**显式事务执行器**。

## 内容

| 名称 | 说明 |
| --- | --- |
| `IAcroStackTransactionExecutor` / `AcroStackTransactionExecutor` | 用 `UnitOfWorkManager.Begin(requiresNew: true, isTransactional: true)` 显式开启独立事务性 UoW，包裹跨聚合写操作 |

## 存在原因

宿主因 SQLite 单文件库调用了 `AddAlwaysDisableUnitOfWorkTransaction()`（`UnitOfWorkTransactionBehavior.Disabled`），**跨聚合写操作默认没有事务保护**。任何模块级多步写操作都应通过此执行器包裹，不要在应用服务里手写 `IUnitOfWorkManager.Begin`。

SQLite/WAL 约束（代码注释明示）：

- 事务内不做长耗时外部调用；
- 事务内不得另开数据库连接，避免 `database is locked`。

与 classroom 模块自带的 `IClassroomTransactionExecutor`（EF 原生事务）**并存互不替代**：模块级多步写优先用本执行器；classroom 的同 DbContext 场景用其自己的。

## 依赖

仅 `AbpDdd.Application`；使用方经 `ITransientDependency` 自动注册 DI。当前使用方：`AcroStack.AuditLogging`（批量删除）。
