/* oxlint-disable */

import { openIddictScopeDelete } from "./openIddictScopeDelete.ts";
import { openIddictScopeGet } from "./openIddictScopeGet.ts";
import { openIddictScopeGetList } from "./openIddictScopeGetList.ts";

export function openIddictScope() {
  return { openIddictScopeGet, openIddictScopeDelete, openIddictScopeGetList };
}
