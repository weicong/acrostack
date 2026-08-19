/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { TenantUpdateOptions, TenantUpdateResponses } from "../../models/tenant/TenantUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function tenantUpdate<ThrowOnError extends boolean = true>(
  options: Options<TenantUpdateOptions, ThrowOnError>,
): Promise<RequestResult<TenantUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/multi-tenancy/tenants/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TenantUpdateResponses, ThrowOnError>>;
}
