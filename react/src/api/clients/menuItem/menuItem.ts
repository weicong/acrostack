/* oxlint-disable */

import { menuItemCreate } from "./menuItemCreate.ts";
import { menuItemDelete } from "./menuItemDelete.ts";
import { menuItemUpdate } from "./menuItemUpdate.ts";

export function menuItem() {
  return { menuItemCreate, menuItemUpdate, menuItemDelete };
}
