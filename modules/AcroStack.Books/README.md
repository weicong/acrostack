# AcroStack.Books

图书 CRUD 演示模块（ABP 官方教程的 Book 实例），非 Pro 替代，用于展示本仓库的模块标准形态：Entities / Dtos / Services / Permissions / Localization / ObjectMapping 全套。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `Book` | `AuditedAggregateRoot`，多租户；Name/Type（`BookType` 枚举）/PublishDate/Price（decimal，注释强调防浮点误差） |
| 应用服务 | `BookAppService` | Get / GetList（分页过滤排序）/ Create / Update / Delete |

权限：`AcroStack.Books.*`。API 经宿主 `ConventionalControllers` 自动暴露。

## 关键设计决策

- 权限名保留 `AcroStack.*` 前缀（已持久化到授权表，不可随意改名），仅分组独立。
- 模块内自持 `BooksAppServiceBase` 基类，不依赖宿主；表由宿主 `AcroStackDbContext.ConfigureBooks()` 统一建模（单库 SQLite）。

## 依赖

仅 `AbpDdd.Application` + Mapperly，无其他模块依赖。新模块可参照本模块的组织方式起步。
