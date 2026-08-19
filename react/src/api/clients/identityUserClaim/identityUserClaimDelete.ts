/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityUserClaimDeleteOptions, IdentityUserClaimDeleteResponses } from '../../models/identityUserClaim/IdentityUserClaimDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function identityUserClaimDelete<ThrowOnError extends boolean = true>(options: Options<IdentityUserClaimDeleteOptions, ThrowOnError>): Promise<RequestResult<IdentityUserClaimDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/app/identity-user-claim/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityUserClaimDeleteResponses, ThrowOnError>>
}
