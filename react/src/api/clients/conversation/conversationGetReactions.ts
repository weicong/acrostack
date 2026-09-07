/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationGetReactionsOptions,
  ConversationGetReactionsResponses,
} from "../../models/conversation/ConversationGetReactions";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/reactions/:messageId}
 */
export function conversationGetReactions<ThrowOnError extends boolean = true>(
  options: Options<ConversationGetReactionsOptions, ThrowOnError>,
): Unwrappable<RequestResult<ConversationGetReactionsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/conversation/reactions/{messageId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationGetReactionsResponses, ThrowOnError>>,
  );
}
