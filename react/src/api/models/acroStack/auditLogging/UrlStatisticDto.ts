/* oxlint-disable */

export type AcroStackAuditLoggingUrlStatisticDto = {
  url?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  count?: number;
  /**
   * @description
   * Format: `double`
   * @type number | undefined
   */
  averageExecutionDuration?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  maxExecutionDuration?: number;
};
