import { createRoute } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { UsersPage } from "@/pages/identity/UsersPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { People20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "用户",
  icon: People20Regular,
  requiredPolicy: "AbpIdentity.Users",
};

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/users",
  component: UsersPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Users"),
});
