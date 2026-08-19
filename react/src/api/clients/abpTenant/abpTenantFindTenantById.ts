/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AbpTenantFindTenantByIdOptions, AbpTenantFindTenantByIdResponses } from '../../models/abpTenant/AbpTenantFindTenantById'
import { client } from '../../.kubb/client'

/**
 * {@link /api/abp/multi-tenancy/tenants/by-id/:id}
 */
export function abpTenantFindTenantById<ThrowOnError extends boolean = true>(options: Options<AbpTenantFindTenantByIdOptions, ThrowOnError>): Promise<RequestResult<AbpTenantFindTenantByIdResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/abp/multi-tenancy/tenants/by-id/{id}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AbpTenantFindTenantByIdResponses, ThrowOnError>>
}
