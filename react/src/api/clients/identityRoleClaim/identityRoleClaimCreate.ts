/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityRoleClaimCreateOptions, IdentityRoleClaimCreateResponses } from '../../models/identityRoleClaim/IdentityRoleClaimCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-role-claim}
 */
export function identityRoleClaimCreate<ThrowOnError extends boolean = true>(options: Options<IdentityRoleClaimCreateOptions, ThrowOnError>): Promise<RequestResult<IdentityRoleClaimCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/app/identity-role-claim', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityRoleClaimCreateResponses, ThrowOnError>>
}
