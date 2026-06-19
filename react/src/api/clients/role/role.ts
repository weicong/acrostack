/* oxlint-disable */

import { roleCreate } from "./roleCreate.ts";
import { roleDelete } from "./roleDelete.ts";
import { roleGet } from "./roleGet.ts";
import { roleGetAllList } from "./roleGetAllList.ts";
import { roleGetList } from "./roleGetList.ts";
import { roleUpdate } from "./roleUpdate.ts";

export function role() {
  return { roleGetAllList, roleGetList, roleCreate, roleGet, roleUpdate, roleDelete };
}
