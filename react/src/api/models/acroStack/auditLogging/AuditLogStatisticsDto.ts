/* oxlint-disable */

import type { AcroStackAuditLoggingUrlStatisticDto } from "./UrlStatisticDto.ts";

/**
 * @type object
 */
export type AcroStackAuditLoggingAuditLogStatisticsDto = {
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalRequestCount?: bigint;
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
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  minExecutionDuration?: number;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  errorCount?: bigint;
  /**
   * @type array | undefined
   */
  topSlowUrls?: AcroStackAuditLoggingUrlStatisticDto[] | null;
  /**
   * @type array | undefined
   */
  topFrequentUrls?: AcroStackAuditLoggingUrlStatisticDto[] | null;
  /**
   * @type object | undefined
   */
  httpRequestMethodCounts?: {
    [key: string]: number;
  } | null;
};
