/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminGetPermissionLookupQueryFilter,
  MenuItemAdminGetPermissionLookupStatus200,
  MenuItemAdminGetPermissionLookupStatus400,
  MenuItemAdminGetPermissionLookupStatus401,
  MenuItemAdminGetPermissionLookupStatus403,
  MenuItemAdminGetPermissionLookupStatus404,
  MenuItemAdminGetPermissionLookupStatus500,
  MenuItemAdminGetPermissionLookupStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetPermissionLookup.ts";

function getMenuItemAdminGetPermissionLookupUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/menu-items/lookup/permissions` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/permissions}
 */
export async function menuItemAdminGetPermissionLookup(
  params?: { Filter?: MenuItemAdminGetPermissionLookupQueryFilter },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminGetPermissionLookupStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetPermissionLookupStatus400
      | MenuItemAdminGetPermissionLookupStatus401
      | MenuItemAdminGetPermissionLookupStatus403
      | MenuItemAdminGetPermissionLookupStatus404
      | MenuItemAdminGetPermissionLookupStatus500
      | MenuItemAdminGetPermissionLookupStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getMenuItemAdminGetPermissionLookupUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
