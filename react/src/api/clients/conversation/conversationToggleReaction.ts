/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ConversationToggleReactionOptions,
  ConversationToggleReactionResponses,
} from "../../models/conversation/ConversationToggleReaction";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/conversation/toggle-reaction/:messageId}
 */
export function conversationToggleReaction<ThrowOnError extends boolean = true>(
  options: Options<ConversationToggleReactionOptions, ThrowOnError>,
): Promise<RequestResult<ConversationToggleReactionResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/conversation/toggle-reaction/{messageId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ConversationToggleReactionResponses, ThrowOnError>>;
}
