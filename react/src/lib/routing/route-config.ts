/**
 * Top-level route menu aggregator — auto-discovery via import.meta.glob.
 *
 * Each route module exports `routeConfig: MenuRoute[]`. This file automatically
 * discovers all flat routes (routes/admin/*.tsx) and folder modules
 * (routes/admin/<module>/route-config.ts) via Vite's import.meta.glob,
 * eliminating the need to manually add import lines when adding new pages.
 *
 * Layout areas (see components/layout/RootLayout.tsx):
 *   /              — portal (workspace launcher, no menu)
 *   /admin/*       — management console (AppLayout + Sidebar, this menu)
 *   /classroom/*   — teacher console (own layout, Tab nav rendered by
 *                    ClassroomLayout — NOT part of this admin menu)
 *   /student/*     — student mobile (no management chrome)
 *   /presentation/* — projection (bare)
 *
 * Workspace switching happens via the portal (/), not cross-domain menu
 * entries in the admin sidebar.
 *
 * To add a new page: create the route .tsx (export `menu` + `Route` +
 * `routeConfig`), or for folder modules add a `route-config.ts`. No changes
 * needed here — auto-discovery picks it up. Display order is driven by each
 * entry's `menu.order` (the Sidebar sorts), so discovery order is informational.
 *
 * Menu layering convention (mirrors ABP's startup template):
 *   order 1            — Home (dashboard, /admin)
 *   order 10–40        — Business modules (Books, Chat, FileManagement, CMS)
 *   order 100–160      — System administration (Identity, OpenIddict, SaaS,
 *                        Features, AuditLogs, BackgroundJobs, Settings)
 *   (removed)          — Profile lives in the Header user menu, not here
 *
 * The `requiredPolicy` in menu metadata is for display filtering only.
 * Actual access control is enforced by each route's `beforeLoad` guard.
 */
import type { MenuRoute } from "./route-config-types";

export type { MenuRoute } from "./route-config-types";

interface RouteConfigModule {
  routeConfig?: MenuRoute[];
}

const flatRouteModules = import.meta.glob("../../routes/admin/*.tsx", {
  eager: true,
}) as Record<string, RouteConfigModule>;

const folderModules = import.meta.glob("../../routes/admin/*/route-config.ts", {
  eager: true,
}) as Record<string, RouteConfigModule>;

function collect(modules: Record<string, RouteConfigModule>): MenuRoute[] {
  return Object.values(modules)
    .filter((m): m is { routeConfig: MenuRoute[] } => m.routeConfig != null)
    .flatMap((m) => m.routeConfig);
}

export const menuRoutes: MenuRoute[] = [...collect(flatRouteModules), ...collect(folderModules)];
