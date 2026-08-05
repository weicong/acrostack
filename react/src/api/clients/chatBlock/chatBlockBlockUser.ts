/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ChatBlockBlockUserPathBlockedUserId,
  ChatBlockBlockUserStatus200,
  ChatBlockBlockUserStatus204,
  ChatBlockBlockUserStatus400,
  ChatBlockBlockUserStatus401,
  ChatBlockBlockUserStatus403,
  ChatBlockBlockUserStatus404,
  ChatBlockBlockUserStatus500,
  ChatBlockBlockUserStatus501,
} from "../../models/chatBlock/ChatBlockBlockUser.ts";

function getChatBlockBlockUserUrl(blockedUserId: ChatBlockBlockUserPathBlockedUserId) {
  const res = { method: "POST", url: `/api/app/chat-block/block-user/${blockedUserId}` as const };

  return res;
}

/**
 * {@link /api/app/chat-block/block-user/:blockedUserId}
 */
export async function chatBlockBlockUser(
  blockedUserId: ChatBlockBlockUserPathBlockedUserId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ChatBlockBlockUserStatus200 | ChatBlockBlockUserStatus204,
    ResponseErrorConfig<
      | ChatBlockBlockUserStatus400
      | ChatBlockBlockUserStatus401
      | ChatBlockBlockUserStatus403
      | ChatBlockBlockUserStatus404
      | ChatBlockBlockUserStatus500
      | ChatBlockBlockUserStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getChatBlockBlockUserUrl(blockedUserId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
