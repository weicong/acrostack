/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationToggleReactionPathMessageId,
  ConversationToggleReactionQueryReaction,
  ConversationToggleReactionStatus200,
  ConversationToggleReactionStatus400,
  ConversationToggleReactionStatus401,
  ConversationToggleReactionStatus403,
  ConversationToggleReactionStatus404,
  ConversationToggleReactionStatus500,
  ConversationToggleReactionStatus501,
} from "../../models/conversation/ConversationToggleReaction.ts";

function getConversationToggleReactionUrl(messageId: ConversationToggleReactionPathMessageId) {
  const res = {
    method: "POST",
    url: `/api/app/conversation/toggle-reaction/${messageId}` as const,
  };

  return res;
}

/**
 * {@link /api/app/conversation/toggle-reaction/:messageId}
 */
export async function conversationToggleReaction(
  messageId: ConversationToggleReactionPathMessageId,
  params?: { reaction?: ConversationToggleReactionQueryReaction },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationToggleReactionStatus200,
    ResponseErrorConfig<
      | ConversationToggleReactionStatus400
      | ConversationToggleReactionStatus401
      | ConversationToggleReactionStatus403
      | ConversationToggleReactionStatus404
      | ConversationToggleReactionStatus500
      | ConversationToggleReactionStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getConversationToggleReactionUrl(messageId).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
