/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantGetDefaultConnectionStringPathId,
  TenantGetDefaultConnectionStringStatus200,
  TenantGetDefaultConnectionStringStatus400,
  TenantGetDefaultConnectionStringStatus401,
  TenantGetDefaultConnectionStringStatus403,
  TenantGetDefaultConnectionStringStatus404,
  TenantGetDefaultConnectionStringStatus500,
  TenantGetDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantGetDefaultConnectionString.ts";

function getTenantGetDefaultConnectionStringUrl(id: TenantGetDefaultConnectionStringPathId) {
  const res = {
    method: "GET",
    url: `/api/multi-tenancy/tenants/${id}/default-connection-string` as const,
  };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export async function tenantGetDefaultConnectionString(
  id: TenantGetDefaultConnectionStringPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantGetDefaultConnectionStringStatus200,
    ResponseErrorConfig<
      | TenantGetDefaultConnectionStringStatus400
      | TenantGetDefaultConnectionStringStatus401
      | TenantGetDefaultConnectionStringStatus403
      | TenantGetDefaultConnectionStringStatus404
      | TenantGetDefaultConnectionStringStatus500
      | TenantGetDefaultConnectionStringStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getTenantGetDefaultConnectionStringUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
