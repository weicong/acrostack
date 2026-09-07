/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  UserUpdateRolesOptions,
  UserUpdateRolesResponses,
} from "../../models/user/UserUpdateRoles";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/:id/roles}
 */
export function userUpdateRoles<ThrowOnError extends boolean = true>(
  options: Options<UserUpdateRolesOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserUpdateRolesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/identity/users/{id}/roles",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserUpdateRolesResponses, ThrowOnError>>,
  );
}
