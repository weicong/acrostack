import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import { AppShell } from "@workspace/layout";

import { AppBreadcrumb } from "@/shell/breadcrumb";
import { readSidebarOpen, renderLink, teams, useShellNav, user } from "@/shell/layout";
import { RouteError, RouteNotFound, RoutePending } from "@/shell/route-states";

import "@workspace/ui/globals.css";

export const Route = createRootRoute({
  component: RootComponent,
  // App-wide states; they render inside the shell, so navigation stays usable.
  pendingComponent: RoutePending,
  notFoundComponent: RouteNotFound,
  errorComponent: RouteError,
});

function RootComponent() {
  // The breadcrumb is derived from the live pathname, so it stays correct for
  // nested routes without any per-route configuration.
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  // The menu is the route tree: each route declares its own `staticData.nav`.
  const nav = useShellNav();

  return (
    <AppShell
      nav={nav}
      user={user}
      teams={teams}
      header={<AppBreadcrumb pathname={pathname} />}
      defaultSidebarOpen={readSidebarOpen()}
      renderLink={renderLink}
    >
      <Outlet />
    </AppShell>
  );
}
