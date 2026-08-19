/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { PermissionsUpdateOptions, PermissionsUpdateResponses } from '../../models/permissions/PermissionsUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/permission-management/permissions}
 */
export function permissionsUpdate<ThrowOnError extends boolean = true>(options: Options<PermissionsUpdateOptions, ThrowOnError>): Promise<RequestResult<PermissionsUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/permission-management/permissions', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<PermissionsUpdateResponses, ThrowOnError>>
}
