import { createRoute, Outlet } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";

/** SaaS 模块父路由（/admin/saas/*）。登录守卫在 admin 布局路由统一生效。 */
export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/saas",
  component: Outlet,
});
