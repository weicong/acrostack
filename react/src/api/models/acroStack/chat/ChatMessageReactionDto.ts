/* oxlint-disable */

/**
 * @description A reaction (emoji) left by a user on a chat message.
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
   * @description IdentityUser.Id of the user who left the reaction.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  userId?: string;
  /**
   * @description User name of the user who left the reaction.
   * @type string | undefined
   */
  userName?: string | null;
  /**
   * @description The reaction emoji.
   * @type string | undefined
   */
  reaction?: string | null;
  /**
   * @description When the reaction was created.
   *
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
