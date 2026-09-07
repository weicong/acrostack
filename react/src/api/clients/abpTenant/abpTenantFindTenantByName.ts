/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AbpTenantFindTenantByNameOptions,
  AbpTenantFindTenantByNameResponses,
} from "../../models/abpTenant/AbpTenantFindTenantByName";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/abp/multi-tenancy/tenants/by-name/:name}
 */
export function abpTenantFindTenantByName<ThrowOnError extends boolean = true>(
  options: Options<AbpTenantFindTenantByNameOptions, ThrowOnError>,
): Unwrappable<RequestResult<AbpTenantFindTenantByNameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/abp/multi-tenancy/tenants/by-name/{name}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AbpTenantFindTenantByNameResponses, ThrowOnError>>,
  );
}
