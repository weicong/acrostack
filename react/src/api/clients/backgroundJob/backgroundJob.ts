/* oxlint-disable */

import { backgroundJobAbandon } from "./backgroundJobAbandon.ts";
import { backgroundJobDelete } from "./backgroundJobDelete.ts";
import { backgroundJobGet } from "./backgroundJobGet.ts";
import { backgroundJobGetList } from "./backgroundJobGetList.ts";
import { backgroundJobRequeue } from "./backgroundJobRequeue.ts";

export function backgroundJob() {
  return {
    backgroundJobGet,
    backgroundJobDelete,
    backgroundJobGetList,
    backgroundJobRequeue,
    backgroundJobAbandon,
  };
}
