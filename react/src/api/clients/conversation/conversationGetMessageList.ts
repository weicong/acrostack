/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationGetMessageListQueryTargetUserId,
  ConversationGetMessageListQuerySkipCount,
  ConversationGetMessageListQueryMaxResultCount,
  ConversationGetMessageListStatus200,
  ConversationGetMessageListStatus400,
  ConversationGetMessageListStatus401,
  ConversationGetMessageListStatus403,
  ConversationGetMessageListStatus404,
  ConversationGetMessageListStatus500,
  ConversationGetMessageListStatus501,
} from "../../models/conversation/ConversationGetMessageList.ts";

function getConversationGetMessageListUrl() {
  const res = { method: "GET", url: `/api/app/conversation/message-list` as const };

  return res;
}

/**
 * {@link /api/app/conversation/message-list}
 */
export async function conversationGetMessageList(
  params?: {
    TargetUserId?: ConversationGetMessageListQueryTargetUserId;
    SkipCount?: ConversationGetMessageListQuerySkipCount;
    MaxResultCount?: ConversationGetMessageListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationGetMessageListStatus200,
    ResponseErrorConfig<
      | ConversationGetMessageListStatus400
      | ConversationGetMessageListStatus401
      | ConversationGetMessageListStatus403
      | ConversationGetMessageListStatus404
      | ConversationGetMessageListStatus500
      | ConversationGetMessageListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getConversationGetMessageListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
