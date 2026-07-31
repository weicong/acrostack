/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  ContactGetListStatus200,
  ContactGetListStatus400,
  ContactGetListStatus401,
  ContactGetListStatus403,
  ContactGetListStatus404,
  ContactGetListStatus500,
  ContactGetListStatus501,
} from "../../models/contact/ContactGetList.ts";

function getContactGetListUrl() {
  const res = { method: "GET", url: `/api/app/contact` as const };

  return res;
}

/**
 * {@link /api/app/contact}
 */
export async function contactGetList(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    ContactGetListStatus200,
    ResponseErrorConfig<
      | ContactGetListStatus400
      | ContactGetListStatus401
      | ContactGetListStatus403
      | ContactGetListStatus404
      | ContactGetListStatus500
      | ContactGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getContactGetListUrl().url.toString(), ...requestConfig });

  return res.data;
}
