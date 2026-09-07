/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ChatBlockGetBlockedUsersOptions,
  ChatBlockGetBlockedUsersResponses,
} from "../../models/chatBlock/ChatBlockGetBlockedUsers";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/chat-block/blocked-users}
 */
export function chatBlockGetBlockedUsers<ThrowOnError extends boolean = true>(
  options: Options<ChatBlockGetBlockedUsersOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ChatBlockGetBlockedUsersResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/chat-block/blocked-users",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ChatBlockGetBlockedUsersResponses, ThrowOnError>>,
  );
}
