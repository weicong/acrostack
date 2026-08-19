/* oxlint-disable */

import type { AcroStackAuditLoggingAuditLogActionDto } from "./AuditLogActionDto";
import type { AcroStackAuditLoggingEntityChangeDto } from "./EntityChangeDto";

export type AcroStackAuditLoggingAuditLogDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  userId?: string | null;
  userName?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  tenantName?: string | null;
  httpMethod?: string | null;
  url?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  httpStatusCode?: number | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  executionTime?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  executionDuration?: number;
  clientIpAddress?: string | null;
  clientName?: string | null;
  browserInfo?: string | null;
  exceptions?: string | null;
  comments?: string | null;
  correlationId?: string | null;
  entityChanges?: AcroStackAuditLoggingEntityChangeDto[] | null;
  actions?: AcroStackAuditLoggingAuditLogActionDto[] | null;
};
