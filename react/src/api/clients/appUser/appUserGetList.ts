/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AppUserGetListQueryFilter,
  AppUserGetListQuerySorting,
  AppUserGetListQuerySkipCount,
  AppUserGetListQueryMaxResultCount,
  AppUserGetListStatus200,
  AppUserGetListStatus400,
  AppUserGetListStatus401,
  AppUserGetListStatus403,
  AppUserGetListStatus404,
  AppUserGetListStatus500,
  AppUserGetListStatus501,
} from "../../models/appUser/AppUserGetList.ts";

function getAppUserGetListUrl() {
  const res = { method: "GET", url: `/api/app/app-user` as const };

  return res;
}

/**
 * {@link /api/app/app-user}
 */
export async function appUserGetList(
  params?: {
    Filter?: AppUserGetListQueryFilter;
    Sorting?: AppUserGetListQuerySorting;
    SkipCount?: AppUserGetListQuerySkipCount;
    MaxResultCount?: AppUserGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AppUserGetListStatus200,
    ResponseErrorConfig<
      | AppUserGetListStatus400
      | AppUserGetListStatus401
      | AppUserGetListStatus403
      | AppUserGetListStatus404
      | AppUserGetListStatus500
      | AppUserGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getAppUserGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
