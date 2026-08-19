/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityUserClaimGetListOptions, IdentityUserClaimGetListResponses } from '../../models/identityUserClaim/IdentityUserClaimGetList'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-user-claim}
 */
export function identityUserClaimGetList<ThrowOnError extends boolean = true>(options: Options<IdentityUserClaimGetListOptions, ThrowOnError> = {}): Promise<RequestResult<IdentityUserClaimGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/identity-user-claim', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityUserClaimGetListResponses, ThrowOnError>>
}
