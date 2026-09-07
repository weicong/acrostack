/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TenantDeleteDefaultConnectionStringOptions,
  TenantDeleteDefaultConnectionStringResponses,
} from "../../models/tenant/TenantDeleteDefaultConnectionString";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function tenantDeleteDefaultConnectionString<ThrowOnError extends boolean = true>(
  options: Options<TenantDeleteDefaultConnectionStringOptions, ThrowOnError>,
): Unwrappable<RequestResult<TenantDeleteDefaultConnectionStringResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/multi-tenancy/tenants/{id}/default-connection-string",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantDeleteDefaultConnectionStringResponses, ThrowOnError>>,
  );
}
