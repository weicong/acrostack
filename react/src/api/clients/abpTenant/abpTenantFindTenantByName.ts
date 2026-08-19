/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  AbpTenantFindTenantByNameOptions,
  AbpTenantFindTenantByNameResponses,
} from "../../models/abpTenant/AbpTenantFindTenantByName";
import { client } from "../../.kubb/client";

/**
 * {@link /api/abp/multi-tenancy/tenants/by-name/:name}
 */
export function abpTenantFindTenantByName<ThrowOnError extends boolean = true>(
  options: Options<AbpTenantFindTenantByNameOptions, ThrowOnError>,
): Promise<RequestResult<AbpTenantFindTenantByNameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/abp/multi-tenancy/tenants/by-name/{name}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<AbpTenantFindTenantByNameResponses, ThrowOnError>>;
}
