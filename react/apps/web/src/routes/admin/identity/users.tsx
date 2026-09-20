import { createRoute, lazyRouteComponent } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { People20Regular } from "@fluentui/react-icons";

const UsersPage = lazyRouteComponent(() => import("@/pages/identity/users/UsersPage"), "UsersPage");

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
