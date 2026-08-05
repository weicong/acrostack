/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatBlockIsUserBlockedQueryUserId,
  ChatBlockIsUserBlockedQueryTargetUserId,
  ChatBlockIsUserBlockedStatus200,
  ChatBlockIsUserBlockedStatus400,
  ChatBlockIsUserBlockedStatus401,
  ChatBlockIsUserBlockedStatus403,
  ChatBlockIsUserBlockedStatus404,
  ChatBlockIsUserBlockedStatus500,
  ChatBlockIsUserBlockedStatus501,
} from "../../models/chatBlock/ChatBlockIsUserBlocked.ts";

function getChatBlockIsUserBlockedUrl() {
  const res = { method: "POST", url: `/api/app/chat-block/is-user-blocked` as const };

  return res;
}

/**
 * {@link /api/app/chat-block/is-user-blocked}
 */
export async function chatBlockIsUserBlocked(
  params?: {
    userId?: ChatBlockIsUserBlockedQueryUserId;
    targetUserId?: ChatBlockIsUserBlockedQueryTargetUserId;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ChatBlockIsUserBlockedStatus200,
    ResponseErrorConfig<
      | ChatBlockIsUserBlockedStatus400
      | ChatBlockIsUserBlockedStatus401
      | ChatBlockIsUserBlockedStatus403
      | ChatBlockIsUserBlockedStatus404
      | ChatBlockIsUserBlockedStatus500
      | ChatBlockIsUserBlockedStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getChatBlockIsUserBlockedUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
