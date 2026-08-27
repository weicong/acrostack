/* oxlint-disable */

/**
 * @description Input for searching chat messages by keyword across all conversations.
 * @type object
 */
export type AcroStackChatSearchMessagesInput = {
  /**
   * @description Keyword to search for in message text.
   * @type string | undefined
   */
  keyword?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  skipCount?: number;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  maxResultCount?: number;
};
