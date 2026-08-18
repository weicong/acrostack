/* oxlint-disable */

/**
 * @type object
 */
export type AcroStackChatContactDto = {
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
  name?: string | null;
  /**
   * @type string | undefined
   */
  surname?: string | null;
  /**
   * @type string | undefined
   */
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
   * @type boolean | undefined
   */
  isOnline?: boolean;
  /**
   * @type boolean | undefined
   */
  isBlocked?: boolean;
};
