import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { PagesPage } from "@/pages/cms/PagesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { DocumentHeader20Regular } from "@fluentui/react-icons";

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
