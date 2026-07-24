/* oxlint-disable */

import { identityUserClaimCreate } from "./identityUserClaimCreate.ts";
import { identityUserClaimDelete } from "./identityUserClaimDelete.ts";
import { identityUserClaimGetList } from "./identityUserClaimGetList.ts";
import { identityUserClaimUpdate } from "./identityUserClaimUpdate.ts";

export function identityUserClaim() {
  return {
    identityUserClaimGetList,
    identityUserClaimCreate,
    identityUserClaimUpdate,
    identityUserClaimDelete,
  };
}
