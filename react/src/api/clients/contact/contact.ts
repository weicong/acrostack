/* oxlint-disable */

import { contactGetList } from "./contactGetList.ts";
import { contactGetTotalUnreadMessageCount } from "./contactGetTotalUnreadMessageCount.ts";

export function contact() {
  return { contactGetList, contactGetTotalUnreadMessageCount };
}
