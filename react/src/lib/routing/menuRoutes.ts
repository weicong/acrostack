/**
 * Central registry of menu routes.
 *
 * Each route file exports a `menu` constant with its menu metadata
 * (nameKey, icon, order, requiredPolicy). This file collects them into
 * a single array so the Sidebar can derive the menu without duplicating
 * metadata.
 *
 * Menu items are grouped to mirror the ABP Commercial administration menu
 * structure:
 *   - Top-level: Home, business modules (Books, File Management, GDPR), Profile
 *   - Grouped: Identity Management, OpenIddict, SaaS (each with children)
 *   - Top-level admin: Audit Logs, Background Jobs, Features, Settings, Tenants
 *
 * To add a new menu item:
 * 1. Export `menu` from the route file (e.g. `export const menu: RouteMenuConfig = { ... }`)
 * 2. Add an entry here: `{ path: "/your-path", menu }` (top-level) or as a child
 *    of an existing group.
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
import {
  PeopleTeam20Regular,
  ShieldKeyhole20Regular,
  Channel20Regular,
} from "@fluentui/react-icons";
import type { RouteMenuConfig, RouteMenuConfigChild } from "./route-menu-types";

export interface MenuRoute {
  /** Absolute path of the route (e.g. "/books", "/identity/users"). */
  path: string;
  /** Menu metadata from the route file. */
  menu: RouteMenuConfig;
}

/**
 * Converts a route's menu config into a child entry for grouped menus.
 * The child path is relative to the parent group's path.
 */
function asChild(relativePath: string, menu: RouteMenuConfig): RouteMenuConfigChild {
  return {
    path: relativePath,
    nameKey: menu.nameKey,
    icon: menu.icon,
    requiredPolicy: menu.requiredPolicy,
    requiresAuth: menu.requiresAuth,
    externalHref: menu.externalHref,
    externalTarget: menu.externalTarget,
    externalRel: menu.externalRel,
  };
}

export const menuRoutes: MenuRoute[] = [
  // === Home ===
  { path: "/", menu: homeMenu },

  // === Personal ===
  { path: "/profile", menu: profileMenu },

  // === Business modules ===
  { path: "/books", menu: booksMenu },
  { path: "/file-management", menu: fileManagementMenu },
  { path: "/gdpr", menu: gdprMenu },

  // === Administration: grouped menus ===

  // Identity Management (Users, Roles, Permissions)
  {
    path: "/identity",
    menu: {
      nameKey: "AbpIdentity::Menu:IdentityManagement",
      icon: PeopleTeam20Regular,
      order: 100,
      children: [
        asChild("/users", identityUsersMenu),
        asChild("/roles", identityRolesMenu),
        asChild("/permissions", identityPermissionsMenu),
      ],
    },
  },

  // OpenIddict (Applications, Scopes)
  {
    path: "/openiddict",
    menu: {
      nameKey: "Menu:OpenIddict",
      icon: ShieldKeyhole20Regular,
      order: 110,
      children: [
        asChild("/applications", openIddictApplicationsMenu),
        asChild("/scopes", openIddictScopesMenu),
      ],
    },
  },

  // SaaS (Editions)
  {
    path: "/saas",
    menu: {
      nameKey: "Menu:SaaS",
      icon: Channel20Regular,
      order: 120,
      children: [asChild("/editions", saasEditionsMenu)],
    },
  },

  // === Administration: top-level items ===
  { path: "/tenants", menu: tenantsMenu },
  { path: "/audit-logs", menu: auditLogsMenu },
  { path: "/background-jobs", menu: backgroundJobsMenu },
  { path: "/features", menu: featuresMenu },
  { path: "/settings", menu: settingsMenu },
];
