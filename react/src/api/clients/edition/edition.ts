/* oxlint-disable */

import { editionCreate } from "./editionCreate.ts";
import { editionDelete } from "./editionDelete.ts";
import { editionGet } from "./editionGet.ts";
import { editionGetList } from "./editionGetList.ts";
import { editionUpdate } from "./editionUpdate.ts";

export function edition() {
  return { editionGet, editionUpdate, editionDelete, editionGetList, editionCreate };
}
