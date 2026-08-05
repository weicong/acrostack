/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantEditionAssignEditionPathTenantId,
  TenantEditionAssignEditionData,
  TenantEditionAssignEditionStatus200,
  TenantEditionAssignEditionStatus204,
  TenantEditionAssignEditionStatus400,
  TenantEditionAssignEditionStatus401,
  TenantEditionAssignEditionStatus403,
  TenantEditionAssignEditionStatus404,
  TenantEditionAssignEditionStatus500,
  TenantEditionAssignEditionStatus501,
} from "../../models/tenantEdition/TenantEditionAssignEdition.ts";

function getTenantEditionAssignEditionUrl(tenantId: TenantEditionAssignEditionPathTenantId) {
  const res = {
    method: "POST",
    url: `/api/app/tenant-edition/assign-edition/${tenantId}` as const,
  };

  return res;
}

/**
 * {@link /api/app/tenant-edition/assign-edition/:tenantId}
 */
export async function tenantEditionAssignEdition(
  tenantId: TenantEditionAssignEditionPathTenantId,
  data?: TenantEditionAssignEditionData,
  config: Partial<RequestConfig<TenantEditionAssignEditionData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    TenantEditionAssignEditionStatus200 | TenantEditionAssignEditionStatus204,
    ResponseErrorConfig<
      | TenantEditionAssignEditionStatus400
      | TenantEditionAssignEditionStatus401
      | TenantEditionAssignEditionStatus403
      | TenantEditionAssignEditionStatus404
      | TenantEditionAssignEditionStatus500
      | TenantEditionAssignEditionStatus501
    >,
    TenantEditionAssignEditionData
  >({
    method: "POST",
    url: getTenantEditionAssignEditionUrl(tenantId).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
