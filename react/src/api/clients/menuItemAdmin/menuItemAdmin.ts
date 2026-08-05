/* oxlint-disable */

import { menuItemAdminCreate } from "./menuItemAdminCreate.ts";
import { menuItemAdminDelete } from "./menuItemAdminDelete.ts";
import { menuItemAdminGet } from "./menuItemAdminGet.ts";
import { menuItemAdminGetAvailableMenuOrder } from "./menuItemAdminGetAvailableMenuOrder.ts";
import { menuItemAdminGetList } from "./menuItemAdminGetList.ts";
import { menuItemAdminGetPageLookup } from "./menuItemAdminGetPageLookup.ts";
import { menuItemAdminGetPermissionLookup } from "./menuItemAdminGetPermissionLookup.ts";
import { menuItemAdminMoveMenuItem } from "./menuItemAdminMoveMenuItem.ts";
import { menuItemAdminUpdate } from "./menuItemAdminUpdate.ts";

export function menuItemAdmin() {
  return {
    menuItemAdminGetList,
    menuItemAdminCreate,
    menuItemAdminGet,
    menuItemAdminUpdate,
    menuItemAdminDelete,
    menuItemAdminMoveMenuItem,
    menuItemAdminGetPageLookup,
    menuItemAdminGetPermissionLookup,
    menuItemAdminGetAvailableMenuOrder,
  };
}
