/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  MenuItemAdminGetPageLookupQueryFilter,
  MenuItemAdminGetPageLookupQueryStatus,
  MenuItemAdminGetPageLookupQuerySorting,
  MenuItemAdminGetPageLookupQuerySkipCount,
  MenuItemAdminGetPageLookupQueryMaxResultCount,
  MenuItemAdminGetPageLookupStatus200,
  MenuItemAdminGetPageLookupStatus400,
  MenuItemAdminGetPageLookupStatus401,
  MenuItemAdminGetPageLookupStatus403,
  MenuItemAdminGetPageLookupStatus404,
  MenuItemAdminGetPageLookupStatus500,
  MenuItemAdminGetPageLookupStatus501,
} from "../../models/menuItemAdmin/MenuItemAdminGetPageLookup.ts";

function getMenuItemAdminGetPageLookupUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/menu-items/lookup/pages` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/menu-items/lookup/pages}
 */
export async function menuItemAdminGetPageLookup(
  params?: {
    Filter?: MenuItemAdminGetPageLookupQueryFilter;
    Status?: MenuItemAdminGetPageLookupQueryStatus;
    Sorting?: MenuItemAdminGetPageLookupQuerySorting;
    SkipCount?: MenuItemAdminGetPageLookupQuerySkipCount;
    MaxResultCount?: MenuItemAdminGetPageLookupQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    MenuItemAdminGetPageLookupStatus200,
    ResponseErrorConfig<
      | MenuItemAdminGetPageLookupStatus400
      | MenuItemAdminGetPageLookupStatus401
      | MenuItemAdminGetPageLookupStatus403
      | MenuItemAdminGetPageLookupStatus404
      | MenuItemAdminGetPageLookupStatus500
      | MenuItemAdminGetPageLookupStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getMenuItemAdminGetPageLookupUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
