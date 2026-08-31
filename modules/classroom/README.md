# 课堂实时答题系统（Classroom 模块）

用于课堂随堂练习：教师按讲课进度逐题开放试题，约 100 名学员用手机浏览器通过课堂码加入并答题，教师通过"课堂课堂面板"实时查看在线状态、作答进度、选项分布与正确率，投屏端展示匿名统计。

五个界面：

| 界面       | 前端路由                                        | 说明                                                                   |
| ---------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| 教师管理端 | `/classroom/sessions`、`/classroom/$sessionId`  | 我的课堂：课堂列表 + 课堂面板（控制/统计/学员列表）                    |
| 教师管理端 | `/classroom/questions`                          | 题库管理：四种题型 CRUD（单选/多选/判断/简答）                         |
| 教师管理端 | `/classroom/quizzes`                            | 试卷管理：从题库选题组卷、调整题目顺序                                 |
| 教师投屏端 | `/presentation/$sessionId`                      | 大屏只读匿名视图（无学员姓名/学号/个人答案）                           |
| 学员移动端 | `/student/join`、`/student/sessions/$sessionId` | 手机优先，课堂码加入 + 实时答题 + 答题记录回顾（正确答案仅公布后可见） |

> 教师端三页挂在侧边栏"课堂答题"子菜单组下，分别受 `Sessions.ViewDashboard` / `Questions.Manage` / `Quizzes.Manage` 权限控制。学员不加主菜单入口，仅通过教师分享的课堂码/链接进入。

## 系统依赖

- [.NET 10 SDK](https://dotnet.microsoft.com/download/dotnet)
- Node.js 18/20 + pnpm（前端，见 `react/`）
- 数据库：SQLite（开发默认，零配置；生产建议 SQL Server / PostgreSQL）
- **Redis：非必需**。MVP 单实例下在线状态（`IClassroomOnlineTracker`）、统计合并推送（`ClassroomDashboardThrottler`）、加入限流均为内存实现；多实例部署时才需引入 Redis（在线状态与 Backplane）。

## 模块结构（模块化单体）

模块位于 `modules/classroom/src/`，由宿主 `main/AcroStack`（ABP app-nolayer 单层模板）直接引用并挂载，不单独部署：

```
modules/classroom/src/
├── Classroom.Domain.Shared        # 枚举、常量、错误码、本地化
├── Classroom.Domain               # 实体、聚合根、状态机、领域服务、领域测试支撑
├── Classroom.Application.Contracts# DTO、应用服务接口、权限定义、实时事件契约
├── Classroom.Application          # 应用服务、令牌服务、种子数据
├── Classroom.EntityFrameworkCore  # DbContext、仓储映射、索引
├── Classroom.HttpApi              # 手写控制器（public/student/presentation）、SignalR Hub、推送
└── Classroom.Tests                # 领域单元测试（状态机/判分/幂等）
```

领域规则（状态机、判分、幂等）全部在 Domain/Application 层；Hub 与 Controller 不承载业务逻辑，只做转发与鉴权。

## 快速启动

```bash
# 1. 后端（首次或实体变更后先迁移+种子）
dotnet run --project main/AcroStack --migrate-database   # 迁移 + 种子（示例试卷）

# 2. 常规启动后端
dotnet run --project main/AcroStack                       # https://localhost:44320

# 3. 前端
cd react
vp install && vp dev                                    # http://localhost:5173
```

### 数据库迁移步骤

EF Core 迁移落在宿主项目（仓储实现方），在仓库根目录执行：

```bash
dotnet ef migrations add <Name> --project main/AcroStack --startup-project main/AcroStack
dotnet ef database update   --project main/AcroStack --startup-project main/AcroStack
# 或直接：dotnet run --project main/AcroStack --migrate-database（迁移+种子一步完成）
```

### 测试账号

| 账号    | 密码      | 角色                                |
| ------- | --------- | ----------------------------------- |
| `admin` | `1q2w3E*` | 宿主管理员（含 Classroom 全部权限） |

种子数据（仅 Development 环境、宿主租户）：自动创建示例试卷「示例试卷：随堂测验（默认）」，含单选/多选/判断/简答各 1 题；重复执行幂等。学员无需注册账号，凭课堂码加入。

## API 清单

### 教师（OpenIddict 认证，ABP Auto API）

| 方法            | 路径                                                          | 说明                                  |
| --------------- | ------------------------------------------------------------- | ------------------------------------- |
| POST/PUT/DELETE | `/api/app/question`、`/api/app/question/{id}`                 | 题目管理                              |
| GET             | `/api/app/question`、`/api/app/question/{id}`                 | 题目查询                              |
| POST/PUT/DELETE | `/api/app/quiz`、`/api/app/quiz/{id}`                         | 试卷管理（题目有序列表）              |
| POST            | `/api/app/class-session`                                      | 从试卷创建课堂（生成课堂码/加入地址） |
| GET             | `/api/app/class-session`                                      | 课堂分页列表                          |
| GET             | `/api/app/class-session/{id}/snapshot`                        | 教师快照（断线恢复）                  |
| GET             | `/api/app/class-session/{id}/dashboard`                       | 课堂面板数据                          |
| POST            | `/api/app/class-session/{id}/start`                           | 开始课堂                              |
| POST            | `/api/app/class-session/{id}/next-question`                   | 下一题并开放                          |
| POST            | `/api/app/class-session/{id}/start-question/{questionId}`     | 开放指定题目                          |
| POST            | `/api/app/class-session/{id}/close-question/{questionId}`     | 截止当前题                            |
| POST            | `/api/app/class-session/{id}/publish-statistics/{questionId}` | 公布匿名统计                          |
| POST            | `/api/app/class-session/{id}/publish-answer/{questionId}`     | 公布答案与解析                        |
| POST            | `/api/app/class-session/{id}/finish`                          | 结束课堂（课堂码失效）                |
| POST            | `/api/app/class-session/{id}/presentation-token`              | 生成投屏令牌                          |

### 学员 / 投屏 / 公开（手写控制器）

| 方法 | 路径                                             | 认证               | 说明                                                                     |
| ---- | ------------------------------------------------ | ------------------ | ------------------------------------------------------------------------ |
| POST | `/api/public/class-sessions/join`                | 匿名（按 IP 限流） | 课堂码加入 → Participant + 短期令牌                                      |
| GET  | `/api/student/class-sessions/{id}/snapshot`      | 课堂令牌           | 学员快照（含本人提交状态）                                               |
| GET  | `/api/student/class-sessions/{id}/my-answers`    | 课堂令牌           | 本人本课堂答题记录（逐题回顾；正确答案/解析仅 `AnswerPublished` 后下发） |
| POST | `/api/student/class-sessions/{id}/answers`       | 课堂令牌           | 提交/修改答案（RequestId 幂等）                                          |
| GET  | `/api/presentation/class-sessions/{id}/snapshot` | 投屏令牌           | 匿名快照（严禁含个人信息）                                               |

前端 API Client 由 Kubb 从 Swagger 生成（`react/src/api/`），后端变更后执行 `vp run generate-api`。

## 权限模型

| 权限                               | 说明                                 |
| ---------------------------------- | ------------------------------------ |
| `Classroom.Questions.Manage`       | 题目管理                             |
| `Classroom.Quizzes.Manage`         | 试卷管理                             |
| `Classroom.Sessions.Create`        | 创建课堂（父权限）                   |
| `Classroom.Sessions.Control`       | 控制课堂（开始/开题/截止/公布/结束） |
| `Classroom.Sessions.ViewDashboard` | 查看课堂面板                         |

仅课堂创建者可控制该课堂并加入教师 SignalR 分组（服务端二次校验，不依赖前端禁用）。

## 认证与令牌

- **教师**：ABP Identity + OpenIddict（`/connect/token`），标准 Bearer。
- **学员/投屏**：课堂范围短期 JWT（HMAC-SHA256，独立认证方案 `ClassroomToken`）：
  - Claims：`session_id`、`participant_id`（投屏无）、`client_role`（`student`/`presentation`）、`tenantid`
  - 有效期：学员 4 小时 / 投屏 12 小时（`ClassroomConsts`）
  - 令牌仅对签发课堂有效；服务端一律从令牌解析身份，不信任请求体中的 SessionId/ParticipantId

`appsettings.json` 配置节：

```json
"Classroom": {
  "TokenIssuer": "Classroom",
  "TokenAudience": "ClassroomToken",
  "TokenSigningKey": "dev-only-classroom-signing-key-change-in-production!!",
  "FrontendBaseUrl": "http://localhost:5173",
  "DashboardMergeWindowMs": 300
}
```

> 生产环境必须将 `TokenSigningKey` 移入 `appsettings.secrets.json`（不入版本库）并更换为强随机值。

## 课堂状态机

所有转换在领域层统一校验（`ClassroomStateMachines.cs`），非法转换抛结构化错误 `ClassroomErrorCodes.InvalidStatusTransition`（携带 From/To 参数）。

**课堂状态（ClassSessionStatus）**

```
Preparing(0) → Waiting(10) → Answering(20) → Explaining(30) → Answering(20) → ...
      │             │              │               │
      └─────────────┴──────────────┴───────────────┴──→ Finished(40)
```

| 转换                       | 触发动作   |
| -------------------------- | ---------- |
| Preparing → Waiting        | 开始课堂   |
| Waiting → Answering        | 开放题目   |
| Answering → Explaining     | 截止题目   |
| Explaining → Answering     | 开放下一题 |
| 任意非 Finished → Finished | 结束课堂   |

**题目状态（SessionQuestionStatus）**

```
Pending(0) → Open(10) → Closed(20) → StatisticsPublished(30) → AnswerPublished(40)
                                        Closed → AnswerPublished（跳过统计直接公布答案）
```

不变量：同一课堂最多一题处于 Open；Closed 后拒绝新答案；Finished 后不能开题/提交；公布统计与公布答案是两个独立动作。

**版本号（Classroom.Version）**：开始课堂、开放题目、截止题目、公布统计、公布答案、切换下一题、结束课堂均递增。客户端发现事件 Version 不连续时必须重新拉取快照校准。

## 实时事件协议（SignalR）

- **Hub 路径**：`/signalr-hubs/classroom?sessionId={sessionId}&access_token={token}`
  - 学员/投屏：`access_token` 为课堂短期令牌；教师：OpenIddict 令牌
  - 宿主中间件将 `/signalr-hubs` 路径上的 `access_token` 查询参数转写为 Authorization 头（WebSocket 无法自定义头）
- **分组**（服务端依据令牌自动分配，客户端不能自行选择；组名含租户 Id 防跨租户串扰）：
  - `classroom:{tenantId}:{sessionId}:teachers`
  - `classroom:{tenantId}:{sessionId}:students`
  - `classroom:{tenantId}:{sessionId}:presentation`
- **传输**：WebSocket 优先；前端自动重连 0/2/5/10/30/60s，重连成功后重新拉取快照

**服务端 → 客户端事件**（所有课堂级事件公共字段：`sessionId`、`version`、`serverTime`、`eventId`）：

| 事件                  | 目标组 | 附加字段                                                                   | 说明                        |
| --------------------- | ------ | -------------------------------------------------------------------------- | --------------------------- |
| `ClassroomStarted`    | 全部   | —                                                                          | 课堂开始                    |
| `QuestionOpened`      | 全部   | `sessionQuestionId`、`question`（不含正确答案）、`openedAt`、`endsAt`      | 开放题目                    |
| `QuestionClosed`      | 全部   | `sessionQuestionId`                                                        | 截止题目                    |
| `StatisticsPublished` | 全部   | `sessionQuestionId`、`optionCounts`、`submittedCount`、`totalParticipants` | 匿名统计                    |
| `AnswerPublished`     | 全部   | `sessionQuestionId`、`correctAnswer`、`explanation`                        | 正确答案与解析              |
| `ParticipantChanged`  | 教师   | `participantId`、`nickname`、`onlineStatus`、`answerState`、`submittedAt`  | 学员加入/在线/离线/提交增量 |
| `DashboardUpdated`    | 仅教师 | `dashboard`（DashboardDto 全量）                                           | 统计合并推送（300ms 窗口）  |
| `ClassroomEnded`      | 全部   | —                                                                          | 课堂结束                    |

**数据安全规则**：

- 开放题目事件不携带 `CorrectAnswer`，公布答案后才下发
- `DashboardUpdated` 仅教师组；投屏组只收匿名数据；学员端收不到其他学员的身份与答案
- 非授权客户端（令牌不匹配课堂 / 非创建者教师）连接被服务端拒绝（`Context.Abort`）

**推送时序**：先数据库事务提交，后 SignalR 广播（UoW 提交后回调 `RegisterNotifierCallback`）；SignalR 不是答案持久化通道，仅负责实时通知。

## 断线恢复

SignalR 连接不是最终状态来源。客户端在以下情况重新拉快照（`GET .../snapshot` 按身份返回教师/学员/投屏三种快照）：首次进入、SignalR 首连/重连成功、浏览器回到前台、收到 Version 不连续事件、本地状态与服务端冲突。学员令牌与状态持久化在 `localStorage`（`react/src/lib/classroom/studentSession.ts`），页面刷新后自动恢复。

## 答案提交与幂等

提交 DTO：`sessionQuestionId`、`requestId`、`answerContent`、`clientSubmittedAt`（仅诊断用，截止判定用服务端时间）。服务端校验：令牌课堂匹配 → 题目开放且未截止 → 答案格式符合题型 → `RequestId` 查重。相同 `RequestId` 重试返回首次结果（唯一索引兜底）；新 `RequestId` 更新同一 AnswerRecord，`Revision+1` 并重算客观题 `IsCorrect`（多选顺序无关）。数据库约束：`(SessionQuestionId, ParticipantId)` 唯一、`RequestId` 唯一、`ClassroomCode` / `(SessionId, ParticipantId)` / `(SessionQuestionId, LastSubmittedAt)` 索引。

答案编码约定（前后端一致）：单选 `"A"`；多选 `"A,C"`（逗号拼接，判分顺序无关）；判断 `"true"` / `"false"`（对应选项 A=对 / B=错，学员端自动转换）；简答任意文本不判分。

## 学员答题记录

学员页头部提供「当前题目 / 答题记录」视图切换，记录视图展示：汇总条（共 N 题 · 已答 M · 客观题答对 K）+ 逐题回顾卡片（我的答案标记、对错徽章或"未答"、修订次数、公布后的正确答案与解析高亮块；未公布的题显示"等待老师公布答案"）。数据来自 `GET /api/student/class-sessions/{id}/my-answers`（课堂令牌），切到记录视图、`AnswerPublished` / `ClassroomEnded` 事件到达时自动刷新；课堂结束卡片提供"查看答题记录"入口。记录范围为课堂内回顾（本课堂全部题），不含跨课堂历史。

## 限流

| 位置                                       | 规则                                                                                                                            |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| 加入课堂 `/api/public/class-sessions/join` | 每 IP 200 次/分钟（内存固定窗口；需容纳单课堂约 100 人共用校园 WiFi 出口 IP 集中加入 + 重试余量）                               |
| 答案提交                                   | 提交频率上限 `ClassroomConsts.MaxSubmitsPerMinute`（30 次/分钟/人）已定义但当前未强制执行；幂等与截止校验已覆盖刷提交的主要风险 |
| `/connect/token`                           | 每 IP 30 次/分钟（宿主 ASP.NET RateLimiter）                                                                                    |

## 测试运行命令

```bash
# 后端领域单元测试（状态机/判分/幂等）
dotnet test modules/classroom/src/Classroom.Tests

# 前端测试（Vitest）
cd react && vp test run

# E2E 链路验证（需后端运行中）
pwsh test-classroom-e2e.ps1

# 100 人并发压测（需后端运行中）
node loadtest-classroom.mjs
```

### 压测脚本参数

```bash
node loadtest-classroom.mjs [--base https://localhost:44320] [--students 100] \
  [--join-window 10] [--submit-window 2] [--retry-ratio 0.2] \
  [--username admin] [--password 1q2w3E*]
```

场景：N 名学员在加入窗口内集中加入 → 并行取快照 → 在提交窗口内集中提交（固定比例用相同 RequestId 重试验证幂等）→ 教师仪表盘核对 `totalParticipants` / `submittedCount`。脚本自动截止并结束课堂，输出延迟分位数（p50/p90/p99）、500ms 内提交占比与 PASS/FAIL。

最近一次结果（本机 SQLite，100 人）：加入 100/100（p50=19ms），提交 100/100（p50=42ms、p90=725ms，500ms 内 86%），20 次幂等重试全部返回同一记录，PASS。

## 部署说明

1. **配置**：`TokenSigningKey`、连接字符串等敏感项放 `appsettings.secrets.json`（不入库）；CORS 限制为前端域名。
2. **数据库**：开发用 SQLite；生产并发场景建议换 SQL Server / PostgreSQL（改 `ConnectionStrings` + 替换 EF Core Provider 包，迁移重建）。
3. **HTTPS/WSS**：全程 HTTPS/WSS；WebSocket 需要 Nginx 显式升级头：

```nginx
location /signalr-hubs/ {
    proxy_pass http://127.0.0.1:5000;   # 应用实际监听地址
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_read_timeout 3600s;            # 长连接
    proxy_buffering off;                 # SSE/WebSocket 不缓冲
}
```

> Nginx 反代时务必设置 `X-Forwarded-For` 并在 ASP.NET Core 启用 `ForwardedHeaders`，否则加入限流会把所有学员当成同一 IP。
4. **多实例**：需引入 Redis Backplane（SignalR）并把在线状态/限流迁到 Redis；单实例 MVP 无需。
5. **Docker**：沿用仓库根 `etc/docker`（`run-docker.ps1`）。

## 常见故障排查

| 现象                       | 排查                                                                                               |
| -------------------------- | -------------------------------------------------------------------------------------------------- |
| 学员加入返回"请求过于频繁" | 触发每 IP 200 次/分钟限流；确认真为多人共用出口 IP 或有脚本刷接口                                  |
| WebSocket 连不上           | 检查 Nginx `Upgrade`/`Connection` 头与 `proxy_buffering off`；前端固定用 WebSocket 传输            |
| 学员看不到题目             | 确认教师已开题（课堂状态 = Answering）；学员端重连后是否重新拉了快照                               |
| 课堂面板统计不更新         | `DashboardUpdated` 仅发教师组且按 300ms 合并；检查教师连接是否为课堂创建者（非创建者连不上教师组） |
| 提交返回 401               | 课堂令牌过期（学员 4h/投屏 12h）或令牌与课堂不匹配；重新加入或重新生成投屏令牌                     |
| 种子数据没出现             | 种子仅在 Development 环境且 `--migrate-database` 启动时执行；普通 `dotnet run` 不触发              |
| Swagger 打不开             | Swagger 仅开发环境开放（生产禁用）                                                                 |
