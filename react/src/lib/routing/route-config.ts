/**
 * Top-level route menu aggregator.
 *
 * Each route module independently owns and exports its own `routeConfig:
 * MenuRoute[]` — this file concatenates them into the single `menuRoutes`
 * array consumed by the Sidebar. This mirrors ABP's modular menu
 * registration: modules declare their own menu contributions, and the host
 * aggregates them here (analogous to an ABP module dependency list).
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
 * Module config locations (all under routes/admin/):
 *   - Folder modules (grouped children): `routes/admin/<module>/route-config.ts`
 *     e.g. identity, openiddict, saas, cms. File-management is a folder
 *     module with a single flat entry.
 *   - Flat top-level routes: the route file itself exports `routeConfig`
 *     e.g. routes/admin/books.tsx.
 *
 * To add a new module: export `routeConfig` from it, then add one spread line
 * to the array below. Display order is driven by each entry's `menu.order`
 * (the Sidebar sorts), so the concatenation order here is informational.
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
import { routeConfig as homeConfig } from "@/routes/admin/index";
import { routeConfig as booksConfig } from "@/routes/admin/books";
import { routeConfig as chatConfig } from "@/routes/admin/chat";
import { routeConfig as fileManagementConfig } from "@/routes/admin/file-management/route-config";
import { routeConfig as cmsConfig } from "@/routes/admin/cms/route-config";
import { routeConfig as identityConfig } from "@/routes/admin/identity/route-config";
import { routeConfig as openiddictConfig } from "@/routes/admin/openiddict/route-config";
import { routeConfig as saasConfig } from "@/routes/admin/saas/route-config";
import { routeConfig as featuresConfig } from "@/routes/admin/features";
import { routeConfig as auditLogsConfig } from "@/routes/admin/audit-logs";
import { routeConfig as backgroundJobsConfig } from "@/routes/admin/background-jobs";
import { routeConfig as settingsConfig } from "@/routes/admin/settings";
import type { MenuRoute } from "./route-config-types";

export type { MenuRoute } from "./route-config-types";

export const menuRoutes: MenuRoute[] = [
  // Home
  ...homeConfig,
  // Business
  ...booksConfig,
  ...chatConfig,
  ...fileManagementConfig,
  ...cmsConfig,
  // System administration
  ...identityConfig,
  ...openiddictConfig,
  ...saasConfig,
  ...featuresConfig,
  ...auditLogsConfig,
  ...backgroundJobsConfig,
  ...settingsConfig,
];
