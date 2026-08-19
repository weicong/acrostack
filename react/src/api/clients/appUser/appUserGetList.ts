/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  AppUserGetListOptions,
  AppUserGetListResponses,
} from "../../models/appUser/AppUserGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/app-user}
 */
export function appUserGetList<ThrowOnError extends boolean = true>(
  options: Options<AppUserGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<AppUserGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/app-user",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<AppUserGetListResponses, ThrowOnError>>;
}
