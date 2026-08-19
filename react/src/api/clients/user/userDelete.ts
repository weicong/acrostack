/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserDeleteOptions, UserDeleteResponses } from '../../models/user/UserDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users/:id}
 */
export function userDelete<ThrowOnError extends boolean = true>(options: Options<UserDeleteOptions, ThrowOnError>): Promise<RequestResult<UserDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/identity/users/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserDeleteResponses, ThrowOnError>>
}
