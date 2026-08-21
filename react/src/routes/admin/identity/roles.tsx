import { createRoute } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { RolesPage } from "@/pages/identity/RolesPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { PeopleTeam20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "AbpIdentity::Roles",
  icon: PeopleTeam20Regular,
  requiredPolicy: "AbpIdentity.Roles",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/roles",
  component: RolesPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Roles"),
});
