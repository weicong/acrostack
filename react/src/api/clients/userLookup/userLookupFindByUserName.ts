/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  UserLookupFindByUserNameOptions,
  UserLookupFindByUserNameResponses,
} from "../../models/userLookup/UserLookupFindByUserName";
import { client } from "../../.kubb/client";

/**
 * {@link /api/identity/users/lookup/by-username/:userName}
 */
export function userLookupFindByUserName<ThrowOnError extends boolean = true>(
  options: Options<UserLookupFindByUserNameOptions, ThrowOnError>,
): Promise<RequestResult<UserLookupFindByUserNameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/identity/users/lookup/by-username/{userName}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<UserLookupFindByUserNameResponses, ThrowOnError>>;
}
