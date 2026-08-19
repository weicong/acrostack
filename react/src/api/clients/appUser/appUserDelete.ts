/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  AppUserDeleteOptions,
  AppUserDeleteResponses,
} from "../../models/appUser/AppUserDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/app-user/:id}
 */
export function appUserDelete<ThrowOnError extends boolean = true>(
  options: Options<AppUserDeleteOptions, ThrowOnError>,
): Promise<RequestResult<AppUserDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/app-user/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<AppUserDeleteResponses, ThrowOnError>>;
}
