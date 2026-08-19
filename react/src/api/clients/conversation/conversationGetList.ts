/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationGetListOptions,
  ConversationGetListResponses,
} from "../../models/conversation/ConversationGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation}
 */
export function conversationGetList<ThrowOnError extends boolean = true>(
  options: Options<ConversationGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<ConversationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/conversation",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationGetListResponses, ThrowOnError>>;
}
