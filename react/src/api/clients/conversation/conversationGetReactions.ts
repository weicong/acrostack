/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationGetReactionsPathMessageId,
  ConversationGetReactionsStatus200,
  ConversationGetReactionsStatus400,
  ConversationGetReactionsStatus401,
  ConversationGetReactionsStatus403,
  ConversationGetReactionsStatus404,
  ConversationGetReactionsStatus500,
  ConversationGetReactionsStatus501,
} from "../../models/conversation/ConversationGetReactions.ts";

function getConversationGetReactionsUrl(messageId: ConversationGetReactionsPathMessageId) {
  const res = { method: "GET", url: `/api/app/conversation/reactions/${messageId}` as const };

  return res;
}

/**
 * {@link /api/app/conversation/reactions/:messageId}
 */
export async function conversationGetReactions(
  messageId: ConversationGetReactionsPathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationGetReactionsStatus200,
    ResponseErrorConfig<
      | ConversationGetReactionsStatus400
      | ConversationGetReactionsStatus401
      | ConversationGetReactionsStatus403
      | ConversationGetReactionsStatus404
      | ConversationGetReactionsStatus500
      | ConversationGetReactionsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getConversationGetReactionsUrl(messageId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
