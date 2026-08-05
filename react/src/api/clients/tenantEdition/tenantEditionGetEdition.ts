/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TenantEditionGetEditionPathTenantId,
  TenantEditionGetEditionStatus200,
  TenantEditionGetEditionStatus400,
  TenantEditionGetEditionStatus401,
  TenantEditionGetEditionStatus403,
  TenantEditionGetEditionStatus404,
  TenantEditionGetEditionStatus500,
  TenantEditionGetEditionStatus501,
} from "../../models/tenantEdition/TenantEditionGetEdition.ts";

function getTenantEditionGetEditionUrl(tenantId: TenantEditionGetEditionPathTenantId) {
  const res = { method: "GET", url: `/api/app/tenant-edition/edition/${tenantId}` as const };

  return res;
}

/**
 * {@link /api/app/tenant-edition/edition/:tenantId}
 */
export async function tenantEditionGetEdition(
  tenantId: TenantEditionGetEditionPathTenantId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TenantEditionGetEditionStatus200,
    ResponseErrorConfig<
      | TenantEditionGetEditionStatus400
      | TenantEditionGetEditionStatus401
      | TenantEditionGetEditionStatus403
      | TenantEditionGetEditionStatus404
      | TenantEditionGetEditionStatus500
      | TenantEditionGetEditionStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getTenantEditionGetEditionUrl(tenantId).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
