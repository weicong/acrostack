import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";
import { ChatPage } from "@/pages/chat/ChatPage";
import { authGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Chat20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  nameKey: "Menu:Chat",
  icon: Chat20Regular,
  order: 5,
  requiresAuth: true,
};

export const routeConfig: MenuRoute[] = [{ path: "/chat", menu }];

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chat",
  component: ChatPage,
  beforeLoad: authGuard,
});
