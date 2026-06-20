/* oxlint-disable */

import { appUserDelete } from "./appUserDelete.ts";
import { appUserGetList } from "./appUserGetList.ts";

export function appUser() {
  return { appUserGetList, appUserDelete };
}
