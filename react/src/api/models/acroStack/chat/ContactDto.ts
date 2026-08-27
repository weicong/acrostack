/* oxlint-disable */

/**
 * @description A user that the current user can start a conversation with.
 * @type object
 */
export type AcroStackChatContactDto = {
  /**
   * @description IdentityUser.Id.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  userId?: string;
  userName?: string | null;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  unreadMessageCount?: number;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastMessageDate?: string | null;
  /**
   * @description Whether the contact is currently online (based on the chat online tracker).
   * @type boolean | undefined
   */
  isOnline?: boolean;
  /**
   * @description Whether the current user has blocked this contact.
   * @type boolean | undefined
   */
  isBlocked?: boolean;
};
