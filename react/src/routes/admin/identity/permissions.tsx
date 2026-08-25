import { createRoute } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { PermissionsPage } from "@/pages/identity/permissions/PermissionsPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Shield20Regular } from "@fluentui/react-icons";

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
