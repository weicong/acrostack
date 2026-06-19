/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantDeleteDefaultConnectionStringPathId,
  TenantDeleteDefaultConnectionStringStatus200,
  TenantDeleteDefaultConnectionStringStatus204,
  TenantDeleteDefaultConnectionStringStatus400,
  TenantDeleteDefaultConnectionStringStatus401,
  TenantDeleteDefaultConnectionStringStatus403,
  TenantDeleteDefaultConnectionStringStatus404,
  TenantDeleteDefaultConnectionStringStatus500,
  TenantDeleteDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantDeleteDefaultConnectionString.ts";

function getTenantDeleteDefaultConnectionStringUrl(id: TenantDeleteDefaultConnectionStringPathId) {
  const res = {
    method: "DELETE",
    url: `/api/multi-tenancy/tenants/${id}/default-connection-string` as const,
  };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export async function tenantDeleteDefaultConnectionString(
  id: TenantDeleteDefaultConnectionStringPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantDeleteDefaultConnectionStringStatus200 | TenantDeleteDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantDeleteDefaultConnectionStringStatus400
      | TenantDeleteDefaultConnectionStringStatus401
      | TenantDeleteDefaultConnectionStringStatus403
      | TenantDeleteDefaultConnectionStringStatus404
      | TenantDeleteDefaultConnectionStringStatus500
      | TenantDeleteDefaultConnectionStringStatus501
    >,
    unknown
  >({
    method: "DELETE",
    url: getTenantDeleteDefaultConnectionStringUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
