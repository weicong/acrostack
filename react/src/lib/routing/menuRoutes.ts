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
import { menu as identityRolesMenu } from "@/routes/identity/roles";
import { menu as identityPermissionsMenu } from "@/routes/identity/permissions";
import { menu as tenantsMenu } from "@/routes/tenants";
import { menu as profileMenu } from "@/routes/profile";
import { menu as featuresMenu } from "@/routes/features";
import { menu as settingsMenu } from "@/routes/settings";
import { menu as auditLogsMenu } from "@/routes/audit-logs";
import { menu as backgroundJobsMenu } from "@/routes/background-jobs";
import { menu as openIddictApplicationsMenu } from "@/routes/openiddict/applications";
import { menu as openIddictScopesMenu } from "@/routes/openiddict/scopes";
import { menu as saasEditionsMenu } from "@/routes/saas/editions";
import { menu as fileManagementMenu } from "@/routes/file-management";
import { menu as gdprMenu } from "@/routes/gdpr";
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
  { path: "/profile", menu: profileMenu },
  { path: "/tenants", menu: tenantsMenu },
  { path: "/identity/users", menu: identityUsersMenu },
  { path: "/identity/roles", menu: identityRolesMenu },
  { path: "/identity/permissions", menu: identityPermissionsMenu },
  { path: "/features", menu: featuresMenu },
  { path: "/settings", menu: settingsMenu },
  { path: "/audit-logs", menu: auditLogsMenu },
  { path: "/background-jobs", menu: backgroundJobsMenu },
  { path: "/openiddict/applications", menu: openIddictApplicationsMenu },
  { path: "/openiddict/scopes", menu: openIddictScopesMenu },
  { path: "/saas/editions", menu: saasEditionsMenu },
  { path: "/file-management", menu: fileManagementMenu },
  { path: "/gdpr", menu: gdprMenu },
];
