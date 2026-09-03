/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationRevokeOptions,
  OpenIddictAuthorizationRevokeResponses,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationRevoke";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/open-iddict-authorization/:id/revoke}
 */
export function openIddictAuthorizationRevoke<ThrowOnError extends boolean = true>(
  options: Options<OpenIddictAuthorizationRevokeOptions, ThrowOnError>,
): Promise<RequestResult<OpenIddictAuthorizationRevokeResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/open-iddict-authorization/{id}/revoke",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<OpenIddictAuthorizationRevokeResponses, ThrowOnError>>;
}
