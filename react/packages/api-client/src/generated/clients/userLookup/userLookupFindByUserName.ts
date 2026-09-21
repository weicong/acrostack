/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  UserLookupFindByUserNameOptions,
  UserLookupFindByUserNameResponses,
} from "../../models/userLookup/UserLookupFindByUserName";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/lookup/by-username/:userName}
 */
export function userLookupFindByUserName<ThrowOnError extends boolean = true>(
  options: Options<UserLookupFindByUserNameOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserLookupFindByUserNameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/lookup/by-username/{userName}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserLookupFindByUserNameResponses, ThrowOnError>>,
  );
}
