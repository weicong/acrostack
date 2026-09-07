/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityRoleClaimUpdateOptions,
  IdentityRoleClaimUpdateResponses,
} from "../../models/identityRoleClaim/IdentityRoleClaimUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function identityRoleClaimUpdate<ThrowOnError extends boolean = true>(
  options: Options<IdentityRoleClaimUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<IdentityRoleClaimUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/app/identity-role-claim/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityRoleClaimUpdateResponses, ThrowOnError>>,
  );
}
