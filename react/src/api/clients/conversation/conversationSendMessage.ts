/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationSendMessageOptions,
  ConversationSendMessageResponses,
} from "../../models/conversation/ConversationSendMessage";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/send-message}
 */
export function conversationSendMessage<ThrowOnError extends boolean = true>(
  options: Options<ConversationSendMessageOptions, ThrowOnError>,
): Promise<RequestResult<ConversationSendMessageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/conversation/send-message",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationSendMessageResponses, ThrowOnError>>;
}
