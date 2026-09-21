/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { RoleDeleteOptions, RoleDeleteResponses } from "../../models/role/RoleDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/roles/:id}
 */
export function roleDelete<ThrowOnError extends boolean = true>(
  options: Options<RoleDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<RoleDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/identity/roles/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RoleDeleteResponses, ThrowOnError>>,
  );
}
