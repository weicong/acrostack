/* oxlint-disable */

import { identityClaimTypeCreate } from "./identityClaimTypeCreate.ts";
import { identityClaimTypeDelete } from "./identityClaimTypeDelete.ts";
import { identityClaimTypeGet } from "./identityClaimTypeGet.ts";
import { identityClaimTypeGetAllClaimTypes } from "./identityClaimTypeGetAllClaimTypes.ts";
import { identityClaimTypeGetList } from "./identityClaimTypeGetList.ts";
import { identityClaimTypeUpdate } from "./identityClaimTypeUpdate.ts";

export function identityClaimType() {
  return {
    identityClaimTypeGet,
    identityClaimTypeUpdate,
    identityClaimTypeDelete,
    identityClaimTypeGetList,
    identityClaimTypeCreate,
    identityClaimTypeGetAllClaimTypes,
  };
}
