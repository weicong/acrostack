import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { FeaturesPage } from "@/pages/features/FeaturesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Sparkle20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "功能",
  icon: Sparkle20Regular,
  order: 130,
  requiredPolicy: "AbpFeatureManagement.ManageHostFeatures",
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/features", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/features",
  component: FeaturesPage,
  beforeLoad: createPermissionGuard("AbpFeatureManagement.ManageHostFeatures"),
});
