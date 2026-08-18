/* oxlint-disable */

import type { AcroStackAuditLoggingEntityChangeFieldDto } from "./EntityChangeFieldDto.ts";

/**
 * @type object
 */
export type AcroStackAuditLoggingEntityChangeDto = {
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
  /**
   * @type string | undefined
   */
  entityTypeFullName?: string | null;
  /**
   * @type string | undefined
   */
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
  /**
   * @type array | undefined
   */
  propertyChanges?: AcroStackAuditLoggingEntityChangeFieldDto[] | null;
};
