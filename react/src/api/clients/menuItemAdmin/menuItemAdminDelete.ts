/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminDeletePathId,
  MenuItemAdminDeleteStatus200,
  MenuItemAdminDeleteStatus204,
  MenuItemAdminDeleteStatus400,
  MenuItemAdminDeleteStatus401,
  MenuItemAdminDeleteStatus403,
  MenuItemAdminDeleteStatus404,
  MenuItemAdminDeleteStatus500,
  MenuItemAdminDeleteStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminDelete.ts";

function getMenuItemAdminDeleteUrl(id: MenuItemAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/menu-items/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/:id}
 */
export async function menuItemAdminDelete(
  id: MenuItemAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminDeleteStatus200 | MenuItemAdminDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemAdminDeleteStatus400
      | MenuItemAdminDeleteStatus401
      | MenuItemAdminDeleteStatus403
      | MenuItemAdminDeleteStatus404
      | MenuItemAdminDeleteStatus500
      | MenuItemAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getMenuItemAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
