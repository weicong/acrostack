/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationEditMessagePathMessageId,
  ConversationEditMessageData,
  ConversationEditMessageStatus200,
  ConversationEditMessageStatus400,
  ConversationEditMessageStatus401,
  ConversationEditMessageStatus403,
  ConversationEditMessageStatus404,
  ConversationEditMessageStatus500,
  ConversationEditMessageStatus501,
} from "../../models/conversation/ConversationEditMessage.ts";

function getConversationEditMessageUrl(messageId: ConversationEditMessagePathMessageId) {
  const res = { method: "POST", url: `/api/app/conversation/edit-message/${messageId}` as const };

  return res;
}

/**
 * {@link /api/app/conversation/edit-message/:messageId}
 */
export async function conversationEditMessage(
  messageId: ConversationEditMessagePathMessageId,
  data?: ConversationEditMessageData,
  config: Partial<RequestConfig<ConversationEditMessageData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ConversationEditMessageStatus200,
    ResponseErrorConfig<
      | ConversationEditMessageStatus400
      | ConversationEditMessageStatus401
      | ConversationEditMessageStatus403
      | ConversationEditMessageStatus404
      | ConversationEditMessageStatus500
      | ConversationEditMessageStatus501
    >,
    ConversationEditMessageData
  >({
    method: "POST",
    url: getConversationEditMessageUrl(messageId).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
