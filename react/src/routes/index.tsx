import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { HomePage } from "@/pages/home/HomePage";
import { type RouteMenuConfig } from "@/lib/routing/route-menu-types";
import { Home20Regular } from "@fluentui/react-icons";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
  staticData: {
    menu: {
      nameKey: "Menu:Home",
      icon: Home20Regular,
      order: 1,
    } satisfies RouteMenuConfig,
  },
});
