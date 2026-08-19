/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { ProfileGetOptions, ProfileGetResponses } from '../../models/profile/ProfileGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/account/my-profile}
 */
export function profileGet<ThrowOnError extends boolean = true>(options: Options<ProfileGetOptions, ThrowOnError> = {}): Promise<RequestResult<ProfileGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/account/my-profile', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<ProfileGetResponses, ThrowOnError>>
}
