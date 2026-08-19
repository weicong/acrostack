/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { PermissionsSearchResourceProviderKeyOptions, PermissionsSearchResourceProviderKeyResponses } from '../../models/permissions/PermissionsSearchResourceProviderKey'
import { client } from '../../.kubb/client'

/**
 * {@link /api/permission-management/permissions/search-resource-provider-keys}
 */
export function permissionsSearchResourceProviderKey<ThrowOnError extends boolean = true>(options: Options<PermissionsSearchResourceProviderKeyOptions, ThrowOnError> = {}): Promise<RequestResult<PermissionsSearchResourceProviderKeyResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/permission-management/permissions/search-resource-provider-keys', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<PermissionsSearchResourceProviderKeyResponses, ThrowOnError>>
}
