/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationSendMessageData,
  ConversationSendMessageStatus200,
  ConversationSendMessageStatus400,
  ConversationSendMessageStatus401,
  ConversationSendMessageStatus403,
  ConversationSendMessageStatus404,
  ConversationSendMessageStatus500,
  ConversationSendMessageStatus501,
} from "../../models/conversation/ConversationSendMessage.ts";

function getConversationSendMessageUrl() {
  const res = { method: "POST", url: `/api/app/conversation/send-message` as const };

  return res;
}

/**
 * {@link /api/app/conversation/send-message}
 */
export async function conversationSendMessage(
  data?: ConversationSendMessageData,
  config: Partial<RequestConfig<ConversationSendMessageData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ConversationSendMessageStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageStatus400
      | ConversationSendMessageStatus401
      | ConversationSendMessageStatus403
      | ConversationSendMessageStatus404
      | ConversationSendMessageStatus500
      | ConversationSendMessageStatus501
    >,
    ConversationSendMessageData
  >({
    method: "POST",
    url: getConversationSendMessageUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
