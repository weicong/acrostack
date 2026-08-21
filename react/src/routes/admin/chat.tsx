import { createRoute } from "@tanstack/react-router";
import { Route as adminRoute } from "./route";
import { ChatPage } from "@/pages/chat/ChatPage";
import { authGuard } from "@/lib/routing/guards";
import { type MenuRoute, type RouteMenuConfig } from "@/lib/routing/route-config-types";
import { Chat20Regular } from "@fluentui/react-icons";

/** Menu metadata for this route (consumed by Sidebar via route-config.ts). */
export const menu: RouteMenuConfig = {
  name: "聊天",
  icon: Chat20Regular,
  order: 20,
  requiresAuth: true,
};

export const routeConfig: MenuRoute[] = [{ path: "/admin/chat", menu }];

export const Route = createRoute({
  getParentRoute: () => adminRoute,
  path: "/chat",
  component: ChatPage,
  beforeLoad: authGuard,
});
