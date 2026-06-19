/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantCreateData,
  TenantCreateStatus200,
  TenantCreateStatus400,
  TenantCreateStatus401,
  TenantCreateStatus403,
  TenantCreateStatus404,
  TenantCreateStatus500,
  TenantCreateStatus501,
} from "../../models/tenant/TenantCreate.ts";

function getTenantCreateUrl() {
  const res = { method: "POST", url: `/api/multi-tenancy/tenants` as const };

  return res;
}

/**
 * {@link /api/multi-tenancy/tenants}
 */
export async function tenantCreate(
  data?: TenantCreateData,
  config: Partial<RequestConfig<TenantCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    TenantCreateStatus200,
    ResponseErrorConfig<
      | TenantCreateStatus400
      | TenantCreateStatus401
      | TenantCreateStatus403
      | TenantCreateStatus404
      | TenantCreateStatus500
      | TenantCreateStatus501
    >,
    TenantCreateData
  >({
    method: "POST",
    url: getTenantCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
