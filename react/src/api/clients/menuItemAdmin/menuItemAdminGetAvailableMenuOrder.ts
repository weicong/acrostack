/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminGetAvailableMenuOrderQueryParentId,
  MenuItemAdminGetAvailableMenuOrderStatus200,
  MenuItemAdminGetAvailableMenuOrderStatus400,
  MenuItemAdminGetAvailableMenuOrderStatus401,
  MenuItemAdminGetAvailableMenuOrderStatus403,
  MenuItemAdminGetAvailableMenuOrderStatus404,
  MenuItemAdminGetAvailableMenuOrderStatus500,
  MenuItemAdminGetAvailableMenuOrderStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetAvailableMenuOrder.ts";

function getMenuItemAdminGetAvailableMenuOrderUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/menu-items/available-order` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/available-order}
 */
export async function menuItemAdminGetAvailableMenuOrder(
  params?: { parentId?: MenuItemAdminGetAvailableMenuOrderQueryParentId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminGetAvailableMenuOrderStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetAvailableMenuOrderStatus400
      | MenuItemAdminGetAvailableMenuOrderStatus401
      | MenuItemAdminGetAvailableMenuOrderStatus403
      | MenuItemAdminGetAvailableMenuOrderStatus404
      | MenuItemAdminGetAvailableMenuOrderStatus500
      | MenuItemAdminGetAvailableMenuOrderStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getMenuItemAdminGetAvailableMenuOrderUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
