/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuGetByNameQueryName,
  MenuGetByNameStatus200,
  MenuGetByNameStatus400,
  MenuGetByNameStatus401,
  MenuGetByNameStatus403,
  MenuGetByNameStatus404,
  MenuGetByNameStatus500,
  MenuGetByNameStatus501,
} from "../../models/menu/MenuGetByName.ts";

function getMenuGetByNameUrl() {
  const res = { method: "GET", url: `/api/app/menu/by-name` as const };

  return res;
}

/**
 * {@link /api/app/menu/by-name}
 */
export async function menuGetByName(
  params?: { name?: MenuGetByNameQueryName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuGetByNameStatus200,
    ResponseErrorConfig<
      | MenuGetByNameStatus400
      | MenuGetByNameStatus401
      | MenuGetByNameStatus403
      | MenuGetByNameStatus404
      | MenuGetByNameStatus500
      | MenuGetByNameStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuGetByNameUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
