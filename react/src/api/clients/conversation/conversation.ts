/* oxlint-disable */

import { conversationGetList } from "./conversationGetList.ts";
import { conversationGetMessageList } from "./conversationGetMessageList.ts";
import { conversationMarkAsRead } from "./conversationMarkAsRead.ts";
import { conversationSendMessage } from "./conversationSendMessage.ts";

export function conversation() {
  return {
    conversationGetList,
    conversationGetMessageList,
    conversationSendMessage,
    conversationMarkAsRead,
  };
}
