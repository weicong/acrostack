/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TenantGetDefaultConnectionStringOptions,
  TenantGetDefaultConnectionStringResponses,
} from "../../models/tenant/TenantGetDefaultConnectionString";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function tenantGetDefaultConnectionString<ThrowOnError extends boolean = true>(
  options: Options<TenantGetDefaultConnectionStringOptions, ThrowOnError>,
): Unwrappable<RequestResult<TenantGetDefaultConnectionStringResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/multi-tenancy/tenants/{id}/default-connection-string",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantGetDefaultConnectionStringResponses, ThrowOnError>>,
  );
}
