/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationDeleteOptions,
  OpenIddictAuthorizationDeleteResponses,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-authorization/:id}
 */
export function openIddictAuthorizationDelete<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictAuthorizationDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<OpenIddictAuthorizationDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/open-iddict-authorization/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<OpenIddictAuthorizationDeleteResponses, ThrowOnError>>,
  );
}
