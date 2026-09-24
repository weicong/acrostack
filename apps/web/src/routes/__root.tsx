import { Outlet, createRootRoute, useRouterState } from "@tanstack/react-router";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";

import { AppSidebar } from "@/components/app-sidebar";
import { RouteBreadcrumb } from "@/lib/breadcrumb";
import { ThemeProvider } from "@/hooks/use-theme";
import { ThemeToggle } from "@/components/theme-toggle";

import "@workspace/ui/globals.css";

export const Route = createRootRoute({
  component: RootComponent,
});

/**
 * shadcn's SidebarProvider persists its state to a `sidebar_state` cookie but
 * never reads it back — in Next.js the server does that. A pure SPA has no
 * server, so we restore it here. This is what makes the collapsed state survive
 * a page refresh.
 */
function readSidebarOpen(): boolean {
  const match = document.cookie.match(/(?:^|;\s*)sidebar_state=(true|false)/);
  return match ? match[1] === "true" : true;
}

function RootComponent() {
  // The breadcrumb is derived from the live pathname, so it stays correct for
  // nested routes without any per-route configuration.
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  return (
    <ThemeProvider>
      <SidebarProvider defaultOpen={readSidebarOpen()}>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-vertical:h-4 data-vertical:self-auto"
              />
              <RouteBreadcrumb pathname={pathname} />
              <div className="ml-auto">
                <ThemeToggle />
              </div>
            </div>
          </header>

          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
