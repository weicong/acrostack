/* oxlint-disable */

/**
 * @description A user blocked by the current user in the chat module.
 * @type object
 */
export type AcroStackChatBlockedUserDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  id?: string;
  /**
   * @description IdentityUser.Id of the blocked user.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  blockedUserId?: string;
  /**
   * @description User name of the blocked user.
   * @type string | undefined
   */
  blockedUserName?: string | null;
  /**
   * @description When the block was created.
   *
   * Format: `date-time`
   * @type string | undefined
   */
  creationTime?: string;
};
