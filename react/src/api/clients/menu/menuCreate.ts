/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuCreateData,
  MenuCreateStatus200,
  MenuCreateStatus400,
  MenuCreateStatus401,
  MenuCreateStatus403,
  MenuCreateStatus404,
  MenuCreateStatus500,
  MenuCreateStatus501,
} from "../../models/menu/MenuCreate.ts";

function getMenuCreateUrl() {
  const res = { method: "POST", url: `/api/app/menu` as const };

  return res;
}

/**
 * {@link /api/app/menu}
 */
export async function menuCreate(
  data?: MenuCreateData,
  config: Partial<RequestConfig<MenuCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuCreateStatus200,
    ResponseErrorConfig<
      | MenuCreateStatus400
      | MenuCreateStatus401
      | MenuCreateStatus403
      | MenuCreateStatus404
      | MenuCreateStatus500
      | MenuCreateStatus501
    >,
    MenuCreateData
  >({
    method: "POST",
    url: getMenuCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
