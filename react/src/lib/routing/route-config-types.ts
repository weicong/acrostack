/**
 * Menu metadata types and helpers for route files.
 *
 * Convention (mirrors ABP's modular menu registration):
 *   - Each leaf route file exports a `menu` constant of type RouteMenuConfig.
 *   - Each route module exports a `routeConfig: MenuRoute[]` array:
 *       * Folder modules: `routes/<module>/route-config.ts` aggregates its
 *         children (e.g. identity, openiddict, saas).
 *       * Flat top-level routes: the route file itself exports `routeConfig`.
 *   - The top-level `lib/routing/route-config.ts` aggregator concatenates all
 *     module configs into the single `menuRoutes` array consumed by the Sidebar.
 */
import type { ComponentType } from "react";

export interface RouteMenuConfig {
  /** Menu item display name (system is Chinese-only; no i18n lookup). */
  name: string;
  /** Icon component to display in the sidebar. */
  icon?: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  /** Sort order for menu items (lower = higher priority). */
  order?: number;
  /** ABP policy required to view this menu item (checked by isGranted). */
  requiredPolicy?: string;
  /** Whether authentication is required to view this menu item. */
  requiresAuth?: boolean;
  /** External link URL (or function returning it) - opens in new tab. */
  externalHref?: string | (() => string);
  /** Target for external links ("_blank" or "_self"). */
  externalTarget?: "_self" | "_blank";
  /** Rel attribute for external links. */
  externalRel?: string;
  /** Child menu items (for expandable categories). */
  children?: RouteMenuConfigChild[];
}

/** Child menu item (excludes nested children, includes path). */
export interface RouteMenuConfigChild {
  /** Relative path from parent route (e.g., "users" for /identity/users). */
  path: string;
  /** Menu item display name (system is Chinese-only; no i18n lookup). */
  name: string;
  /** Icon component to display in the sidebar. */
  icon?: ComponentType<{ className?: string; style?: React.CSSProperties }>;
  /** ABP policy required to view this menu item (checked by isGranted). */
  requiredPolicy?: string;
  /** Whether authentication is required to view this menu item. */
  requiresAuth?: boolean;
  /** External link URL (or function returning it) - opens in new tab. */
  externalHref?: string | (() => string);
  /** Target for external links ("_blank" or "_self"). */
  externalTarget?: "_self" | "_blank";
  /** Rel attribute for external links. */
  externalRel?: string;
}

/**
 * A top-level menu entry: an absolute route path paired with its menu metadata.
 * Module configs export arrays of these; the main aggregator concatenates them.
 */
export interface MenuRoute {
  /** Absolute path of the route (e.g. "/books", "/identity"). */
  path: string;
  /** Menu metadata from the route file. */
  menu: RouteMenuConfig;
}

/**
 * Converts a route's menu config into a child entry for grouped menus.
 * The child path is relative to the parent group's path (e.g. "/users" under "/identity").
 */
export function asChild(relativePath: string, menu: RouteMenuConfig): RouteMenuConfigChild {
  return {
    path: relativePath,
    name: menu.name,
    icon: menu.icon,
    requiredPolicy: menu.requiredPolicy,
    requiresAuth: menu.requiresAuth,
    externalHref: menu.externalHref,
    externalTarget: menu.externalTarget,
    externalRel: menu.externalRel,
  };
}
