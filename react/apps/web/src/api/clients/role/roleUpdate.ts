/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { RoleUpdateOptions, RoleUpdateResponses } from "../../models/role/RoleUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/roles/:id}
 */
export function roleUpdate<ThrowOnError extends boolean = true>(
  options: Options<RoleUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<RoleUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/identity/roles/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RoleUpdateResponses, ThrowOnError>>,
  );
}
