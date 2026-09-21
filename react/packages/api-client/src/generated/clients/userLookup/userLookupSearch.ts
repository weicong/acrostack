/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  UserLookupSearchOptions,
  UserLookupSearchResponses,
} from "../../models/userLookup/UserLookupSearch";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/lookup/search}
 */
export function userLookupSearch<ThrowOnError extends boolean = true>(
  options: Options<UserLookupSearchOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<UserLookupSearchResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/lookup/search",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserLookupSearchResponses, ThrowOnError>>,
  );
}
