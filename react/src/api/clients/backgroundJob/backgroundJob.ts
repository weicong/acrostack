/* oxlint-disable */

import { backgroundJobDelete } from "./backgroundJobDelete.ts";
import { backgroundJobGet } from "./backgroundJobGet.ts";
import { backgroundJobGetList } from "./backgroundJobGetList.ts";

export function backgroundJob() {
  return { backgroundJobGet, backgroundJobDelete, backgroundJobGetList };
}
