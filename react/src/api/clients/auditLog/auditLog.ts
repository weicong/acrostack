/* oxlint-disable */

import { auditLogDelete } from "./auditLogDelete.ts";
import { auditLogDeleteMany } from "./auditLogDeleteMany.ts";
import { auditLogGet } from "./auditLogGet.ts";
import { auditLogGetEntityChange } from "./auditLogGetEntityChange.ts";
import { auditLogGetEntityChanges } from "./auditLogGetEntityChanges.ts";
import { auditLogGetList } from "./auditLogGetList.ts";
import { auditLogGetListToExcel } from "./auditLogGetListToExcel.ts";
import { auditLogGetStatistics } from "./auditLogGetStatistics.ts";

export function auditLog() {
  return {
    auditLogGet,
    auditLogDelete,
    auditLogGetList,
    auditLogDeleteMany,
    auditLogGetListToExcel,
    auditLogGetEntityChanges,
    auditLogGetEntityChange,
    auditLogGetStatistics,
  };
}
