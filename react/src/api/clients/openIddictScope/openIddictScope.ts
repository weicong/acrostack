/* oxlint-disable */

import { openIddictScopeCreate } from "./openIddictScopeCreate.ts";
import { openIddictScopeDelete } from "./openIddictScopeDelete.ts";
import { openIddictScopeGet } from "./openIddictScopeGet.ts";
import { openIddictScopeGetList } from "./openIddictScopeGetList.ts";
import { openIddictScopeUpdate } from "./openIddictScopeUpdate.ts";

export function openIddictScope() {
  return {
    openIddictScopeGet,
    openIddictScopeUpdate,
    openIddictScopeDelete,
    openIddictScopeGetList,
    openIddictScopeCreate,
  };
}
