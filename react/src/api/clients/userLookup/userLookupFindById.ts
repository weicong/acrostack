/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserLookupFindByIdOptions, UserLookupFindByIdResponses } from '../../models/userLookup/UserLookupFindById'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users/lookup/:id}
 */
export function userLookupFindById<ThrowOnError extends boolean = true>(options: Options<UserLookupFindByIdOptions, ThrowOnError>): Promise<RequestResult<UserLookupFindByIdResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/identity/users/lookup/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserLookupFindByIdResponses, ThrowOnError>>
}
