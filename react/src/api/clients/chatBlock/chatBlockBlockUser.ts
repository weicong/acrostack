/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ChatBlockBlockUserOptions,
  ChatBlockBlockUserResponses,
} from "../../models/chatBlock/ChatBlockBlockUser";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/chat-block/block-user/:blockedUserId}
 */
export function chatBlockBlockUser<ThrowOnError extends boolean = true>(
  options: Options<ChatBlockBlockUserOptions, ThrowOnError>,
): Unwrappable<RequestResult<ChatBlockBlockUserResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/chat-block/block-user/{blockedUserId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ChatBlockBlockUserResponses, ThrowOnError>>,
  );
}
