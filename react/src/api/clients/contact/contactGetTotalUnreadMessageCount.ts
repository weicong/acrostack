/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ContactGetTotalUnreadMessageCountStatus200,
  ContactGetTotalUnreadMessageCountStatus400,
  ContactGetTotalUnreadMessageCountStatus401,
  ContactGetTotalUnreadMessageCountStatus403,
  ContactGetTotalUnreadMessageCountStatus404,
  ContactGetTotalUnreadMessageCountStatus500,
  ContactGetTotalUnreadMessageCountStatus501,
} from "../../models/contact/ContactGetTotalUnreadMessageCount.ts";

function getContactGetTotalUnreadMessageCountUrl() {
  const res = { method: "GET", url: `/api/app/contact/total-unread-message-count` as const };

  return res;
}

/**
 * {@link /api/app/contact/total-unread-message-count}
 */
export async function contactGetTotalUnreadMessageCount(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ContactGetTotalUnreadMessageCountStatus200,
    ResponseErrorConfig<
      | ContactGetTotalUnreadMessageCountStatus400
      | ContactGetTotalUnreadMessageCountStatus401
      | ContactGetTotalUnreadMessageCountStatus403
      | ContactGetTotalUnreadMessageCountStatus404
      | ContactGetTotalUnreadMessageCountStatus500
      | ContactGetTotalUnreadMessageCountStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getContactGetTotalUnreadMessageCountUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
