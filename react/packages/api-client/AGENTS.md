# @workspace/api-client — 后端契约的前端投影

由 **Kubb** 从后端 Swagger 生成的 API 客户端（models / clients / hooks）+ 生成配置与工具链。**生成物一律入库、禁止手改。**

## 结构

| 路径               | 性质                                                                                         |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `src/generated/**` | **生成物**（`kubb generate` 的输出；`clean: true` 会整目录清空重建）                         |
| `src/client.ts`    | **手写**：唯一的稳定入口，re-export 生成客户端与共享 `transport`（并把生成单例接到该实例上） |
| `kubb.config.ts`   | 生成配置（输入 = 后端 Swagger JSON）                                                         |

## 公开 API

```ts
import { transport } from "@workspace/api-client/client"; // 共享 axios 实例（宿主交给 @workspace/core 注册拦截器）
import { useUserGetList } from "@workspace/api-client/hooks/user/useUserGetList";
import type { IdentityUserDto } from "@workspace/api-client/models/volo/abp/identity/IdentityUserDto";
```

子路径对应生成目录：`./clients/*`、`./hooks/*`、`./models/*`（按后端 Swagger tag 分目录）。

## 生成

```bash
# 在 react/ 工作区根执行；需后端（含 Swagger）已启动
vp -C packages/api-client run generate
# 或指定契约来源（默认 http://localhost:5173/swagger/v1/swagger.json，经 dev server 代理）
KUBB_INPUT=https://localhost:44320/swagger/v1/swagger.json vp -C packages/api-client run generate
```

规程：

- **不手改生成物**：需要调整输出形态改 `kubb.config.ts`（banner、分组、插件），再重新生成。
- **kubb 与插件版本精确锁定**（本包 devDependencies），升级单独一个 PR 且只跑生成，不夹带业务改动；升级会重写全部生成文件，属预期。
- **契约变更流程**：后端改接口 → 启动后端 → 生成 → 提交（生成物的 diff 单独成一次提交，便于审查）→ 前端按新类型调整。
- `clean: true` 意味着**后端必须在线**，否则拿到空契约；生成后请确认 `src/generated/hooks` 非空。
- **已知环境问题**：`clean` 由 Vite+ 的 safe-delete 执行（移动到回收站）；当 dev server 正在运行并监听 `src/generated` 时，该操作可能报 `[safe-delete] 操作失败 … trash operation`。此时生成仍会完成且产物正确，但**不会清理旧文件**——若契约删除了接口（存在残留文件风险），请先停掉 dev server 或手动删除 `src/generated` 后再生成。

## 依赖约定

- `axios` → `dependencies`（生成客户端自带实例）。
- `@tanstack/react-query` → `peerDependencies`（生成的 hooks 直接调用 `useQuery`，必须与宿主共享同一 QueryClient）。
- `@kubb/*` + `kubb` → `devDependencies`（仅生成期使用，消费方不会安装）。

## 边界

- 本包**不含**应用语义：拦截器（baseURL、OIDC 令牌、租户头、401/403 处理）由 `@workspace/core` 的 `setupHttpClient(transport)` 注册到 `transport` 上。
- 应用侧**只允许**组合根 `apps/web/src/lib/core.ts` 直接 import 本包（依赖边规则见 `apps/web/AGENTS.md`）。
