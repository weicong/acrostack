/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackServicesDtosCmsReactionSummaryDto = {
  /**
   * @type string | undefined
   */
  entityType?: string | null;
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  entityId?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  totalCount?: number;
  /**
   * @type object | undefined
   */
  countsByType?: {
    [key: string]: number;
  } | null;
  /**
   * @type array | undefined
   */
  currentUserReactions?: string[] | null;
};
