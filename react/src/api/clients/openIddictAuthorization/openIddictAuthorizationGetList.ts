/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationGetListOptions,
  OpenIddictAuthorizationGetListResponses,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-authorization}
 */
export function openIddictAuthorizationGetList<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictAuthorizationGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<OpenIddictAuthorizationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/open-iddict-authorization",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictAuthorizationGetListResponses, ThrowOnError>>;
}
