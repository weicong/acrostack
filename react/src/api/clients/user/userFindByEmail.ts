/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  UserFindByEmailOptions,
  UserFindByEmailResponses,
} from "../../models/user/UserFindByEmail";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/identity/users/by-email/:email}
 */
export function userFindByEmail<ThrowOnError extends boolean = true>(
  options: Options<UserFindByEmailOptions, ThrowOnError>,
): Unwrappable<RequestResult<UserFindByEmailResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/identity/users/by-email/{email}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<UserFindByEmailResponses, ThrowOnError>>,
  );
}
