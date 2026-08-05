/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationDownloadAttachmentPathMessageId,
  ConversationDownloadAttachmentStatus200,
  ConversationDownloadAttachmentStatus400,
  ConversationDownloadAttachmentStatus401,
  ConversationDownloadAttachmentStatus403,
  ConversationDownloadAttachmentStatus404,
  ConversationDownloadAttachmentStatus500,
  ConversationDownloadAttachmentStatus501,
} from "../../models/conversation/ConversationDownloadAttachment.ts";

function getConversationDownloadAttachmentUrl(
  messageId: ConversationDownloadAttachmentPathMessageId,
) {
  const res = {
    method: "POST",
    url: `/api/app/conversation/download-attachment/${messageId}` as const,
  };

  return res;
}

/**
 * {@link /api/app/conversation/download-attachment/:messageId}
 */
export async function conversationDownloadAttachment(
  messageId: ConversationDownloadAttachmentPathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationDownloadAttachmentStatus200,
    ResponseErrorConfig<
      | ConversationDownloadAttachmentStatus400
      | ConversationDownloadAttachmentStatus401
      | ConversationDownloadAttachmentStatus403
      | ConversationDownloadAttachmentStatus404
      | ConversationDownloadAttachmentStatus500
      | ConversationDownloadAttachmentStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getConversationDownloadAttachmentUrl(messageId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
