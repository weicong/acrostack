/**
 * Route guards for auth and permission checks.
 * Use in TanStack Router beforeLoad.
 */
import { redirect } from "@tanstack/react-router";
import { queryClient } from "@/lib/queryClient";
import { userManager } from "@/lib/auth/userManager";
import { ensureAppConfig, isPolicyGranted } from "@/lib/auth/permissions";

export interface GuardContext {
  location: { href: string };
}

/**
 * 哨兵错误：beforeLoad 中已发起 OIDC 外部跳转，用它中断当前导航。
 * 根路由的 errorComponent 识别该类型后展示加载态，避免闪现"页面出现错误"。
 */
export class RedirectingError extends Error {
  constructor() {
    super("Redirecting to login");
    this.name = "RedirectingError";
  }
}

/**
 * Redirects unauthenticated users to OAuth login.
 * Call from protected route's beforeLoad.
 */
export async function authGuard({ location }: GuardContext) {
  const user = await userManager.getUser();
  if (!user || user.expired) {
    await userManager.signinRedirect({
      state: { returnUrl: location.href },
    });
    throw new RedirectingError();
  }

  // 已登录即确保应用配置（当前用户、权限）已加载。
  // 只做登录检查的路由（如个人信息页）同样依赖它渲染侧栏菜单、
  // 用户区与面包屑；否则冷加载/刷新这类页面时配置为空，
  // 侧栏会缩到只剩「首页」。createPermissionGuard 会再次调用，
  // 由 TanStack Query 去重，不产生额外请求。
  await ensureAppConfig(queryClient);
}

/**
 * Factory for permission guard. Use for routes with requiredPolicy.
 * Runs authGuard first, then checks policy.
 */
export function createPermissionGuard(requiredPolicy: string) {
  return async (context: GuardContext) => {
    await authGuard(context);

    // Load app config via TanStack Query (deduplicated + cached).
    await ensureAppConfig(queryClient);

    if (!isPolicyGranted(requiredPolicy)) throw redirect({ to: "/admin/403" });
  };
}
