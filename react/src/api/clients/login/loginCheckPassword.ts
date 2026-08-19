/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { LoginCheckPasswordOptions, LoginCheckPasswordResponses } from '../../models/login/LoginCheckPassword'
import { client } from '../../.kubb/client'

/**
 * {@link /api/account/check-password}
 */
export function loginCheckPassword<ThrowOnError extends boolean = true>(options: Options<LoginCheckPasswordOptions, ThrowOnError>): Promise<RequestResult<LoginCheckPasswordResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/account/check-password', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<LoginCheckPasswordResponses, ThrowOnError>>
}
