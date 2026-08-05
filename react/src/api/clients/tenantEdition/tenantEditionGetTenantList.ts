/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantEditionGetTenantListQueryFilter,
  TenantEditionGetTenantListQueryEditionId,
  TenantEditionGetTenantListQuerySorting,
  TenantEditionGetTenantListQuerySkipCount,
  TenantEditionGetTenantListQueryMaxResultCount,
  TenantEditionGetTenantListStatus200,
  TenantEditionGetTenantListStatus400,
  TenantEditionGetTenantListStatus401,
  TenantEditionGetTenantListStatus403,
  TenantEditionGetTenantListStatus404,
  TenantEditionGetTenantListStatus500,
  TenantEditionGetTenantListStatus501,
} from "../../models/tenantEdition/TenantEditionGetTenantList.ts";

function getTenantEditionGetTenantListUrl() {
  const res = { method: "GET", url: `/api/app/tenant-edition/tenant-list` as const };

  return res;
}

/**
 * {@link /api/app/tenant-edition/tenant-list}
 */
export async function tenantEditionGetTenantList(
  params?: {
    Filter?: TenantEditionGetTenantListQueryFilter;
    EditionId?: TenantEditionGetTenantListQueryEditionId;
    Sorting?: TenantEditionGetTenantListQuerySorting;
    SkipCount?: TenantEditionGetTenantListQuerySkipCount;
    MaxResultCount?: TenantEditionGetTenantListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantEditionGetTenantListStatus200,
    ResponseErrorConfig<
      | TenantEditionGetTenantListStatus400
      | TenantEditionGetTenantListStatus401
      | TenantEditionGetTenantListStatus403
      | TenantEditionGetTenantListStatus404
      | TenantEditionGetTenantListStatus500
      | TenantEditionGetTenantListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getTenantEditionGetTenantListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
