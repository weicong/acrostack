/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ProfileChangePasswordOptions,
  ProfileChangePasswordResponses,
} from "../../models/profile/ProfileChangePassword";
import { client } from "../../.kubb/client";

/**
 * {@link /api/account/my-profile/change-password}
 */
export function profileChangePassword<ThrowOnError extends boolean = true>(
  options: Options<ProfileChangePasswordOptions, ThrowOnError>,
): Promise<RequestResult<ProfileChangePasswordResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/account/my-profile/change-password",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ProfileChangePasswordResponses, ThrowOnError>>;
}
