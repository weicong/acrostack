/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto.ts";

/**
 * @type object
 */
export type AcroStackChatConversationDto = {
  /**
   * @description
   * Format: `uuid`
   * @type string | undefined
   */
  targetUserId?: string;
  /**
   * @type string | undefined
   */
  targetUserName?: string | null;
  /**
   * @type string | undefined
   */
  targetName?: string | null;
  /**
   * @type string | undefined
   */
  targetSurname?: string | null;
  /**
   * @type string | undefined
   */
  targetEmail?: string | null;
  /**
   * @type string | undefined
   */
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
