/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  IdentityRoleClaimDeleteOptions,
  IdentityRoleClaimDeleteResponses,
} from "../../models/identityRoleClaim/IdentityRoleClaimDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/app/identity-role-claim/:id}
 */
export function identityRoleClaimDelete<ThrowOnError extends boolean = true>(
  options: Options<IdentityRoleClaimDeleteOptions, ThrowOnError>,
): Promise<RequestResult<IdentityRoleClaimDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/app/identity-role-claim/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<IdentityRoleClaimDeleteResponses, ThrowOnError>>;
}
