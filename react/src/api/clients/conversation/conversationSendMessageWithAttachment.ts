/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationSendMessageWithAttachmentOptions,
  ConversationSendMessageWithAttachmentResponses,
} from "../../models/conversation/ConversationSendMessageWithAttachment";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/send-message-with-attachment}
 */
export function conversationSendMessageWithAttachment<ThrowOnError extends boolean = true>(
  options: Options<ConversationSendMessageWithAttachmentOptions, ThrowOnError>,
): Promise<RequestResult<ConversationSendMessageWithAttachmentResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/conversation/send-message-with-attachment",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationSendMessageWithAttachmentResponses, ThrowOnError>>;
}
