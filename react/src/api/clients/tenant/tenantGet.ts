/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { TenantGetOptions, TenantGetResponses } from "../../models/tenant/TenantGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function tenantGet<ThrowOnError extends boolean = true>(
  options: Options<TenantGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<TenantGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/multi-tenancy/tenants/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantGetResponses, ThrowOnError>>,
  );
}
