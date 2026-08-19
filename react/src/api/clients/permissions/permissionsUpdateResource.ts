/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { PermissionsUpdateResourceOptions, PermissionsUpdateResourceResponses } from '../../models/permissions/PermissionsUpdateResource'
import { client } from '../../.kubb/client'

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function permissionsUpdateResource<ThrowOnError extends boolean = true>(options: Options<PermissionsUpdateResourceOptions, ThrowOnError>): Promise<RequestResult<PermissionsUpdateResourceResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/permission-management/permissions/resource', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<PermissionsUpdateResourceResponses, ThrowOnError>>
}
