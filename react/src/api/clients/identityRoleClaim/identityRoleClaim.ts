/* oxlint-disable */

import { identityRoleClaimCreate } from "./identityRoleClaimCreate.ts";
import { identityRoleClaimDelete } from "./identityRoleClaimDelete.ts";
import { identityRoleClaimGetList } from "./identityRoleClaimGetList.ts";
import { identityRoleClaimUpdate } from "./identityRoleClaimUpdate.ts";

export function identityRoleClaim() {
  return {
    identityRoleClaimGetList,
    identityRoleClaimCreate,
    identityRoleClaimUpdate,
    identityRoleClaimDelete,
  };
}
