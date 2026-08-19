/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { LoginLogoutOptions, LoginLogoutResponses } from '../../models/login/LoginLogout'
import { client } from '../../.kubb/client'

/**
 * {@link /api/account/logout}
 */
export function loginLogout<ThrowOnError extends boolean = true>(options: Options<LoginLogoutOptions, ThrowOnError> = {}): Promise<RequestResult<LoginLogoutResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/account/logout', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<LoginLogoutResponses, ThrowOnError>>
}
