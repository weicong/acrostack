/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { RoleGetOptions, RoleGetResponses } from '../../models/role/RoleGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/identity/roles/:id}
 */
export function roleGet<ThrowOnError extends boolean = true>(options: Options<RoleGetOptions, ThrowOnError>): Promise<RequestResult<RoleGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/identity/roles/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<RoleGetResponses, ThrowOnError>>
}
