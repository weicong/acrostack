/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  RoleGetListQueryFilter,
  RoleGetListQuerySorting,
  RoleGetListQuerySkipCount,
  RoleGetListQueryMaxResultCount,
  RoleGetListQueryExtraProperties,
  RoleGetListStatus200,
  RoleGetListStatus400,
  RoleGetListStatus401,
  RoleGetListStatus403,
  RoleGetListStatus404,
  RoleGetListStatus500,
  RoleGetListStatus501,
} from "../../models/role/RoleGetList.ts";

function getRoleGetListUrl() {
  const res = { method: "GET", url: `/api/identity/roles` as const };

  return res;
}

/**
 * {@link /api/identity/roles}
 */
export async function roleGetList(
  params?: {
    Filter?: RoleGetListQueryFilter;
    Sorting?: RoleGetListQuerySorting;
    SkipCount?: RoleGetListQuerySkipCount;
    MaxResultCount?: RoleGetListQueryMaxResultCount;
    ExtraProperties?: RoleGetListQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    RoleGetListStatus200,
    ResponseErrorConfig<
      | RoleGetListStatus400
      | RoleGetListStatus401
      | RoleGetListStatus403
      | RoleGetListStatus404
      | RoleGetListStatus500
      | RoleGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getRoleGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
