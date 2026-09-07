/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeUpdateOptions,
  IdentityClaimTypeUpdateResponses,
} from "../../models/identityClaimType/IdentityClaimTypeUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function identityClaimTypeUpdate<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityClaimTypeUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/identity-claim-type/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityClaimTypeUpdateResponses, ThrowOnError>>,
  );
}
