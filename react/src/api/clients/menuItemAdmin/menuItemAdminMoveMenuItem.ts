/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminMoveMenuItemPathId,
  MenuItemAdminMoveMenuItemData,
  MenuItemAdminMoveMenuItemStatus200,
  MenuItemAdminMoveMenuItemStatus204,
  MenuItemAdminMoveMenuItemStatus400,
  MenuItemAdminMoveMenuItemStatus401,
  MenuItemAdminMoveMenuItemStatus403,
  MenuItemAdminMoveMenuItemStatus404,
  MenuItemAdminMoveMenuItemStatus500,
  MenuItemAdminMoveMenuItemStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminMoveMenuItem.ts";

function getMenuItemAdminMoveMenuItemUrl(id: MenuItemAdminMoveMenuItemPathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/menu-items/${id}/move` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id/move}
 */
export async function menuItemAdminMoveMenuItem(
  id: MenuItemAdminMoveMenuItemPathId,
  data?: MenuItemAdminMoveMenuItemData,
  config: Partial<RequestConfig<MenuItemAdminMoveMenuItemData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    MenuItemAdminMoveMenuItemStatus200 | MenuItemAdminMoveMenuItemStatus204,
    ResponseErrorConfig<
      | MenuItemAdminMoveMenuItemStatus400
      | MenuItemAdminMoveMenuItemStatus401
      | MenuItemAdminMoveMenuItemStatus403
      | MenuItemAdminMoveMenuItemStatus404
      | MenuItemAdminMoveMenuItemStatus500
      | MenuItemAdminMoveMenuItemStatus501
    >,
    MenuItemAdminMoveMenuItemData
  >({
    method: "PUT",
    url: getMenuItemAdminMoveMenuItemUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
