/**
 * @workspace/layout/primitives — the pieces that make sense on their own.
 *
 * Use these when you want the layout's building blocks without the full
 * `AppShell` (e.g. only a theme toggle, or your own sidebar composition).
 */

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
