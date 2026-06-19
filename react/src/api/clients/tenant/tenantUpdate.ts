/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantUpdatePathId,
  TenantUpdateData,
  TenantUpdateStatus200,
  TenantUpdateStatus400,
  TenantUpdateStatus401,
  TenantUpdateStatus403,
  TenantUpdateStatus404,
  TenantUpdateStatus500,
  TenantUpdateStatus501,
} from "../../models/tenant/TenantUpdate.ts";

function getTenantUpdateUrl(id: TenantUpdatePathId) {
  const res = { method: "PUT", url: `/api/multi-tenancy/tenants/${id}` as const };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export async function tenantUpdate(
  id: TenantUpdatePathId,
  data?: TenantUpdateData,
  config: Partial<RequestConfig<TenantUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    TenantUpdateStatus200,
    ResponseErrorConfig<
      | TenantUpdateStatus400
      | TenantUpdateStatus401
      | TenantUpdateStatus403
      | TenantUpdateStatus404
      | TenantUpdateStatus500
      | TenantUpdateStatus501
    >,
    TenantUpdateData
  >({
    method: "PUT",
    url: getTenantUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
