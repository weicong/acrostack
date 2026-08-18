/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackChatChatMessageReactionDto = {
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
   * @type string | undefined
   */
  reaction?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
