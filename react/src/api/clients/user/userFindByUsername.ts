/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserFindByUsernameOptions, UserFindByUsernameResponses } from '../../models/user/UserFindByUsername'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users/by-username/:userName}
 */
export function userFindByUsername<ThrowOnError extends boolean = true>(options: Options<UserFindByUsernameOptions, ThrowOnError>): Promise<RequestResult<UserFindByUsernameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/identity/users/by-username/{userName}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserFindByUsernameResponses, ThrowOnError>>
}
