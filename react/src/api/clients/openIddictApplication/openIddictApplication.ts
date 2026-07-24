/* oxlint-disable */

import { openIddictApplicationDelete } from "./openIddictApplicationDelete.ts";
import { openIddictApplicationGet } from "./openIddictApplicationGet.ts";
import { openIddictApplicationGetList } from "./openIddictApplicationGetList.ts";

export function openIddictApplication() {
  return { openIddictApplicationGet, openIddictApplicationDelete, openIddictApplicationGetList };
}
