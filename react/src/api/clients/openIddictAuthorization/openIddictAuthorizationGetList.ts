/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationGetListOptions,
  OpenIddictAuthorizationGetListResponses,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-authorization}
 */
export function openIddictAuthorizationGetList<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictAuthorizationGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<OpenIddictAuthorizationGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/open-iddict-authorization",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictAuthorizationGetListResponses, ThrowOnError>>,
  );
}
