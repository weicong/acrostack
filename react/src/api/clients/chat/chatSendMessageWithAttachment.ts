/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ChatSendMessageWithAttachmentOptions,
  ChatSendMessageWithAttachmentResponses,
} from "../../models/chat/ChatSendMessageWithAttachment";
import { client } from "../../.kubb/client";

/**
 * @summary Sends a chat message with an optional file attachment. The request
 * must be `multipart/form-data`: form fields bind to
 * AcroStack.Chat.SendMessageInput and the file part binds to
 * attachment.
 * {@link /api/app/chat/messages/send-with-attachment}
 */
export function chatSendMessageWithAttachment<ThrowOnError extends boolean = true>(
  options: Options<ChatSendMessageWithAttachmentOptions, ThrowOnError>,
): Promise<RequestResult<ChatSendMessageWithAttachmentResponses, ThrowOnError>> {
  const { client: request = client, contentType, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/chat/messages/send-with-attachment",
    security: [{ type: "oauth2" }],
    contentType: {
      request: "multipart/form-data",
      ...(typeof contentType === "string" ? { request: contentType } : contentType),
    },
    ...config,
  }) as Promise<RequestResult<ChatSendMessageWithAttachmentResponses, ThrowOnError>>;
}
