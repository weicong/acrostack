/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { UserGetRolesOptions, UserGetRolesResponses } from '../../models/user/UserGetRoles'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/users/:id/roles}
 */
export function userGetRoles<ThrowOnError extends boolean = true>(options: Options<UserGetRolesOptions, ThrowOnError>): Promise<RequestResult<UserGetRolesResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/identity/users/{id}/roles', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<UserGetRolesResponses, ThrowOnError>>
}
