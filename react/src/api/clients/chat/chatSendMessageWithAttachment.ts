/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatSendMessageWithAttachmentData,
  ChatSendMessageWithAttachmentStatus200,
} from "../../models/chat/ChatSendMessageWithAttachment.ts";
import { buildFormData } from "../../.kubb/config.ts";

function getChatSendMessageWithAttachmentUrl() {
  const res = { method: "POST", url: `/api/app/chat/messages/send-with-attachment` as const };

  return res;
}

/**
 * {@link /api/app/chat/messages/send-with-attachment}
 */
export async function chatSendMessageWithAttachment(
  data?: ChatSendMessageWithAttachmentData,
  config: Partial<RequestConfig<ChatSendMessageWithAttachmentData>> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const requestData = data;
  const formData = buildFormData(requestData);

  const res = await request<
    ChatSendMessageWithAttachmentStatus200,
    ResponseErrorConfig<Error>,
    ChatSendMessageWithAttachmentData
  >({
    method: "POST",
    url: getChatSendMessageWithAttachmentUrl().url.toString(),
    data: formData as FormData,
    ...requestConfig,
  });

  return res.data;
}
