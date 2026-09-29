import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Users } from "lucide-react";

/**
 * Identity 模块父路由（/admin/identity/*）。登录守卫在 admin 布局路由统一生效。
 *
 * 它声明 `staticData.nav`，因此会成为侧栏里一个可折叠的父项；子路由声明 nav 后
 * 在路由树上以它为父节点，菜单层级自动跟随路由树（见 `shell/route-meta.ts`）。
 */
export const Route = createFileRoute("/admin/identity")({
  component: () => <Outlet />,
  staticData: {
    nav: { label: "身份认证管理", group: "系统", icon: Users, order: 100 },
  },
});
