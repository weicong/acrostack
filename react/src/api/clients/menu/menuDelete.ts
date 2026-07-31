/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuDeletePathId,
  MenuDeleteStatus200,
  MenuDeleteStatus204,
  MenuDeleteStatus400,
  MenuDeleteStatus401,
  MenuDeleteStatus403,
  MenuDeleteStatus404,
  MenuDeleteStatus500,
  MenuDeleteStatus501,
} from "../../models/menu/MenuDelete.ts";

function getMenuDeleteUrl(id: MenuDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/menu/${id}` as const };

  return res;
}

/**
 * {@link /api/app/menu/:id}
 */
export async function menuDelete(
  id: MenuDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuDeleteStatus200 | MenuDeleteStatus204,
    ResponseErrorConfig<
      | MenuDeleteStatus400
      | MenuDeleteStatus401
      | MenuDeleteStatus403
      | MenuDeleteStatus404
      | MenuDeleteStatus500
      | MenuDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getMenuDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
