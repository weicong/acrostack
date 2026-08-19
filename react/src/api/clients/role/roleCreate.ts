/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { RoleCreateOptions, RoleCreateResponses } from "../../models/role/RoleCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/roles}
 */
export function roleCreate<ThrowOnError extends boolean = true>(
  options: Options<RoleCreateOptions, ThrowOnError>,
): Promise<RequestResult<RoleCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/identity/roles",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<RoleCreateResponses, ThrowOnError>>;
}
