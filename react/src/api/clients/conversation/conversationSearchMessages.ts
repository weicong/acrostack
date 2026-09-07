/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationSearchMessagesOptions,
  ConversationSearchMessagesResponses,
} from "../../models/conversation/ConversationSearchMessages";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/search-messages}
 */
export function conversationSearchMessages<ThrowOnError extends boolean = true>(
  options: Options<ConversationSearchMessagesOptions, ThrowOnError>,
): Unwrappable<RequestResult<ConversationSearchMessagesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/conversation/search-messages",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationSearchMessagesResponses, ThrowOnError>>,
  );
}
