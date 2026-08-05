/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesGdprScheduledDeletionDto = {
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
  userId?: string;
  /**
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  scheduledDeletionTime?: string;
  /**
   * @type boolean | undefined
   */
  isCancelled?: boolean;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  cancelledTime?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  executedTime?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
  /**
   * @type boolean | undefined
   */
  readonly isPending?: boolean;
  /**
   * @type boolean | undefined
   */
  readonly canCancel?: boolean;
};
