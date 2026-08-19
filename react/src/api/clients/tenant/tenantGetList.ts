/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  TenantGetListOptions,
  TenantGetListResponses,
} from "../../models/tenant/TenantGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function tenantGetList<ThrowOnError extends boolean = true>(
  options: Options<TenantGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<TenantGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/multi-tenancy/tenants",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<TenantGetListResponses, ThrowOnError>>;
}
