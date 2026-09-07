/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationEditMessageOptions,
  ConversationEditMessageResponses,
} from "../../models/conversation/ConversationEditMessage";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/edit-message/:messageId}
 */
export function conversationEditMessage<ThrowOnError extends boolean = true>(
  options: Options<ConversationEditMessageOptions, ThrowOnError>,
): Unwrappable<RequestResult<ConversationEditMessageResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/conversation/edit-message/{messageId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationEditMessageResponses, ThrowOnError>>,
  );
}
