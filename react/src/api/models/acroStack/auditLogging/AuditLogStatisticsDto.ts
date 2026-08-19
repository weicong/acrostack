/* oxlint-disable */

import type { AcroStackAuditLoggingUrlStatisticDto } from "./UrlStatisticDto";

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
  topSlowUrls?: AcroStackAuditLoggingUrlStatisticDto[] | null;
  topFrequentUrls?: AcroStackAuditLoggingUrlStatisticDto[] | null;
  httpRequestMethodCounts?: {
    [key: string]: number;
  } | null;
};
