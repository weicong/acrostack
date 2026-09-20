/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { UserGetRolesOptions, UserGetRolesResponses } from "../../models/user/UserGetRoles";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/:id/roles}
 */
export function userGetRoles<ThrowOnError extends boolean = true>(
  options: Options<UserGetRolesOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserGetRolesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/{id}/roles",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserGetRolesResponses, ThrowOnError>>,
  );
}
