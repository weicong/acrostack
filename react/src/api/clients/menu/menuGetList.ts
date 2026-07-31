/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuGetListStatus200,
  MenuGetListStatus400,
  MenuGetListStatus401,
  MenuGetListStatus403,
  MenuGetListStatus404,
  MenuGetListStatus500,
  MenuGetListStatus501,
} from "../../models/menu/MenuGetList.ts";

function getMenuGetListUrl() {
  const res = { method: "GET", url: `/api/app/menu` as const };

  return res;
}

/**
 * {@link /api/app/menu}
 */
export async function menuGetList(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuGetListStatus200,
    ResponseErrorConfig<
      | MenuGetListStatus400
      | MenuGetListStatus401
      | MenuGetListStatus403
      | MenuGetListStatus404
      | MenuGetListStatus500
      | MenuGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuGetListUrl().url.toString(), ...requestConfig });

  return res.data;
}
