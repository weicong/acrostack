# AcroStack.AuditLogging

对开源 `AbpAuditLogging.DomainModule` 的审计数据补一套查询/管理 API：分页过滤、统计、Excel 导出、过期清理。**替代 ABP Pro 的 AuditLogging Pro 管理界面**（导出布局注释明说 "matching the ABP Commercial AuditLogging export layout"）。

## 服务

| 名称 | 说明 |
| --- | --- |
| `AuditLogAppService` | 分页查询（HttpStatusCode 等 7 种过滤）、实体变更详情（Include PropertyChanges）、`GetStatisticsAsync`（慢 URL/高频 URL/错误数）、`GetListToExcelAsync`（MiniExcel 导出）、批量删除 |
| `AuditLogCleanupWorker` | 后台 Worker：按保留期（默认 90 天）分批（1000/批 + 批次延迟）清理过期日志，对应 Pro 的 `AuditLogCleanupBackgroundWorker` |

权限：`AcroStack.AuditLogging.*`，权限组标记 `MultiTenancySides.Host`（仅宿主可见）。

## 关键设计决策

- **无自有实体**：直接使用 ABP 的 `AuditLog`、`EntityChange`。Excel 导出不落库（历史方案曾用 `AuditLogExcelFile` 实体存文件，现已在 DbContext 中 `Ignore` 映射，属性因 `IAuditLoggingDbContext` 接口约束保留）。
- **批量删除走 `IAcroStackTransactionExecutor`**：SQLite 禁用全局 UoW 事务，跨行删除需显式事务保证原子性。
- 导出行数上限由 `AuditLogOptions.ExcelExportMaxRows` 控制。

## 依赖

`AbpAuditLogging.Domain`、BackgroundWorkers、**`AcroStack.Common`**（唯一使用 Common 的模块）。
