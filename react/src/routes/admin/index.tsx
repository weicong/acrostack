import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { HomePage } from "@/pages/home/HomePage";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Home20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  nameKey: "Menu:Home",
  icon: Home20Regular,
  order: 1,
};

export const routeConfig: MenuRoute[] = [{ path: "/", menu }];

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
