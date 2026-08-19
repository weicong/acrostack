/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TenantDeleteDefaultConnectionStringOptions,
  TenantDeleteDefaultConnectionStringResponses,
} from "../../models/tenant/TenantDeleteDefaultConnectionString";
import { client } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function tenantDeleteDefaultConnectionString<ThrowOnError extends boolean = true>(
  options: Options<TenantDeleteDefaultConnectionStringOptions, ThrowOnError>,
): Promise<RequestResult<TenantDeleteDefaultConnectionStringResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/multi-tenancy/tenants/{id}/default-connection-string",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TenantDeleteDefaultConnectionStringResponses, ThrowOnError>>;
}
