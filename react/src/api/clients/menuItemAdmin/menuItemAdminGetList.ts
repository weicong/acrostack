/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminGetListStatus200,
  MenuItemAdminGetListStatus400,
  MenuItemAdminGetListStatus401,
  MenuItemAdminGetListStatus403,
  MenuItemAdminGetListStatus404,
  MenuItemAdminGetListStatus500,
  MenuItemAdminGetListStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetList.ts";

function getMenuItemAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/menu-items` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items}
 */
export async function menuItemAdminGetList(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminGetListStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetListStatus400
      | MenuItemAdminGetListStatus401
      | MenuItemAdminGetListStatus403
      | MenuItemAdminGetListStatus404
      | MenuItemAdminGetListStatus500
      | MenuItemAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuItemAdminGetListUrl().url.toString(), ...requestConfig });

  return res.data;
}
