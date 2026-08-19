/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TenantCreateOptions, TenantCreateResponses } from '../../models/tenant/TenantCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function tenantCreate<ThrowOnError extends boolean = true>(options: Options<TenantCreateOptions, ThrowOnError>): Promise<RequestResult<TenantCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'POST', url: '/api/multi-tenancy/tenants', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TenantCreateResponses, ThrowOnError>>
}
