import type { ReactNode } from "react";
import { Separator } from "@workspace/ui/components/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@workspace/ui/components/sidebar";

import { AppSidebar, type AppSidebarProps } from "./app-sidebar";
import { BreadcrumbLabelProvider } from "./breadcrumb-label";
import { ThemeProvider } from "./theme";
import { ThemeToggle } from "./theme-toggle";
import type { LinkRenderer, NavGroup, ShellUser, Team } from "./types";

export type AppShellProps = {
  nav: NavGroup[];
  user: ShellUser;
  teams: Team[];
  /** Rendered in the header after the sidebar trigger and separator (e.g. a breadcrumb). */
  header?: ReactNode;
  /** Right-aligned header content. Defaults to `<ThemeToggle />`. */
  actions?: ReactNode;
  /**
   * Initial sidebar state. The host app owns persistence — read your own cookie
   * or storage and pass the value in.
   */
  defaultSidebarOpen?: boolean;
  /** `localStorage` key for the theme. Give each app its own. */
  themeStorageKey?: string;
  /** Class applied to `<html>` in dark mode; must match your `@custom-variant dark`. */
  darkClassName?: string;
  renderLink?: LinkRenderer;
  /** Extra sidebar configuration (labels, callbacks). */
  sidebarProps?: Omit<AppSidebarProps, "nav" | "user" | "teams" | "renderLink">;
  children: ReactNode;
};

/**
 * The application shell: theme + breadcrumb-label providers, the sidebar, and
 * the inset area with a header and the page content.
 *
 * It is deliberately dumb about routing — pass nav data in and a `renderLink`
 * that knows how to render links in your framework.
 */
export function AppShell({
  nav,
  user,
  teams,
  header,
  actions,
  defaultSidebarOpen,
  themeStorageKey,
  darkClassName,
  renderLink,
  sidebarProps,
  children,
}: AppShellProps) {
  return (
    <ThemeProvider storageKey={themeStorageKey} darkClassName={darkClassName}>
      <BreadcrumbLabelProvider>
        <SidebarProvider defaultOpen={defaultSidebarOpen}>
          <AppSidebar
            nav={nav}
            user={user}
            teams={teams}
            renderLink={renderLink}
            {...sidebarProps}
          />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
              <div className="flex w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator
                  orientation="vertical"
                  className="mr-2 data-vertical:h-4 data-vertical:self-auto"
                />
                {header}
                <div className="ml-auto">{actions ?? <ThemeToggle />}</div>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </BreadcrumbLabelProvider>
    </ThemeProvider>
  );
}
