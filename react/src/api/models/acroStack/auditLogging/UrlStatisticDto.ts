/* oxlint-disable */

/**
 * @description Per-URL aggregation: how many requests hit this URL, average and max\r\nexecution duration.
 * @type object
 */
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
