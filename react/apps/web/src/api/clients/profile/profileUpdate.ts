/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  ProfileUpdateOptions,
  ProfileUpdateResponses,
} from "../../models/profile/ProfileUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/my-profile}
 */
export function profileUpdate<ThrowOnError extends boolean = true>(
  options: Options<ProfileUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<ProfileUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/account/my-profile",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ProfileUpdateResponses, ThrowOnError>>,
  );
}
