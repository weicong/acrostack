import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { HomePage } from "@/pages/home/HomePage";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Home20Regular } from "@fluentui/react-icons";

export const menu: RouteMenuConfig = {
  name: "首页",
  icon: Home20Regular,
  order: 1,
};

export const routeConfig: MenuRoute[] = [{ path: "/admin", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/",
  component: HomePage,
});
