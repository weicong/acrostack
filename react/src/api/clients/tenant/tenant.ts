/* oxlint-disable */

import { tenantCreate } from "./tenantCreate.ts";
import { tenantDelete } from "./tenantDelete.ts";
import { tenantDeleteDefaultConnectionString } from "./tenantDeleteDefaultConnectionString.ts";
import { tenantGet } from "./tenantGet.ts";
import { tenantGetDefaultConnectionString } from "./tenantGetDefaultConnectionString.ts";
import { tenantGetList } from "./tenantGetList.ts";
import { tenantUpdate } from "./tenantUpdate.ts";
import { tenantUpdateDefaultConnectionString } from "./tenantUpdateDefaultConnectionString.ts";

export function tenant() {
  return {
    tenantGet,
    tenantUpdate,
    tenantDelete,
    tenantGetList,
    tenantCreate,
    tenantGetDefaultConnectionString,
    tenantUpdateDefaultConnectionString,
    tenantDeleteDefaultConnectionString,
  };
}
