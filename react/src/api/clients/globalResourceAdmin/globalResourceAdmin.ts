/* oxlint-disable */

import { globalResourceAdminGet } from "./globalResourceAdminGet.ts";
import { globalResourceAdminSetGlobalResources } from "./globalResourceAdminSetGlobalResources.ts";

export function globalResourceAdmin() {
  return { globalResourceAdminGet, globalResourceAdminSetGlobalResources };
}
