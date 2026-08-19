/* oxlint-disable */

export type AcroStackAuditLoggingAuditLogActionDto = {
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
  serviceName?: string | null;
  methodName?: string | null;
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
