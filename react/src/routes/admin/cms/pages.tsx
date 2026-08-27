import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { DocumentHeader20Regular } from "@fluentui/react-icons";

const PagesPage = lazyRouteComponent(() => import("@/pages/cms/pages/PagesPage"), "PagesPage");

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "页面",
  icon: DocumentHeader20Regular,
  order: 1,
  requiredPolicy: "CmsKit.Pages",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/pages",
  component: PagesPage,
  beforeLoad: createPermissionGuard("CmsKit.Pages"),
});
