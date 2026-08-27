/* oxlint-disable */

import type { AcroStackAuditLoggingEntityChangeFieldDto } from "./EntityChangeFieldDto";

/**
 * @description Detailed view of a single Volo.Abp.AuditLogging.EntityChange\r\nincluding its AcroStack.AuditLogging.EntityChangeDetailDto.PropertyChanges. Mirrors ABP Commercial\r\nAuditLogging Pro\'s entity-change detail endpoint.
 * @type object
 */
export type AcroStackAuditLoggingEntityChangeDetailDto = {
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
  auditLogId?: string;
  entityTypeFullName?: string | null;
  entityId?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  changeType?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  changeTime?: string;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
  propertyChanges?: AcroStackAuditLoggingEntityChangeFieldDto[] | null;
};
