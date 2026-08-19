/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { RoleUpdateOptions, RoleUpdateResponses } from "../../models/role/RoleUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/roles/:id}
 */
export function roleUpdate<ThrowOnError extends boolean = true>(
  options: Options<RoleUpdateOptions, ThrowOnError>,
): Promise<RequestResult<RoleUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/identity/roles/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<RoleUpdateResponses, ThrowOnError>>;
}
