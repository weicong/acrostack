/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationSearchMessagesData,
  ConversationSearchMessagesStatus200,
  ConversationSearchMessagesStatus400,
  ConversationSearchMessagesStatus401,
  ConversationSearchMessagesStatus403,
  ConversationSearchMessagesStatus404,
  ConversationSearchMessagesStatus500,
  ConversationSearchMessagesStatus501,
} from "../../models/conversation/ConversationSearchMessages.ts";

function getConversationSearchMessagesUrl() {
  const res = { method: "POST", url: `/api/app/conversation/search-messages` as const };

  return res;
}

/**
 * {@link /api/app/conversation/search-messages}
 */
export async function conversationSearchMessages(
  data?: ConversationSearchMessagesData,
  config: Partial<RequestConfig<ConversationSearchMessagesData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ConversationSearchMessagesStatus200,
    ResponseErrorConfig<
      | ConversationSearchMessagesStatus400
      | ConversationSearchMessagesStatus401
      | ConversationSearchMessagesStatus403
      | ConversationSearchMessagesStatus404
      | ConversationSearchMessagesStatus500
      | ConversationSearchMessagesStatus501
    >,
    ConversationSearchMessagesData
  >({
    method: "POST",
    url: getConversationSearchMessagesUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
