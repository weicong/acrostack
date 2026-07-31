/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemUpdatePathId,
  MenuItemUpdateData,
  MenuItemUpdateStatus200,
  MenuItemUpdateStatus400,
  MenuItemUpdateStatus401,
  MenuItemUpdateStatus403,
  MenuItemUpdateStatus404,
  MenuItemUpdateStatus500,
  MenuItemUpdateStatus501,
} from "../../models/menuItem/MenuItemUpdate.ts";

function getMenuItemUpdateUrl(id: MenuItemUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/menu-item/${id}` as const };

  return res;
}

/**
 * {@link /api/app/menu-item/:id}
 */
export async function menuItemUpdate(
  id: MenuItemUpdatePathId,
  data?: MenuItemUpdateData,
  config: Partial<RequestConfig<MenuItemUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuItemUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemUpdateStatus400
      | MenuItemUpdateStatus401
      | MenuItemUpdateStatus403
      | MenuItemUpdateStatus404
      | MenuItemUpdateStatus500
      | MenuItemUpdateStatus501
    >,
    MenuItemUpdateData
  >({
    method: "PUT",
    url: getMenuItemUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
