/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeDeleteOptions,
  IdentityClaimTypeDeleteResponses,
} from "../../models/identityClaimType/IdentityClaimTypeDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function identityClaimTypeDelete<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityClaimTypeDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/identity-claim-type/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityClaimTypeDeleteResponses, ThrowOnError>>,
  );
}
