/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  ProfileUpdateOptions,
  ProfileUpdateResponses,
} from "../../models/profile/ProfileUpdate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/account/my-profile}
 */
export function profileUpdate<ThrowOnError extends boolean = true>(
  options: Options<ProfileUpdateOptions, ThrowOnError>,
): Promise<RequestResult<ProfileUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/account/my-profile",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<ProfileUpdateResponses, ThrowOnError>>;
}
