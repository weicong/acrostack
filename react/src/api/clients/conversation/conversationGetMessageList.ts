/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationGetMessageListOptions,
  ConversationGetMessageListResponses,
} from "../../models/conversation/ConversationGetMessageList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/message-list}
 */
export function conversationGetMessageList<ThrowOnError extends boolean = true>(
  options: Options<ConversationGetMessageListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ConversationGetMessageListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/conversation/message-list",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationGetMessageListResponses, ThrowOnError>>,
  );
}
