/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  AppUserGetListOptions,
  AppUserGetListResponses,
} from "../../models/appUser/AppUserGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/app-user}
 */
export function appUserGetList<ThrowOnError extends boolean = true>(
  options: Options<AppUserGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<AppUserGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/app-user",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<AppUserGetListResponses, ThrowOnError>>,
  );
}
