import { createRoute, Outlet } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { AccountLayout } from "@/components/layout/AccountLayout";

/**
 * 账户匿名区父路由（/account/*：login / register / forgot-password / reset-password）。
 * 无 OIDC 会话要求；会话内的 account/manage、account/sessions 由后端 Razor 页面提供。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/account",
  component: () => (
    <AccountLayout>
      <Outlet />
    </AccountLayout>
  ),
});
