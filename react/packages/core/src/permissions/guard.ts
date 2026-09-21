/**
 * 权限路由守卫（TanStack Router `beforeLoad`）。
 */
import { redirect } from "@tanstack/react-router";
import { authGuard, type GuardContext } from "../auth/guard";
import { getCoreOptions } from "../options";
import { ensureAppConfig, isPolicyGranted } from "./permissions";

/**
 * 权限守卫工厂：先执行 {@link authGuard}（未登录跳登录），
 * 再确保应用配置已加载，最后校验权限——未授予则跳 forbiddenPath（默认 `/403`）。
 *
 * ```ts
 * beforeLoad: createPermissionGuard("AbpIdentity.Users")
 * ```
 */
export function createPermissionGuard(requiredPolicy: string) {
  return async (context: GuardContext) => {
    await authGuard(context);
    await ensureAppConfig();

    if (!isPolicyGranted(requiredPolicy)) {
      throw redirect({ to: getCoreOptions().forbiddenPath ?? "/403" });
    }
  };
}
