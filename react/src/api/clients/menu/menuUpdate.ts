/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuUpdatePathId,
  MenuUpdateData,
  MenuUpdateStatus200,
  MenuUpdateStatus400,
  MenuUpdateStatus401,
  MenuUpdateStatus403,
  MenuUpdateStatus404,
  MenuUpdateStatus500,
  MenuUpdateStatus501,
} from "../../models/menu/MenuUpdate.ts";

function getMenuUpdateUrl(id: MenuUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/menu/${id}` as const };

  return res;
}

/**
 * {@link /api/app/menu/:id}
 */
export async function menuUpdate(
  id: MenuUpdatePathId,
  data?: MenuUpdateData,
  config: Partial<RequestConfig<MenuUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuUpdateStatus200,
    ResponseErrorConfig<
      | MenuUpdateStatus400
      | MenuUpdateStatus401
      | MenuUpdateStatus403
      | MenuUpdateStatus404
      | MenuUpdateStatus500
      | MenuUpdateStatus501
    >,
    MenuUpdateData
  >({
    method: "PUT",
    url: getMenuUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
