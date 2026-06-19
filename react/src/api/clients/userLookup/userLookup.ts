/* oxlint-disable */

import { userLookupFindById } from "./userLookupFindById.ts";
import { userLookupFindByUserName } from "./userLookupFindByUserName.ts";
import { userLookupGetCount } from "./userLookupGetCount.ts";
import { userLookupSearch } from "./userLookupSearch.ts";

export function userLookup() {
  return { userLookupFindById, userLookupFindByUserName, userLookupSearch, userLookupGetCount };
}
