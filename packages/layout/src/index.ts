/**
 * @workspace/layout — the application shell.
 *
 * Router-agnostic by design: it takes nav data as props and asks the host for a
 * `renderLink`, so it never imports a routing library. Everything that depends
 * on *this* app's route tree (deriving nav groups, building breadcrumb trails,
 * persistence) stays in the app.
 */

export { AppShell, type AppShellProps } from "./app-shell";
export { AppSidebar, type AppSidebarProps } from "./app-sidebar";
export { NavMain, type NavMainProps } from "./nav-main";
export { NavUser, type NavUserAction, type NavUserProps } from "./nav-user";
export { TeamSwitcher, type TeamSwitcherProps } from "./team-switcher";
export { RouteBreadcrumb, type RouteBreadcrumbProps } from "./breadcrumb";
export {
  BreadcrumbLabelProvider,
  useBreadcrumbLabel,
  useBreadcrumbOverrides,
} from "./breadcrumb-label";
export { ThemeProvider, useTheme, type Theme, type ThemeProviderProps } from "./theme";
export { ThemeToggle, type ThemeToggleProps } from "./theme-toggle";

export type {
  Crumb,
  LayoutIcon,
  LinkRenderer,
  NavChild,
  NavGroup,
  NavItem,
  ShellUser,
  Team,
} from "./types";
