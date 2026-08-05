/* oxlint-disable */

import { tenantEditionAssignEdition } from "./tenantEditionAssignEdition.ts";
import { tenantEditionGetEdition } from "./tenantEditionGetEdition.ts";
import { tenantEditionGetTenantList } from "./tenantEditionGetTenantList.ts";

export function tenantEdition() {
  return { tenantEditionGetEdition, tenantEditionAssignEdition, tenantEditionGetTenantList };
}
