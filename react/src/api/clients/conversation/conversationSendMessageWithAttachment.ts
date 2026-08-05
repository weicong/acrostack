/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationSendMessageWithAttachmentData,
  ConversationSendMessageWithAttachmentStatus200,
  ConversationSendMessageWithAttachmentStatus400,
  ConversationSendMessageWithAttachmentStatus401,
  ConversationSendMessageWithAttachmentStatus403,
  ConversationSendMessageWithAttachmentStatus404,
  ConversationSendMessageWithAttachmentStatus500,
  ConversationSendMessageWithAttachmentStatus501,
} from "../../models/conversation/ConversationSendMessageWithAttachment.ts";

function getConversationSendMessageWithAttachmentUrl() {
  const res = {
    method: "POST",
    url: `/api/app/conversation/send-message-with-attachment` as const,
  };

  return res;
}

/**
 * {@link /api/app/conversation/send-message-with-attachment}
 */
export async function conversationSendMessageWithAttachment(
  data?: ConversationSendMessageWithAttachmentData,
  config: Partial<RequestConfig<ConversationSendMessageWithAttachmentData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    ConversationSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationSendMessageWithAttachmentStatus400
      | ConversationSendMessageWithAttachmentStatus401
      | ConversationSendMessageWithAttachmentStatus403
      | ConversationSendMessageWithAttachmentStatus404
      | ConversationSendMessageWithAttachmentStatus500
      | ConversationSendMessageWithAttachmentStatus501
    >,
    ConversationSendMessageWithAttachmentData
  >({
    method: "POST",
    url: getConversationSendMessageWithAttachmentUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
