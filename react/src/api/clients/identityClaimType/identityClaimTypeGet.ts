/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityClaimTypeGetOptions, IdentityClaimTypeGetResponses } from '../../models/identityClaimType/IdentityClaimTypeGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function identityClaimTypeGet<ThrowOnError extends boolean = true>(options: Options<IdentityClaimTypeGetOptions, ThrowOnError>): Promise<RequestResult<IdentityClaimTypeGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/app/identity-claim-type/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityClaimTypeGetResponses, ThrowOnError>>
}
