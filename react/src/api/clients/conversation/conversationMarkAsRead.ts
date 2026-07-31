/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationMarkAsReadPathTargetUserId,
  ConversationMarkAsReadStatus200,
  ConversationMarkAsReadStatus204,
  ConversationMarkAsReadStatus400,
  ConversationMarkAsReadStatus401,
  ConversationMarkAsReadStatus403,
  ConversationMarkAsReadStatus404,
  ConversationMarkAsReadStatus500,
  ConversationMarkAsReadStatus501,
} from "../../models/conversation/ConversationMarkAsRead.ts";

function getConversationMarkAsReadUrl(targetUserId: ConversationMarkAsReadPathTargetUserId) {
  const res = {
    method: "POST",
    url: `/api/app/conversation/mark-as-read/${targetUserId}` as const,
  };

  return res;
}

/**
 * {@link /api/app/conversation/mark-as-read/:targetUserId}
 */
export async function conversationMarkAsRead(
  targetUserId: ConversationMarkAsReadPathTargetUserId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationMarkAsReadStatus200 | ConversationMarkAsReadStatus204,
    ResponseErrorConfig<
      | ConversationMarkAsReadStatus400
      | ConversationMarkAsReadStatus401
      | ConversationMarkAsReadStatus403
      | ConversationMarkAsReadStatus404
      | ConversationMarkAsReadStatus500
      | ConversationMarkAsReadStatus501
    >,
    unknown
  >({
    method: "POST",
    url: getConversationMarkAsReadUrl(targetUserId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
