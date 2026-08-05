/* oxlint-disable */

import { commentAdminDelete } from "./commentAdminDelete.ts";
import { commentAdminGet } from "./commentAdminGet.ts";
import { commentAdminGetList } from "./commentAdminGetList.ts";
import { commentAdminGetWaitingCount } from "./commentAdminGetWaitingCount.ts";
import { commentAdminUpdateApprovalStatus } from "./commentAdminUpdateApprovalStatus.ts";
import { commentAdminUpdateSettings } from "./commentAdminUpdateSettings.ts";

export function commentAdmin() {
  return {
    commentAdminGetList,
    commentAdminGet,
    commentAdminDelete,
    commentAdminUpdateApprovalStatus,
    commentAdminUpdateSettings,
    commentAdminGetWaitingCount,
  };
}
