/**
 * `@acrostack/core` —— ABP 框架接入层。
 *
 * 覆盖：运行时配置（dynamic-env → env 回退）、OIDC 授权（PKCE + 静默续期 + 路由守卫）、
 * 权限判定（application configuration + 复合策略 + 权限守卫 + `<Authorize>`）、
 * 多租户（`__tenant` 传播）与 ABP 语义的 HTTP 拦截器（401 刷新重放 / 403 分流 / 逃逸开关）。
 *
 * 依赖倒置：core 不读 `import.meta.env`、不 import `@acrostack/api-client`，
 * 宿主的 env、403 目标与跳转方式、共享 axios 实例全部在组合根注入。
 *
 * bootstrap 顺序（与 ABP React 官方模板一致）：
 * ```ts
 * configureCore({ env, development, forbiddenPath, onForbidden, defaultCulture });
 * await bootstrapCore();          // loadRuntimeConfig() → initUserManager()
 * setupHttpClient(transport);     // 注册鉴权/租户/错误处理拦截器
 * ```
 */
import { initUserManager } from "./auth/user-manager";
import { loadRuntimeConfig } from "./config/runtime-config";

export * from "./options";
export * from "./config";
export * from "./query";
export * from "./tenant";
export * from "./http";
export * from "./auth";
export * from "./permissions";

/** 按官方顺序完成初始化：加载运行时配置 → 初始化 OIDC。渲染前调用一次。 */
export async function bootstrapCore(): Promise<void> {
  await loadRuntimeConfig();
  initUserManager();
}
