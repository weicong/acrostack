/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { UserGetListOptions, UserGetListResponses } from "../../models/user/UserGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/users}
 */
export function userGetList<ThrowOnError extends boolean = true>(
  options: Options<UserGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<UserGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/identity/users",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<UserGetListResponses, ThrowOnError>>;
}
