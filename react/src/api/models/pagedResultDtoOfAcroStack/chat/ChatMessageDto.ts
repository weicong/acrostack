/* oxlint-disable */

import type { AcroStackChatChatMessageDto } from "../../acroStack/chat/ChatMessageDto";

export type PagedResultDtoOfAcroStackChatChatMessageDto = {
  items?: AcroStackChatChatMessageDto[] | null;
  /**
   * @description
   * Format: `int64`
   * @type integer | undefined
   */
  totalCount?: bigint;
};
