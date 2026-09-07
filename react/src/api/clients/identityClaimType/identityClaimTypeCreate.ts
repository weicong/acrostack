/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeCreateOptions,
  IdentityClaimTypeCreateResponses,
} from "../../models/identityClaimType/IdentityClaimTypeCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type}
 */
export function identityClaimTypeCreate<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityClaimTypeCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/app/identity-claim-type",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityClaimTypeCreateResponses, ThrowOnError>>,
  );
}
