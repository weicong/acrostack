/**
 * @workspace/layout/primitives — the pieces that make sense on their own.
 *
 * Use these when you want the layout's building blocks without the full
 * `AppShell` (e.g. only a theme toggle, or your own sidebar composition).
 */

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
