# AcroStack.Chat

实时聊天：会话、消息、附件、emoji 回应、拉黑、在线状态，SignalR 实时推送。**替代 ABP Pro 的 Chat 模块**（实体注释声明 "Mirrors ABP Commercial Chat module"）。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `ChatMessage` | 消息内容（含附件三字段） |
| 实体 | `UserMessage` | 收/发两侧的消息副本 |
| 实体 | `Conversation` | 会话侧：末条消息预览 + 未读数 |
| 实体 | `ChatBlockedUser` / `ChatMessageReaction` | 拉黑关系 / 消息回应 |
| 应用服务 | `ConversationAppService` | 核心（发送/历史/已读/编辑/软删/回应/搜索/附件） |
| 应用服务 | `ContactAppService` / `ChatBlockAppService` | 联系人 / 拉黑 |
| 基础设施 | `ChatOnlineTracker` | 在线状态（typed 分布式缓存，60s 滑动过期） |
| SignalR | `ChatHub` | 按"租户 + 用户 Id"分组推送 |

附件上传：10MB 上限 + 可执行文件扩展名黑名单（`ChatAttachmentContainer` 为 BlobStoring 容器）。

## 关键设计决策

- **用户信息走 AppUsers 读模型**：注入 `IRepository<AppUser, Guid>` 查用户名/头像，不直连 Identity 表（这也是本模块唯一内部依赖）。
- **多聚合写走显式事务**：附件上传与消息删除等跨 `ChatMessage`/`UserMessage`/`Conversation` 的写操作需保证原子性（SQLite 无全局 UoW 事务，见根 AGENTS.md）。
- 在线状态从手写 cache key 迁移到 ABP typed `IDistributedCache`，以获得租户隔离。

## 依赖

- 内部：`AcroStack.AppUsers`（唯一内部依赖边）。
- 框架：`AbpDdd.Application`、`AbpAspNetCoreMvc`、BlobStoring、Mapperly。
