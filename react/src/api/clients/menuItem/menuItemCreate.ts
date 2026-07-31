/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemCreateData,
  MenuItemCreateStatus200,
  MenuItemCreateStatus400,
  MenuItemCreateStatus401,
  MenuItemCreateStatus403,
  MenuItemCreateStatus404,
  MenuItemCreateStatus500,
  MenuItemCreateStatus501,
} from "../../models/menuItem/MenuItemCreate.ts";

function getMenuItemCreateUrl() {
  const res = { method: "POST", url: `/api/app/menu-item` as const };

  return res;
}

/**
 * {@link /api/app/menu-item}
 */
export async function menuItemCreate(
  data?: MenuItemCreateData,
  config: Partial<RequestConfig<MenuItemCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuItemCreateStatus200,
    ResponseErrorConfig<
      | MenuItemCreateStatus400
      | MenuItemCreateStatus401
      | MenuItemCreateStatus403
      | MenuItemCreateStatus404
      | MenuItemCreateStatus500
      | MenuItemCreateStatus501
    >,
    MenuItemCreateData
  >({
    method: "POST",
    url: getMenuItemCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
