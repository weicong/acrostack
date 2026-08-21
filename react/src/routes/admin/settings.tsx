import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { SettingsPage } from "@/pages/settings/SettingsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Settings20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "设置",
  icon: Settings20Regular,
  order: 160,
  requiredPolicy: "AbpSettingManagement.Emailing",
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/settings", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/settings",
  component: SettingsPage,
  beforeLoad: createPermissionGuard("AbpSettingManagement.Emailing"),
});
