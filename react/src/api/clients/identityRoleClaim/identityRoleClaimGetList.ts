/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  IdentityRoleClaimGetListOptions,
  IdentityRoleClaimGetListResponses,
} from "../../models/identityRoleClaim/IdentityRoleClaimGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/app/identity-role-claim}
 */
export function identityRoleClaimGetList<ThrowOnError extends boolean = true>(
  options: Options<IdentityRoleClaimGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<IdentityRoleClaimGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/app/identity-role-claim",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<IdentityRoleClaimGetListResponses, ThrowOnError>>,
  );
}
