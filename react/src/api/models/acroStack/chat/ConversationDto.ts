/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto";

/**
 * @description A conversation preview shown in the contact/chat list.
 * @type object
 */
export type AcroStackChatConversationDto = {
  /**
   * @description IdentityUser.Id of the other party.
   *
   * Format: `uuid`
   * @type string | undefined
   */
  targetUserId?: string;
  targetUserName?: string | null;
  targetName?: string | null;
  targetSurname?: string | null;
  targetEmail?: string | null;
  lastMessage?: string | null;
  /**
   * @description
   * Format: `date-time`
   * @type string | undefined
   */
  lastMessageDate?: string;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  lastMessageSide?: AcroStackChatChatMessageSideDto;
  /**
   * @description
   * Format: `int32`
   * @type integer | undefined
   */
  unreadMessageCount?: number;
};
