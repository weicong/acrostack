/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { IdentityClaimTypeUpdateOptions, IdentityClaimTypeUpdateResponses } from '../../models/identityClaimType/IdentityClaimTypeUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function identityClaimTypeUpdate<ThrowOnError extends boolean = true>(options: Options<IdentityClaimTypeUpdateOptions, ThrowOnError>): Promise<RequestResult<IdentityClaimTypeUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/app/identity-claim-type/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<IdentityClaimTypeUpdateResponses, ThrowOnError>>
}
