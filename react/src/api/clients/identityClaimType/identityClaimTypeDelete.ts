/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityClaimTypeDeleteOptions, IdentityClaimTypeDeleteResponses } from '../../models/identityClaimType/IdentityClaimTypeDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function identityClaimTypeDelete<ThrowOnError extends boolean = true>(options: Options<IdentityClaimTypeDeleteOptions, ThrowOnError>): Promise<RequestResult<IdentityClaimTypeDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/app/identity-claim-type/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityClaimTypeDeleteResponses, ThrowOnError>>
}
