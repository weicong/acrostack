/* oxlint-disable */

import type { AcroStackChatChatMessageSideDto } from "./ChatMessageSideDto";

export type AcroStackChatConversationDto = {
  /**
   * @description
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
