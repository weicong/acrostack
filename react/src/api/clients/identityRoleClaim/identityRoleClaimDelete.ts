/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityRoleClaimDeleteOptions,
  IdentityRoleClaimDeleteResponses,
} from "../../models/identityRoleClaim/IdentityRoleClaimDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function identityRoleClaimDelete<ThrowOnError extends boolean = true>(
  options: Options<IdentityRoleClaimDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityRoleClaimDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/app/identity-role-claim/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityRoleClaimDeleteResponses, ThrowOnError>>,
  );
}
