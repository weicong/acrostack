/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { UserGetOptions, UserGetResponses } from "../../models/user/UserGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/:id}
 */
export function userGet<ThrowOnError extends boolean = true>(
  options: Options<UserGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserGetResponses, ThrowOnError>>,
  );
}
