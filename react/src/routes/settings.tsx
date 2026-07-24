import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { SettingsPage } from "@/pages/settings/SettingsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { Settings20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via menuRoutes.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "AbpSettingManagement::Settings",
  icon: Settings20Regular,
  order: 9,
  requiredPolicy: "AbpSettingManagement.Emailing",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/settings",
  component: SettingsPage,
  beforeLoad: createPermissionGuard("AbpSettingManagement.Emailing"),
});
