/**
 * Top-level route menu aggregator.
 *
 * Each route module independently owns and exports its own `routeConfig:
 * MenuRoute[]` — this file concatenates them into the single `menuRoutes`
 * array consumed by the Sidebar. This mirrors ABP's modular menu
 * registration: modules declare their own menu contributions, and the host
 * aggregates them here (analogous to an ABP module dependency list).
 *
 * Module config locations:
 *   - Folder modules (grouped children): `routes/<module>/route-config.ts`
 *     e.g. identity, openiddict, saas, cms. File-management is a folder
 *     module with a single flat entry.
 *   - Flat top-level routes: the route file itself exports `routeConfig`
 *     e.g. routes/books.tsx, routes/gdpr.tsx.
 *
 * To add a new module: export `routeConfig` from it, then add one spread line
 * to the array below. Display order is driven by each entry's `menu.order`
 * (the Sidebar sorts), so the concatenation order here is informational.
 *
 * Menu layering convention (mirrors ABP's startup template):
 *   order 1            — Home (dashboard)
 *   order 10–40        — Business modules (Books, Chat, FileManagement, CMS)
 *   order 100–160      — System administration (Identity, OpenIddict, SaaS,
 *                        Features, AuditLogs, BackgroundJobs, Settings)
 *   order 200+         — Compliance (GDPR)
 *   (removed)          — Profile lives in the Header user menu, not here
 *
 * The `requiredPolicy` in menu metadata is for display filtering only.
 * Actual access control is enforced by each route's `beforeLoad` guard.
 */
import { routeConfig as homeConfig } from "@/routes/index";
import { routeConfig as booksConfig } from "@/routes/books";
import { routeConfig as chatConfig } from "@/routes/chat";
import { routeConfig as fileManagementConfig } from "@/routes/file-management/route-config";
import { routeConfig as cmsConfig } from "@/routes/cms/route-config";
import { routeConfig as identityConfig } from "@/routes/identity/route-config";
import { routeConfig as openiddictConfig } from "@/routes/openiddict/route-config";
import { routeConfig as saasConfig } from "@/routes/saas/route-config";
import { routeConfig as featuresConfig } from "@/routes/features";
import { routeConfig as auditLogsConfig } from "@/routes/audit-logs";
import { routeConfig as backgroundJobsConfig } from "@/routes/background-jobs";
import { routeConfig as settingsConfig } from "@/routes/settings";
import { routeConfig as gdprConfig } from "@/routes/gdpr";
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
  // Compliance
  ...gdprConfig,
];
