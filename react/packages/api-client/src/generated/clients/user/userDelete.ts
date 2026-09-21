/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { UserDeleteOptions, UserDeleteResponses } from "../../models/user/UserDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/:id}
 */
export function userDelete<ThrowOnError extends boolean = true>(
  options: Options<UserDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/identity/users/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserDeleteResponses, ThrowOnError>>,
  );
}
