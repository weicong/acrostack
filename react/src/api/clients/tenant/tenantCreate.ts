/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { TenantCreateOptions, TenantCreateResponses } from "../../models/tenant/TenantCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function tenantCreate<ThrowOnError extends boolean = true>(
  options: Options<TenantCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<TenantCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/multi-tenancy/tenants",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantCreateResponses, ThrowOnError>>,
  );
}
