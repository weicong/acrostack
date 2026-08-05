/* oxlint-disable */

import { gdprCancelMyScheduledDeletion } from "./gdprCancelMyScheduledDeletion.ts";
import { gdprExport } from "./gdprExport.ts";
import { gdprGetMyScheduledDeletion } from "./gdprGetMyScheduledDeletion.ts";
import { gdprScheduleMyAccountDeletion } from "./gdprScheduleMyAccountDeletion.ts";

export function gdpr() {
  return {
    gdprExport,
    gdprGetMyScheduledDeletion,
    gdprScheduleMyAccountDeletion,
    gdprCancelMyScheduledDeletion,
  };
}
