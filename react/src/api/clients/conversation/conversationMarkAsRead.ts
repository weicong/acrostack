/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationMarkAsReadOptions,
  ConversationMarkAsReadResponses,
} from "../../models/conversation/ConversationMarkAsRead";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/mark-as-read/:targetUserId}
 */
export function conversationMarkAsRead<ThrowOnError extends boolean = true>(
  options: Options<ConversationMarkAsReadOptions, ThrowOnError>,
): Promise<RequestResult<ConversationMarkAsReadResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/conversation/mark-as-read/{targetUserId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationMarkAsReadResponses, ThrowOnError>>;
}
