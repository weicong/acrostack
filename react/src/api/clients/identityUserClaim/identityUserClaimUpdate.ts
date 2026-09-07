/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityUserClaimUpdateOptions,
  IdentityUserClaimUpdateResponses,
} from "../../models/identityUserClaim/IdentityUserClaimUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function identityUserClaimUpdate<ThrowOnError extends boolean = true>(
  options: Options<IdentityUserClaimUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityUserClaimUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/identity-user-claim/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityUserClaimUpdateResponses, ThrowOnError>>,
  );
}
