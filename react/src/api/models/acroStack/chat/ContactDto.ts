/* oxlint-disable */

export type AcroStackChatContactDto = {
  /**
   * @description
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
  isOnline?: boolean;
  isBlocked?: boolean;
};
