/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { TenantDeleteOptions, TenantDeleteResponses } from "../../models/tenant/TenantDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function tenantDelete<ThrowOnError extends boolean = true>(
  options: Options<TenantDeleteOptions, ThrowOnError>,
): Promise<RequestResult<TenantDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/multi-tenancy/tenants/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TenantDeleteResponses, ThrowOnError>>;
}
