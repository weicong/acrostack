import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { ProfilePage } from "@/pages/account/ProfilePage";
import { authGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Person20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "AbpIdentity::PersonalInfo",
  icon: Person20Regular,
  order: 2,
  requiresAuth: true,
};

export const routeConfig: MenuRoute[] = [{ path: "/profile", menu }];

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/profile",
  component: ProfilePage,
  beforeLoad: authGuard,
});
