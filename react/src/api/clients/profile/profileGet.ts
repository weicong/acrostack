/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { ProfileGetOptions, ProfileGetResponses } from "../../models/profile/ProfileGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/account/my-profile}
 */
export function profileGet<ThrowOnError extends boolean = true>(
  options: Options<ProfileGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<ProfileGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/account/my-profile",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<ProfileGetResponses, ThrowOnError>>,
  );
}
