/* oxlint-disable */

import { bookCreate } from "./bookCreate.ts";
import { bookDelete } from "./bookDelete.ts";
import { bookGet } from "./bookGet.ts";
import { bookGetList } from "./bookGetList.ts";
import { bookUpdate } from "./bookUpdate.ts";

export function book() {
  return { bookGet, bookUpdate, bookDelete, bookGetList, bookCreate };
}
