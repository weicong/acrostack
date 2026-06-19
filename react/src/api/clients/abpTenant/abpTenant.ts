/* oxlint-disable */

import { abpTenantFindTenantById } from "./abpTenantFindTenantById.ts";
import { abpTenantFindTenantByName } from "./abpTenantFindTenantByName.ts";

export function abpTenant() {
  return { abpTenantFindTenantByName, abpTenantFindTenantById };
}
