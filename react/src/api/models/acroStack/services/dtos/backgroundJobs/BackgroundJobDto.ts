/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosBackgroundJobsBackgroundJobDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @type string | undefined
   */
  jobName?: string | null;
  /**
   * @type string | undefined
   */
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
  /**
   * @type boolean | undefined
   */
  isAbandoned?: boolean;
};
