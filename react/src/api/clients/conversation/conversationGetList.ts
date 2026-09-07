/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ConversationGetListOptions,
  ConversationGetListResponses,
} from "../../models/conversation/ConversationGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/conversation}
 */
export function conversationGetList<ThrowOnError extends boolean = true>(
  options: Options<ConversationGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ConversationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/conversation",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ConversationGetListResponses, ThrowOnError>>,
  );
}
