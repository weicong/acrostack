import { createRoute, Outlet } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";

/**
 * 投屏端父路由（/presentation）：只读匿名视图，短期投屏令牌鉴权。
 * RootLayout 对 /presentation/* 使用全屏裸布局。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/presentation",
  component: () => <Outlet />,
});
