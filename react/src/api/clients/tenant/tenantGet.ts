/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantGetPathId,
  TenantGetStatus200,
  TenantGetStatus400,
  TenantGetStatus401,
  TenantGetStatus403,
  TenantGetStatus404,
  TenantGetStatus500,
  TenantGetStatus501,
} from "../../models/tenant/TenantGet.ts";

function getTenantGetUrl(id: TenantGetPathId) {
  const res = { method: "GET", url: `/api/multi-tenancy/tenants/${id}` as const };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export async function tenantGet(
  id: TenantGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantGetStatus200,
    ResponseErrorConfig<
      | TenantGetStatus400
      | TenantGetStatus401
      | TenantGetStatus403
      | TenantGetStatus404
      | TenantGetStatus500
      | TenantGetStatus501
    >,
    unknown
  >({ method: "GET", url: getTenantGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
