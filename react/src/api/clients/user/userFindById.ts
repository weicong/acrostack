/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type { UserFindByIdOptions, UserFindByIdResponses } from "../../models/user/UserFindById";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/users/by-id/:id}
 */
export function userFindById<ThrowOnError extends boolean = true>(
  options: Options<UserFindByIdOptions, ThrowOnError>,
): Promise<RequestResult<UserFindByIdResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/identity/users/by-id/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<UserFindByIdResponses, ThrowOnError>>;
}
