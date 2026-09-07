/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  TenantGetListOptions,
  TenantGetListResponses,
} from "../../models/tenant/TenantGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function tenantGetList<ThrowOnError extends boolean = true>(
  options: Options<TenantGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<TenantGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/multi-tenancy/tenants",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<TenantGetListResponses, ThrowOnError>>,
  );
}
