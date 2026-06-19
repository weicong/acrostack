/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantGetListQueryFilter,
  TenantGetListQuerySorting,
  TenantGetListQuerySkipCount,
  TenantGetListQueryMaxResultCount,
  TenantGetListStatus200,
  TenantGetListStatus400,
  TenantGetListStatus401,
  TenantGetListStatus403,
  TenantGetListStatus404,
  TenantGetListStatus500,
  TenantGetListStatus501,
} from "../../models/tenant/TenantGetList.ts";

function getTenantGetListUrl() {
  const res = { method: "GET", url: `/api/multi-tenancy/tenants` as const };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants}
 */
export async function tenantGetList(
  params?: {
    Filter?: TenantGetListQueryFilter;
    Sorting?: TenantGetListQuerySorting;
    SkipCount?: TenantGetListQuerySkipCount;
    MaxResultCount?: TenantGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantGetListStatus200,
    ResponseErrorConfig<
      | TenantGetListStatus400
      | TenantGetListStatus401
      | TenantGetListStatus403
      | TenantGetListStatus404
      | TenantGetListStatus500
      | TenantGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getTenantGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
