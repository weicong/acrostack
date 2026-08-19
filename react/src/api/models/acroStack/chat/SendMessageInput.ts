/* oxlint-disable */

export type AcroStackChatSendMessageInput = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  targetUserId?: string;
  /**
   * @minLength 0
   * @maxLength 4000
   * @type string | undefined
   */
  text?: string | null;
};
