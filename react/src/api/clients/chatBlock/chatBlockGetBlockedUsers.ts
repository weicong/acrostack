/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ChatBlockGetBlockedUsersOptions,
  ChatBlockGetBlockedUsersResponses,
} from "../../models/chatBlock/ChatBlockGetBlockedUsers";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/chat-block/blocked-users}
 */
export function chatBlockGetBlockedUsers<ThrowOnError extends boolean = true>(
  options: Options<ChatBlockGetBlockedUsersOptions, ThrowOnError> = {},
): Promise<RequestResult<ChatBlockGetBlockedUsersResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/chat-block/blocked-users",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ChatBlockGetBlockedUsersResponses, ThrowOnError>>;
}
