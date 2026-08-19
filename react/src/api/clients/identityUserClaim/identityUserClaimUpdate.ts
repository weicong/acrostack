/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityUserClaimUpdateOptions, IdentityUserClaimUpdateResponses } from '../../models/identityUserClaim/IdentityUserClaimUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-user-claim/:id}
 */
export function identityUserClaimUpdate<ThrowOnError extends boolean = true>(options: Options<IdentityUserClaimUpdateOptions, ThrowOnError>): Promise<RequestResult<IdentityUserClaimUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/app/identity-user-claim/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityUserClaimUpdateResponses, ThrowOnError>>
}
