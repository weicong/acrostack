import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { MenusPage } from "@/pages/cms/MenusPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Navigation20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Cms.Menus",
  icon: Navigation20Regular,
  order: 6,
  requiredPolicy: "CmsKit.Menus",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cms/menus",
  component: MenusPage,
  beforeLoad: createPermissionGuard("CmsKit.Menus"),
});
