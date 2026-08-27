import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as adminRoute } from "../route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Navigation20Regular } from "@fluentui/react-icons";

const MenusPage = lazyRouteComponent(() => import("@/pages/cms/menus/MenusPage"), "MenusPage");

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "菜单",
  icon: Navigation20Regular,
  order: 6,
  requiredPolicy: "CmsKit.Menus",
};

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/cms/menus",
  component: MenusPage,
  beforeLoad: createPermissionGuard("CmsKit.Menus"),
});
