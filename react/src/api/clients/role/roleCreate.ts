/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { RoleCreateOptions, RoleCreateResponses } from "../../models/role/RoleCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/roles}
 */
export function roleCreate<ThrowOnError extends boolean = true>(
  options: Options<RoleCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<RoleCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/identity/roles",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RoleCreateResponses, ThrowOnError>>,
  );
}
