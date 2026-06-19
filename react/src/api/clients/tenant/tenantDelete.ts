/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantDeletePathId,
  TenantDeleteStatus200,
  TenantDeleteStatus204,
  TenantDeleteStatus400,
  TenantDeleteStatus401,
  TenantDeleteStatus403,
  TenantDeleteStatus404,
  TenantDeleteStatus500,
  TenantDeleteStatus501,
} from "../../models/tenant/TenantDelete.ts";

function getTenantDeleteUrl(id: TenantDeletePathId) {
  const res = { method: "DELETE", url: `/api/multi-tenancy/tenants/${id}` as const };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export async function tenantDelete(
  id: TenantDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantDeleteStatus200 | TenantDeleteStatus204,
    ResponseErrorConfig<
      | TenantDeleteStatus400
      | TenantDeleteStatus401
      | TenantDeleteStatus403
      | TenantDeleteStatus404
      | TenantDeleteStatus500
      | TenantDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getTenantDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
