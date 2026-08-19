/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TenantGetOptions, TenantGetResponses } from '../../models/tenant/TenantGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function tenantGet<ThrowOnError extends boolean = true>(options: Options<TenantGetOptions, ThrowOnError>): Promise<RequestResult<TenantGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/multi-tenancy/tenants/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TenantGetResponses, ThrowOnError>>
}
