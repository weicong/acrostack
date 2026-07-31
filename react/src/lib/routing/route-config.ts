/**
 * Top-level route menu aggregator.
 *
 * Each route module independently owns and exports its own `routeConfig:
 * MenuRoute[]` — this file simply concatenates them into the single
 * `menuRoutes` array consumed by the Sidebar. This mirrors ABP's modular menu
 * registration: modules declare their own menu contributions, and the host
 * aggregates them here (analogous to an ABP module dependency list).
 *
 * Module config locations:
 *   - Folder modules (grouped children): `routes/<module>/route-config.ts`
 *     e.g. identity, openiddict, saas. File-management is a folder module
 *     with a single flat entry.
 *   - Flat top-level routes: the route file itself exports `routeConfig`
 *     e.g. routes/books.tsx, routes/gdpr.tsx.
 *
 * To add a new module: export `routeConfig` from it, then add one spread line
 * to the array below. Display order is driven by each entry's `menu.order`
 * (the Sidebar sorts), so the concatenation order here is informational.
 *
 * The `requiredPolicy` in menu metadata is for display filtering only.
 * Actual access control is enforced by each route's `beforeLoad` guard.
 */
import { routeConfig as homeConfig } from "@/routes/index";
import { routeConfig as profileConfig } from "@/routes/profile";
import { routeConfig as chatConfig } from "@/routes/chat";
import { routeConfig as booksConfig } from "@/routes/books";
import { routeConfig as tenantsConfig } from "@/routes/tenants";
import { routeConfig as featuresConfig } from "@/routes/features";
import { routeConfig as settingsConfig } from "@/routes/settings";
import { routeConfig as auditLogsConfig } from "@/routes/audit-logs";
import { routeConfig as backgroundJobsConfig } from "@/routes/background-jobs";
import { routeConfig as gdprConfig } from "@/routes/gdpr";
import { routeConfig as fileManagementConfig } from "@/routes/file-management/route-config";
import { routeConfig as identityConfig } from "@/routes/identity/route-config";
import { routeConfig as openiddictConfig } from "@/routes/openiddict/route-config";
import { routeConfig as saasConfig } from "@/routes/saas/route-config";
import { routeConfig as cmsConfig } from "@/routes/cms/route-config";
import type { MenuRoute } from "./route-config-types";

export type { MenuRoute } from "./route-config-types";

export const menuRoutes: MenuRoute[] = [
  ...homeConfig,
  ...profileConfig,
  ...chatConfig,
  ...booksConfig,
  ...tenantsConfig,
  ...featuresConfig,
  ...settingsConfig,
  ...auditLogsConfig,
  ...backgroundJobsConfig,
  ...gdprConfig,
  ...fileManagementConfig,
  ...identityConfig,
  ...openiddictConfig,
  ...saasConfig,
  ...cmsConfig,
];
