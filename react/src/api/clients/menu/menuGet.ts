/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuGetPathId,
  MenuGetStatus200,
  MenuGetStatus400,
  MenuGetStatus401,
  MenuGetStatus403,
  MenuGetStatus404,
  MenuGetStatus500,
  MenuGetStatus501,
} from "../../models/menu/MenuGet.ts";

function getMenuGetUrl(id: MenuGetPathId) {
  const res = { method: "GET", url: `/api/app/menu/${id}` as const };

  return res;
}

/**
 * {@link /api/app/menu/:id}
 */
export async function menuGet(
  id: MenuGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuGetStatus200,
    ResponseErrorConfig<
      | MenuGetStatus400
      | MenuGetStatus401
      | MenuGetStatus403
      | MenuGetStatus404
      | MenuGetStatus500
      | MenuGetStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
