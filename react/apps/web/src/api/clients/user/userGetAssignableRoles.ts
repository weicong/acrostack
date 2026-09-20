/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  UserGetAssignableRolesOptions,
  UserGetAssignableRolesResponses,
} from "../../models/user/UserGetAssignableRoles";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/assignable-roles}
 */
export function userGetAssignableRoles<ThrowOnError extends boolean = true>(
  options: Options<UserGetAssignableRolesOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<UserGetAssignableRolesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/assignable-roles",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserGetAssignableRolesResponses, ThrowOnError>>,
  );
}
