/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminGetPathId,
  MenuItemAdminGetStatus200,
  MenuItemAdminGetStatus400,
  MenuItemAdminGetStatus401,
  MenuItemAdminGetStatus403,
  MenuItemAdminGetStatus404,
  MenuItemAdminGetStatus500,
  MenuItemAdminGetStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGet.ts";

function getMenuItemAdminGetUrl(id: MenuItemAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/menu-items/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export async function menuItemAdminGet(
  id: MenuItemAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminGetStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetStatus400
      | MenuItemAdminGetStatus401
      | MenuItemAdminGetStatus403
      | MenuItemAdminGetStatus404
      | MenuItemAdminGetStatus500
      | MenuItemAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuItemAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
