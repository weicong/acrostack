/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  IdentityUserClaimCreateOptions,
  IdentityUserClaimCreateResponses,
} from "../../models/identityUserClaim/IdentityUserClaimCreate";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/identity-user-claim}
 */
export function identityUserClaimCreate<ThrowOnError extends boolean = true>(
  options: Options<IdentityUserClaimCreateOptions, ThrowOnError>,
): Promise<RequestResult<IdentityUserClaimCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/app/identity-user-claim",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<IdentityUserClaimCreateResponses, ThrowOnError>>;
}
