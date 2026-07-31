/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemDeletePathId,
  MenuItemDeleteStatus200,
  MenuItemDeleteStatus204,
  MenuItemDeleteStatus400,
  MenuItemDeleteStatus401,
  MenuItemDeleteStatus403,
  MenuItemDeleteStatus404,
  MenuItemDeleteStatus500,
  MenuItemDeleteStatus501,
} from "../../models/menuItem/MenuItemDelete.ts";

function getMenuItemDeleteUrl(id: MenuItemDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/menu-item/${id}` as const };

  return res;
}

/**
 * {@link /api/app/menu-item/:id}
 */
export async function menuItemDelete(
  id: MenuItemDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemDeleteStatus200 | MenuItemDeleteStatus204,
    ResponseErrorConfig<
      | MenuItemDeleteStatus400
      | MenuItemDeleteStatus401
      | MenuItemDeleteStatus403
      | MenuItemDeleteStatus404
      | MenuItemDeleteStatus500
      | MenuItemDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getMenuItemDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
