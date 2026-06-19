/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserGetListQueryFilter,
  UserGetListQuerySorting,
  UserGetListQuerySkipCount,
  UserGetListQueryMaxResultCount,
  UserGetListQueryExtraProperties,
  UserGetListStatus200,
  UserGetListStatus400,
  UserGetListStatus401,
  UserGetListStatus403,
  UserGetListStatus404,
  UserGetListStatus500,
  UserGetListStatus501,
} from "../../models/user/UserGetList.ts";

function getUserGetListUrl() {
  const res = { method: "GET", url: `/api/identity/users` as const };

  return res;
}

/**
 * {@link /api/identity/users}
 */
export async function userGetList(
  params?: {
    Filter?: UserGetListQueryFilter;
    Sorting?: UserGetListQuerySorting;
    SkipCount?: UserGetListQuerySkipCount;
    MaxResultCount?: UserGetListQueryMaxResultCount;
    ExtraProperties?: UserGetListQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserGetListStatus200,
    ResponseErrorConfig<
      | UserGetListStatus400
      | UserGetListStatus401
      | UserGetListStatus403
      | UserGetListStatus404
      | UserGetListStatus500
      | UserGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getUserGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
