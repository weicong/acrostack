/* oxlint-disable */

import { commentCreate } from "./commentCreate.ts";
import { commentDelete } from "./commentDelete.ts";
import { commentGetListForEntity } from "./commentGetListForEntity.ts";

export function comment() {
  return { commentGetListForEntity, commentCreate, commentDelete };
}
