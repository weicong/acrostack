/**
 * @acrostack/layout — the application shell.
 *
 * Router-agnostic by design: it takes nav data as props and asks the host for a
 * `renderLink`, so it never imports a routing library. Everything that depends
 * on *this* app's route tree (deriving nav groups, building breadcrumb trails,
 * persistence) stays in the app.
 *
 * This barrel is a convenience entry point. The directory-based exports
 * (`@acrostack/layout/components/app-shell`, `.../hooks/use-theme`,
 * `.../lib/types`) mirror `@acrostack/ui` and are the shape shadcn's CLI
 * expects, so prefer those when you only need one piece.
 */

export { AppShell, type AppShellProps } from "#components/app-shell";
export { AppSidebar, type AppSidebarProps } from "#components/app-sidebar";
export { NavMain, type NavMainProps } from "#components/nav-main";
export { NavUser, type NavUserAction, type NavUserProps } from "#components/nav-user";
export { TeamSwitcher, type TeamSwitcherProps } from "#components/team-switcher";
export { PageHeader, type PageHeaderProps } from "#components/page-header";
export { RouteBreadcrumb, type RouteBreadcrumbProps } from "#components/breadcrumb";
export { BreadcrumbLabelProvider } from "#components/breadcrumb-label-provider";
export { ThemeProvider, type ThemeProviderProps } from "#components/theme-provider";
export { ThemeToggle, type ThemeToggleProps } from "#components/theme-toggle";

export { useTheme, type Theme } from "#hooks/use-theme";
export {
  useBreadcrumbLabel,
  useBreadcrumbOverrides,
  type BreadcrumbOverrides,
} from "#hooks/use-breadcrumb-label";

export type {
  Crumb,
  LayoutIcon,
  LinkRenderer,
  NavChild,
  NavGroup,
  NavItem,
  ShellUser,
  Team,
} from "#lib/types";
