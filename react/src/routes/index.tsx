import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { PortalPage } from "@/pages/portal/PortalPage";

/**
 * 门户入口（/）：工作区导航中心（后台管理 / 课堂答题）。
 * 匿名可访问；各布局顶栏的 "AcroStack" 品牌名链接回本页。
 */
export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: PortalPage,
});
