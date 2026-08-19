/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeGetListOptions,
  IdentityClaimTypeGetListResponses,
} from "../../models/identityClaimType/IdentityClaimTypeGetList";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type}
 */
export function identityClaimTypeGetList<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeGetListOptions, ThrowOnError> = {},
): Promise<RequestResult<IdentityClaimTypeGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/app/identity-claim-type",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<IdentityClaimTypeGetListResponses, ThrowOnError>>;
}
