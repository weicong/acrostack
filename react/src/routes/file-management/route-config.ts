/**
 * File Management module route-config.
 *
 * Flat top-level module (single route). The menu metadata lives in `./index`
 * (the route file); this wrapper exposes it as a `routeConfig` array so the
 * aggregator can treat every module uniformly.
 * Aggregated by `lib/routing/route-config.ts`.
 */
import { type MenuRoute } from "@/lib/routing/route-config-types";
import { menu as fileManagementMenu } from "./index";

export const routeConfig: MenuRoute[] = [{ path: "/file-management", menu: fileManagementMenu }];
