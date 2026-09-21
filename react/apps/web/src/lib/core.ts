/**
 * 应用组合根：把宿主差异注入 `@acrostack/core`。
 *
 * core 不读 `import.meta.env`、不 import 生成客户端、也不直接操作路由；本文件集中提供：
 * env 值、开发标记、默认文化、403 目标与 SPA 跳转方式，以及全应用共享的 axios 实例
 * （`@acrostack/api-client/client` 的 `transport`——import 它同时触发
 * `client.setConfig({ transport })`，使生成 hooks 也走同一实例）。
 *
 * 调用顺序即 ABP 官方模板的 bootstrap 顺序：
 * `configureCore → bootstrapCore（loadRuntimeConfig + initUserManager）→ setupHttpClient`。
 */
import { transport } from "@acrostack/api-client/client";
import { bootstrapCore, configureCore, setupHttpClient } from "@acrostack/core";
import { DEFAULT_CULTURE, env } from "@/env";
import { emitRouteEvent } from "@/lib/routing/routeEvents";

/** 应用启动（首次渲染前）的唯一入口。 */
export async function bootstrapApp(): Promise<void> {
  configureCore({
    env,
    development: import.meta.env.DEV,
    defaultCulture: DEFAULT_CULTURE,
    appNameFallback: "AcroStack",
    forbiddenPath: "/admin/403",
    // 403 交给事件总线做 SPA 导航（见 RouteEventProvider），避免整页刷新
    onForbidden: (path) => emitRouteEvent({ type: "403", to: path }),
  });

  await bootstrapCore();
  setupHttpClient(transport);
}
