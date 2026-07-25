/* oxlint-disable */

import { gdprDeleteMyAccount } from "./gdprDeleteMyAccount.ts";
import { gdprExport } from "./gdprExport.ts";

export function gdpr() {
  return { gdprExport, gdprDeleteMyAccount };
}
