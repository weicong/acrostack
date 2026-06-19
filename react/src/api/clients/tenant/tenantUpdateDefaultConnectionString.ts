/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantUpdateDefaultConnectionStringPathId,
  TenantUpdateDefaultConnectionStringQueryDefaultConnectionString,
  TenantUpdateDefaultConnectionStringStatus200,
  TenantUpdateDefaultConnectionStringStatus204,
  TenantUpdateDefaultConnectionStringStatus400,
  TenantUpdateDefaultConnectionStringStatus401,
  TenantUpdateDefaultConnectionStringStatus403,
  TenantUpdateDefaultConnectionStringStatus404,
  TenantUpdateDefaultConnectionStringStatus500,
  TenantUpdateDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantUpdateDefaultConnectionString.ts";

function getTenantUpdateDefaultConnectionStringUrl(id: TenantUpdateDefaultConnectionStringPathId) {
  const res = {
    method: "PUT",
    url: `/api/multi-tenancy/tenants/${id}/default-connection-string` as const,
  };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export async function tenantUpdateDefaultConnectionString(
  id: TenantUpdateDefaultConnectionStringPathId,
  params?: {
    defaultConnectionString?: TenantUpdateDefaultConnectionStringQueryDefaultConnectionString;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantUpdateDefaultConnectionStringStatus200 | TenantUpdateDefaultConnectionStringStatus204,
    ResponseErrorConfig<
      | TenantUpdateDefaultConnectionStringStatus400
      | TenantUpdateDefaultConnectionStringStatus401
      | TenantUpdateDefaultConnectionStringStatus403
      | TenantUpdateDefaultConnectionStringStatus404
      | TenantUpdateDefaultConnectionStringStatus500
      | TenantUpdateDefaultConnectionStringStatus501
    >,
    unknown
  >({
    method: "PUT",
    url: getTenantUpdateDefaultConnectionStringUrl(id).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
