/* oxlint-disable */

import { conversationDeleteMessage } from "./conversationDeleteMessage.ts";
import { conversationDownloadAttachment } from "./conversationDownloadAttachment.ts";
import { conversationEditMessage } from "./conversationEditMessage.ts";
import { conversationGetList } from "./conversationGetList.ts";
import { conversationGetMessageList } from "./conversationGetMessageList.ts";
import { conversationGetReactions } from "./conversationGetReactions.ts";
import { conversationMarkAsRead } from "./conversationMarkAsRead.ts";
import { conversationSearchMessages } from "./conversationSearchMessages.ts";
import { conversationSendMessage } from "./conversationSendMessage.ts";
import { conversationSendMessageWithAttachment } from "./conversationSendMessageWithAttachment.ts";
import { conversationToggleReaction } from "./conversationToggleReaction.ts";

export function conversation() {
  return {
    conversationGetList,
    conversationGetMessageList,
    conversationSendMessage,
    conversationSendMessageWithAttachment,
    conversationMarkAsRead,
    conversationEditMessage,
    conversationDeleteMessage,
    conversationToggleReaction,
    conversationGetReactions,
    conversationSearchMessages,
    conversationDownloadAttachment,
  };
}
