/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AppUserDeleteOptions,
  AppUserDeleteResponses,
} from "../../models/appUser/AppUserDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/app-user/:id}
 */
export function appUserDelete<ThrowOnError extends boolean = true>(
  options: Options<AppUserDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<AppUserDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/app-user/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AppUserDeleteResponses, ThrowOnError>>,
  );
}
