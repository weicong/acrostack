import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { FeaturesPage } from "@/pages/features/FeaturesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { Sparkle20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via menuRoutes.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "AbpFeatureManagement::Features",
  icon: Sparkle20Regular,
  order: 8,
  requiredPolicy: "AbpFeatureManagement.ManageHostFeatures",
};

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/features",
  component: FeaturesPage,
  beforeLoad: createPermissionGuard("AbpFeatureManagement.ManageHostFeatures"),
});
