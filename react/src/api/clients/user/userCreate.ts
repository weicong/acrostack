/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserCreateOptions, UserCreateResponses } from '../../models/user/UserCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users}
 */
export function userCreate<ThrowOnError extends boolean = true>(options: Options<UserCreateOptions, ThrowOnError>): Promise<RequestResult<UserCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/identity/users', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserCreateResponses, ThrowOnError>>
}
