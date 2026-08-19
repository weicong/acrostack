/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { UserUpdateOptions, UserUpdateResponses } from "../../models/user/UserUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/users/:id}
 */
export function userUpdate<ThrowOnError extends boolean = true>(
  options: Options<UserUpdateOptions, ThrowOnError>,
): Promise<RequestResult<UserUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/identity/users/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<UserUpdateResponses, ThrowOnError>>;
}
