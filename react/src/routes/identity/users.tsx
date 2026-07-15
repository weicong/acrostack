import { createRoute } from "@tanstack/react-router";
import { Route as identityRoute } from "./route";
import { UsersPage } from "@/pages/identity/UsersPage";
import { createPermissionGuard } from "@/lib/routing/guards";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { People20Regular } from "@fluentui/react-icons";

export const Route = createRoute({
  getParentRoute: () => identityRoute,
  path: "/users",
  component: UsersPage,
  beforeLoad: createPermissionGuard("AbpIdentity.Users"),
  staticData: {
    menu: {
      nameKey: "AbpIdentity::Users",
      icon: People20Regular,
      order: 5,
      requiredPolicy: "AbpIdentity.Users",
    } satisfies RouteMenuConfig,
  },
});
