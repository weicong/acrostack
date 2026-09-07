/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationSendMessageOptions,
  ConversationSendMessageResponses,
} from "../../models/conversation/ConversationSendMessage";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/send-message}
 */
export function conversationSendMessage<ThrowOnError extends boolean = true>(
  options: Options<ConversationSendMessageOptions, ThrowOnError>,
): Unwrappable<RequestResult<ConversationSendMessageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/conversation/send-message",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationSendMessageResponses, ThrowOnError>>,
  );
}
