import { createRoute, Outlet } from "@tanstack/react-router";
import { Route as rootRoute } from "../__root";
import { authGuard } from "@/lib/routing/guards";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/identity",
  component: Outlet,
  beforeLoad: authGuard,
});
