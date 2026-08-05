/* oxlint-disable */

import { openIddictApplicationCreate } from "./openIddictApplicationCreate.ts";
import { openIddictApplicationDelete } from "./openIddictApplicationDelete.ts";
import { openIddictApplicationGet } from "./openIddictApplicationGet.ts";
import { openIddictApplicationGetList } from "./openIddictApplicationGetList.ts";
import { openIddictApplicationUpdate } from "./openIddictApplicationUpdate.ts";

export function openIddictApplication() {
  return {
    openIddictApplicationGet,
    openIddictApplicationUpdate,
    openIddictApplicationDelete,
    openIddictApplicationGetList,
    openIddictApplicationCreate,
  };
}
