/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserLookupGetCountOptions, UserLookupGetCountResponses } from '../../models/userLookup/UserLookupGetCount'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users/lookup/count}
 */
export function userLookupGetCount<ThrowOnError extends boolean = true>(options: Options<UserLookupGetCountOptions, ThrowOnError> = {}): Promise<RequestResult<UserLookupGetCountResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/identity/users/lookup/count', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserLookupGetCountResponses, ThrowOnError>>
}
