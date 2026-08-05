/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatBlockUnblockUserPathBlockedUserId,
  ChatBlockUnblockUserStatus200,
  ChatBlockUnblockUserStatus204,
  ChatBlockUnblockUserStatus400,
  ChatBlockUnblockUserStatus401,
  ChatBlockUnblockUserStatus403,
  ChatBlockUnblockUserStatus404,
  ChatBlockUnblockUserStatus500,
  ChatBlockUnblockUserStatus501,
} from "../../models/chatBlock/ChatBlockUnblockUser.ts";

function getChatBlockUnblockUserUrl(blockedUserId: ChatBlockUnblockUserPathBlockedUserId) {
  const res = { method: "POST", url: `/api/app/chat-block/unblock-user/${blockedUserId}` as const };

  return res;
}

/**
 * {@link /api/app/chat-block/unblock-user/:blockedUserId}
 */
export async function chatBlockUnblockUser(
  blockedUserId: ChatBlockUnblockUserPathBlockedUserId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ChatBlockUnblockUserStatus200 | ChatBlockUnblockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockUnblockUserStatus400
      | ChatBlockUnblockUserStatus401
      | ChatBlockUnblockUserStatus403
      | ChatBlockUnblockUserStatus404
      | ChatBlockUnblockUserStatus500
      | ChatBlockUnblockUserStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getChatBlockUnblockUserUrl(blockedUserId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
