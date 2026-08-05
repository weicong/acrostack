/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationDeleteMessagePathMessageId,
  ConversationDeleteMessageStatus200,
  ConversationDeleteMessageStatus204,
  ConversationDeleteMessageStatus400,
  ConversationDeleteMessageStatus401,
  ConversationDeleteMessageStatus403,
  ConversationDeleteMessageStatus404,
  ConversationDeleteMessageStatus500,
  ConversationDeleteMessageStatus501,
} from "../../models/conversation/ConversationDeleteMessage.ts";

function getConversationDeleteMessageUrl(messageId: ConversationDeleteMessagePathMessageId) {
  const res = { method: "DELETE", url: `/api/app/conversation/message/${messageId}` as const };

  return res;
}

/**
 * {@link /api/app/conversation/message/:messageId}
 */
export async function conversationDeleteMessage(
  messageId: ConversationDeleteMessagePathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationDeleteMessageStatus200 | ConversationDeleteMessageStatus204,
    ResponseErrorConfig<
      | ConversationDeleteMessageStatus400
      | ConversationDeleteMessageStatus401
      | ConversationDeleteMessageStatus403
      | ConversationDeleteMessageStatus404
      | ConversationDeleteMessageStatus500
      | ConversationDeleteMessageStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getConversationDeleteMessageUrl(messageId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
