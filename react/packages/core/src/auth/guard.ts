/**
 * 认证路由守卫（TanStack Router `beforeLoad`）。
 */
import { ensureAppConfig } from "../permissions/permissions";
import { userManager } from "./user-manager";

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
 * 未登录则跳转 OAuth 登录（携带 returnUrl），已登录则确保应用配置已加载。
 *
 * 应用配置（当前用户、权限）在这里一并确保：即使只做登录检查的路由
 * （如个人信息页）也依赖它渲染侧栏菜单、用户区与面包屑；
 * createPermissionGuard 会再次调用，由 TanStack Query 去重，不产生额外请求。
 */
export async function authGuard({ location }: GuardContext) {
  const user = await userManager.getUser();
  if (!user || user.expired) {
    await userManager.signinRedirect({
      state: { returnUrl: location.href },
    });
    throw new RedirectingError();
  }

  await ensureAppConfig();
}
