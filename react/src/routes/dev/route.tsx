import { createRoute, Outlet } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";

/** 开发调试父路由（/dev）：裸布局、无鉴权，仅本地测试用，勿在生产暴露。 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dev",
  component: () => <Outlet />,
});
