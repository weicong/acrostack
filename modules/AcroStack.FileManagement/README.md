# AcroStack.FileManagement

层级文件夹、上传下载、版本历史、公开分享链接、缩略图、租户配额。**替代 ABP Pro 的 File Management 模块**（注释明示镜像，且按需求去掉了病毒扫描）。

## 实体与服务

| 类型 | 名称 | 说明 |
| --- | --- | --- |
| 实体 | `FileEntry` | 文件元数据（`BlobName` 与显示名分离） |
| 实体 | `FileFolder` | 层级文件夹树 |
| 实体 | `FileVersion` | 覆盖上传时归档的历史版本 |
| 实体 | `FileShare` | 分享链接：64 位 hex token + 过期时间 + 下载上限 + 撤销 |
| 应用服务 | `FileManagementAppService` | 文件夹 CRUD/移动防环、上传（同名自动版本化）、分享、版本恢复、缩略图、配额统计 |
| Controller | `FileManagementController` | 显式路由 `api/app/file-management`（规避自动路由命名）；`DownloadShared` 匿名可访问 |

权限：`AcroStack.FileManagement.*`（Upload/Download/Delete/Move/Share）。

## 关键设计决策

- **配额与安全选项镜像 Pro**：`FileManagementOptions` 对应 Pro 的配额配置（50MB/文件、1GB/租户）。
- **扩展名白名单刻意排除 `.svg`** 防 XSS；分享 token 用 `RandomNumberGenerator` 生成 32 字节加密随机数。
- 权限名保留旧 `AcroStack.*` 前缀：权限已持久化到授权表，改名会造成存量数据失配。

## 依赖

仅框架模块（`AbpDdd.Application`、`AbpAspNetCoreMvc`、BlobStoring、Mapperly），无内部模块依赖。
