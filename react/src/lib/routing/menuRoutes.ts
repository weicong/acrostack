/**
 * Central registry of menu routes.
 *
 * Each route file exports a `menu` constant with its menu metadata
 * (nameKey, icon, order, requiredPolicy). This file collects them into
 * a single array so the Sidebar can derive the menu without duplicating
 * metadata.
 *
 * To add a new menu item:
 * 1. Export `menu` from the route file (e.g. `export const menu: RouteMenuConfig = { ... }`)
 * 2. Add an entry here: `{ path: "/your-path", menu }`
 *
 * The `requiredPolicy` in the menu metadata is for display filtering only.
 * The actual access control is enforced by the route's `beforeLoad` guard.
 */
import { menu as homeMenu } from "@/routes/index";
import { menu as booksMenu } from "@/routes/books";
import { menu as identityUsersMenu } from "@/routes/identity/users";
import { menu as tenantsMenu } from "@/routes/tenants";
import type { RouteMenuConfig } from "./route-menu-types";

export interface MenuRoute {
  /** Absolute path of the route (e.g. "/books", "/identity/users"). */
  path: string;
  /** Menu metadata from the route file. */
  menu: RouteMenuConfig;
}

export const menuRoutes: MenuRoute[] = [
  { path: "/", menu: homeMenu },
  { path: "/books", menu: booksMenu },
  { path: "/tenants", menu: tenantsMenu },
  { path: "/identity/users", menu: identityUsersMenu },
];
