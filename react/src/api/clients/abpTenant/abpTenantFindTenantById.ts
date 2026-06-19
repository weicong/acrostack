/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AbpTenantFindTenantByIdPathId,
  AbpTenantFindTenantByIdStatus200,
  AbpTenantFindTenantByIdStatus400,
  AbpTenantFindTenantByIdStatus401,
  AbpTenantFindTenantByIdStatus403,
  AbpTenantFindTenantByIdStatus404,
  AbpTenantFindTenantByIdStatus500,
  AbpTenantFindTenantByIdStatus501,
} from "../../models/abpTenant/AbpTenantFindTenantById.ts";

function getAbpTenantFindTenantByIdUrl(id: AbpTenantFindTenantByIdPathId) {
  const res = { method: "GET", url: `/api/abp/multi-tenancy/tenants/by-id/${id}` as const };

  return res;
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-id/:id}
 */
export async function abpTenantFindTenantById(
  id: AbpTenantFindTenantByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AbpTenantFindTenantByIdStatus200,
    ResponseErrorConfig<
      | AbpTenantFindTenantByIdStatus400
      | AbpTenantFindTenantByIdStatus401
      | AbpTenantFindTenantByIdStatus403
      | AbpTenantFindTenantByIdStatus404
      | AbpTenantFindTenantByIdStatus500
      | AbpTenantFindTenantByIdStatus501
    >,
    unknown
  >({ method: "GET", url: getAbpTenantFindTenantByIdUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
