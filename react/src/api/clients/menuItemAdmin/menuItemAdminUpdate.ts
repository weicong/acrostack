/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminUpdatePathId,
  MenuItemAdminUpdateData,
  MenuItemAdminUpdateStatus200,
  MenuItemAdminUpdateStatus400,
  MenuItemAdminUpdateStatus401,
  MenuItemAdminUpdateStatus403,
  MenuItemAdminUpdateStatus404,
  MenuItemAdminUpdateStatus500,
  MenuItemAdminUpdateStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminUpdate.ts";

function getMenuItemAdminUpdateUrl(id: MenuItemAdminUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/menu-items/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export async function menuItemAdminUpdate(
  id: MenuItemAdminUpdatePathId,
  data?: MenuItemAdminUpdateData,
  config: Partial<RequestConfig<MenuItemAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuItemAdminUpdateStatus200,
    ResponseErrorConfig<
      | MenuItemAdminUpdateStatus400
      | MenuItemAdminUpdateStatus401
      | MenuItemAdminUpdateStatus403
      | MenuItemAdminUpdateStatus404
      | MenuItemAdminUpdateStatus500
      | MenuItemAdminUpdateStatus501
    >,
    MenuItemAdminUpdateData
  >({
    method: "PUT",
    url: getMenuItemAdminUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
