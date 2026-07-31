/* oxlint-disable */

import { menuCreate } from "./menuCreate.ts";
import { menuDelete } from "./menuDelete.ts";
import { menuGet } from "./menuGet.ts";
import { menuGetByName } from "./menuGetByName.ts";
import { menuGetList } from "./menuGetList.ts";
import { menuUpdate } from "./menuUpdate.ts";

export function menu() {
  return { menuGetList, menuCreate, menuGet, menuUpdate, menuDelete, menuGetByName };
}
