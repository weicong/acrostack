/* oxlint-disable */

import { auditLogGet } from "./auditLogGet.ts";
import { auditLogGetList } from "./auditLogGetList.ts";

export function auditLog() {
  return { auditLogGet, auditLogGetList };
}
