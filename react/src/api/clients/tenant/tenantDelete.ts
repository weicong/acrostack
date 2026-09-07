/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { TenantDeleteOptions, TenantDeleteResponses } from "../../models/tenant/TenantDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function tenantDelete<ThrowOnError extends boolean = true>(
  options: Options<TenantDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<TenantDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/multi-tenancy/tenants/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantDeleteResponses, ThrowOnError>>,
  );
}
