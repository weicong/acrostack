/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ConversationGetListStatus200,
  ConversationGetListStatus400,
  ConversationGetListStatus401,
  ConversationGetListStatus403,
  ConversationGetListStatus404,
  ConversationGetListStatus500,
  ConversationGetListStatus501,
} from "../../models/conversation/ConversationGetList.ts";

function getConversationGetListUrl() {
  const res = { method: "GET", url: `/api/app/conversation` as const };

  return res;
}

/**
 * {@link /api/app/conversation}
 */
export async function conversationGetList(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ConversationGetListStatus200,
    ResponseErrorConfig<
      | ConversationGetListStatus400
      | ConversationGetListStatus401
      | ConversationGetListStatus403
      | ConversationGetListStatus404
      | ConversationGetListStatus500
      | ConversationGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getConversationGetListUrl().url.toString(), ...requestConfig });

  return res.data;
}
