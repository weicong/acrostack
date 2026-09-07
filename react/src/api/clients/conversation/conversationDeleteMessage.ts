/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationDeleteMessageOptions,
  ConversationDeleteMessageResponses,
} from "../../models/conversation/ConversationDeleteMessage";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/message/:messageId}
 */
export function conversationDeleteMessage<ThrowOnError extends boolean = true>(
  options: Options<ConversationDeleteMessageOptions, ThrowOnError>,
): Unwrappable<RequestResult<ConversationDeleteMessageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/conversation/message/{messageId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationDeleteMessageResponses, ThrowOnError>>,
  );
}
