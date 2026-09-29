import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AccountLayout } from "@/shell/account-layout";

/**
 * 账户匿名区父路由（/account/*：login / register / forgot-password / reset-password）。
 * 无 OIDC 会话要求；会话内的 account/manage、account/sessions 由后端 Razor 页面提供。
 */
export const Route = createFileRoute("/account")({
  component: () => (
    <AccountLayout>
      <Outlet />
    </AccountLayout>
  ),
});
