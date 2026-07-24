/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosAuditLoggingAuditLogActionDto = {
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
  serviceName?: string | null;
  /**
   * @type string | undefined
   */
  methodName?: string | null;
  /**
   * @type string | undefined
   */
  parameters?: string | null;
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
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  tenantId?: string | null;
};
