/* oxlint-disable */

import type { VoloAbpBackgroundJobsBackgroundJobPriority } from "../../volo/abp/backgroundJobs/BackgroundJobPriority";

export type AcroStackBackgroundJobsBackgroundJobDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  jobName?: string | null;
  jobArgs?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  tryCount?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  nextTryTime?: string;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastTryTime?: string | null;
  isAbandoned?: boolean;
  /**
   * @description 任务完成时间（未完成为 null）。
   *
   * Format: `date-time`
   * @type string | undefined
   */
  completionTime?: string | null;
  /**
   * @description 产生任务的应用名称。
   * @type string | undefined
   */
  applicationName?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  priority?: VoloAbpBackgroundJobsBackgroundJobPriority;
};
