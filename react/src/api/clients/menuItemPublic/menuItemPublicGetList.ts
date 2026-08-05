/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemPublicGetListStatus200,
  MenuItemPublicGetListStatus400,
  MenuItemPublicGetListStatus401,
  MenuItemPublicGetListStatus403,
  MenuItemPublicGetListStatus404,
  MenuItemPublicGetListStatus500,
  MenuItemPublicGetListStatus501,
} from "../../models/menuItemPublic/MenuItemPublicGetList.ts";

function getMenuItemPublicGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/menu-items` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/menu-items}
 */
export async function menuItemPublicGetList(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemPublicGetListStatus200,
    ResponseErrorConfig<
      | MenuItemPublicGetListStatus400
      | MenuItemPublicGetListStatus401
      | MenuItemPublicGetListStatus403
      | MenuItemPublicGetListStatus404
      | MenuItemPublicGetListStatus500
      | MenuItemPublicGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getMenuItemPublicGetListUrl().url.toString(), ...requestConfig });

  return res.data;
}
