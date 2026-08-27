import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Shield20Regular } from "@fluentui/react-icons";

const PermissionsPage = lazyRouteComponent(
  () => import("@/pages/identity/permissions/PermissionsPage"),
  "PermissionsPage",
);

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "权限",
  icon: Shield20Regular,
  requiredPolicy: "AbpIdentity.Roles",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/permissions",
  component: PermissionsPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Roles"),
});
