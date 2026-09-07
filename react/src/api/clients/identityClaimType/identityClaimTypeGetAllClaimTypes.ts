/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityClaimTypeGetAllClaimTypesOptions,
  IdentityClaimTypeGetAllClaimTypesResponses,
} from "../../models/identityClaimType/IdentityClaimTypeGetAllClaimTypes";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-claim-type/all}
 */
export function identityClaimTypeGetAllClaimTypes<ThrowOnError extends boolean = true>(
  options: Options<IdentityClaimTypeGetAllClaimTypesOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<IdentityClaimTypeGetAllClaimTypesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/identity-claim-type/all",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityClaimTypeGetAllClaimTypesResponses, ThrowOnError>>,
  );
}
