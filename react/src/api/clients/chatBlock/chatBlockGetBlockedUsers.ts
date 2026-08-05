/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatBlockGetBlockedUsersStatus200,
  ChatBlockGetBlockedUsersStatus400,
  ChatBlockGetBlockedUsersStatus401,
  ChatBlockGetBlockedUsersStatus403,
  ChatBlockGetBlockedUsersStatus404,
  ChatBlockGetBlockedUsersStatus500,
  ChatBlockGetBlockedUsersStatus501,
} from "../../models/chatBlock/ChatBlockGetBlockedUsers.ts";

function getChatBlockGetBlockedUsersUrl() {
  const res = { method: "GET", url: `/api/app/chat-block/blocked-users` as const };

  return res;
}

/**
 * {@link /api/app/chat-block/blocked-users}
 */
export async function chatBlockGetBlockedUsers(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ChatBlockGetBlockedUsersStatus200,
    ResponseErrorConfig<
      | ChatBlockGetBlockedUsersStatus400
      | ChatBlockGetBlockedUsersStatus401
      | ChatBlockGetBlockedUsersStatus403
      | ChatBlockGetBlockedUsersStatus404
      | ChatBlockGetBlockedUsersStatus500
      | ChatBlockGetBlockedUsersStatus501
    >,
    unknown
  >({ method: "GET", url: getChatBlockGetBlockedUsersUrl().url.toString(), ...requestConfig });

  return res.data;
}
