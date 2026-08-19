/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeCreateOptions,
  IdentityClaimTypeCreateResponses,
} from "../../models/identityClaimType/IdentityClaimTypeCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type}
 */
export function identityClaimTypeCreate<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeCreateOptions, ThrowOnError>,
): Promise<RequestResult<IdentityClaimTypeCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/identity-claim-type",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<IdentityClaimTypeCreateResponses, ThrowOnError>>;
}
