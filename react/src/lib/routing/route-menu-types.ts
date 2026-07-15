/**
 * Menu metadata for TanStack Router staticData.
 * Attach this to route staticData to define menu appearance.
 * Sidebar will derive the menu from router.routesById.
 */
import type { ComponentType } from "react";

export interface RouteMenuConfig {
  /** i18n translation key for the menu item label. */
  nameKey: string;
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
  /** i18n translation key for the menu item label. */
  nameKey: string;
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
 * Extend TanStack Router's Register module to include menu config.
 * This provides type safety when using route.staticData.menu.
 */
declare module "@tanstack/react-router" {
  interface Register {
    route: {
      staticData?: {
        menu?: RouteMenuConfig;
      };
    };
  }
}
