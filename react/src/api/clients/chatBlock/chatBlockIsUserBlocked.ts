/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ChatBlockIsUserBlockedOptions,
  ChatBlockIsUserBlockedResponses,
} from "../../models/chatBlock/ChatBlockIsUserBlocked";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/chat-block/is-user-blocked}
 */
export function chatBlockIsUserBlocked<ThrowOnError extends boolean = true>(
  options: Options<ChatBlockIsUserBlockedOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ChatBlockIsUserBlockedResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/chat-block/is-user-blocked",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ChatBlockIsUserBlockedResponses, ThrowOnError>>,
  );
}
