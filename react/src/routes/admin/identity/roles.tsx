import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { PeopleTeam20Regular } from "@fluentui/react-icons";

const RolesPage = lazyRouteComponent(() => import("@/pages/identity/roles/RolesPage"), "RolesPage");

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "角色",
  icon: PeopleTeam20Regular,
  requiredPolicy: "AbpIdentity.Roles",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/roles",
  component: RolesPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Roles"),
});
