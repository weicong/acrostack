import type { ComponentType, ReactElement } from "react";

/**
 * Public contract of the layout package.
 *
 * Everything here is deliberately framework-agnostic: no route library, no
 * app-specific types. The application supplies data and — where a link is
 * needed — a renderer, so this package never has to know what router is in use.
 */

/** Anything that renders an icon and accepts a `className` (lucide icons fit). */
export type LayoutIcon = ComponentType<{ className?: string }>;

/**
 * Renders a navigation link for a given `to`.
 *
 * Return a **bare** element (`<Link to={to} />`): the surrounding Base UI
 * component merges its own `className` and the item's children into whatever
 * this returns, so adding children here would double-render them. Add extra
 * classes on the returned element if the host needs them.
 */
export type LinkRenderer = (props: { to: string }) => ReactElement;

/** A leaf inside a sidebar item's submenu. */
export type NavChild = {
  label: string;
  to: string;
  /** Computed by the host app (e.g. an exact route match). */
  active?: boolean;
};

/** One sidebar menu entry. `children` makes it a collapsible parent. */
export type NavItem = {
  label: string;
  to: string;
  icon?: LayoutIcon;
  /** Computed by the host app (e.g. a fuzzy route match). */
  active?: boolean;
  children?: NavChild[];
};

/** A labelled sidebar section. Sections render in array order. */
export type NavGroup = {
  label: string;
  items: NavItem[];
};

/** The account shown in the sidebar footer. */
export type ShellUser = {
  name: string;
  email: string;
  initials: string;
};

/** An entry in the team switcher. */
export type Team = {
  name: string;
  logo: LayoutIcon;
  plan: string;
};

/**
 * One breadcrumb entry. A crumb without `to` renders as plain text — use that
 * for a segment whose label is not known yet (e.g. a detail page mid-load).
 */
export type Crumb = {
  label: string;
  to?: string;
  icon?: LayoutIcon;
};
