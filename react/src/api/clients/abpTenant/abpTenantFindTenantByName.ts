/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  AbpTenantFindTenantByNamePathName,
  AbpTenantFindTenantByNameStatus200,
  AbpTenantFindTenantByNameStatus400,
  AbpTenantFindTenantByNameStatus401,
  AbpTenantFindTenantByNameStatus403,
  AbpTenantFindTenantByNameStatus404,
  AbpTenantFindTenantByNameStatus500,
  AbpTenantFindTenantByNameStatus501,
} from "../../models/abpTenant/AbpTenantFindTenantByName.ts";

function getAbpTenantFindTenantByNameUrl(name: AbpTenantFindTenantByNamePathName) {
  const res = { method: "GET", url: `/api/abp/multi-tenancy/tenants/by-name/${name}` as const };

  return res;
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-name/:name}
 */
export async function abpTenantFindTenantByName(
  name: AbpTenantFindTenantByNamePathName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AbpTenantFindTenantByNameStatus200,
    ResponseErrorConfig<
      | AbpTenantFindTenantByNameStatus400
      | AbpTenantFindTenantByNameStatus401
      | AbpTenantFindTenantByNameStatus403
      | AbpTenantFindTenantByNameStatus404
      | AbpTenantFindTenantByNameStatus500
      | AbpTenantFindTenantByNameStatus501
    >,
    unknown
  >({ method: "GET", url: getAbpTenantFindTenantByNameUrl(name).url.toString(), ...requestConfig });

  return res.data;
}
