/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatDownloadAttachmentPathMessageId,
  ChatDownloadAttachmentStatus200,
} from "../../models/chat/ChatDownloadAttachment.ts";

function getChatDownloadAttachmentUrl(messageId: ChatDownloadAttachmentPathMessageId) {
  const res = { method: "GET", url: `/api/app/chat/messages/${messageId}/attachment` as const };

  return res;
}

/**
 * {@link /api/app/chat/messages/:messageId/attachment}
 */
export async function chatDownloadAttachment(
  messageId: ChatDownloadAttachmentPathMessageId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<ChatDownloadAttachmentStatus200, ResponseErrorConfig<Error>, unknown>({
    method: "GET",
    url: getChatDownloadAttachmentUrl(messageId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
