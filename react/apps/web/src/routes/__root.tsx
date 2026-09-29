import { createRootRoute, Outlet } from "@tanstack/react-router";

import { RouteError, RouteNotFound, RoutePending } from "@/shell/route-states";

export const Route = createRootRoute({
  component: () => <Outlet />,
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
  errorComponent: RouteError,
});
