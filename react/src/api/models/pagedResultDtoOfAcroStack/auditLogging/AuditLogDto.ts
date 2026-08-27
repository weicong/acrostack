/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogDto } from "../../acroStack/auditLogging/AuditLogDto";

export type PagedResultDtoOfAcroStackAuditLoggingAuditLogDto = {
  items?: AcroStackAuditLoggingAuditLogDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
