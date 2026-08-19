/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { TenantUpdateDefaultConnectionStringOptions, TenantUpdateDefaultConnectionStringResponses } from '../../models/tenant/TenantUpdateDefaultConnectionString'
import { client } from '../../.kubb/client'

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function tenantUpdateDefaultConnectionString<ThrowOnError extends boolean = true>(options: Options<TenantUpdateDefaultConnectionStringOptions, ThrowOnError>): Promise<RequestResult<TenantUpdateDefaultConnectionStringResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/multi-tenancy/tenants/{id}/default-connection-string', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<TenantUpdateDefaultConnectionStringResponses, ThrowOnError>>
}
