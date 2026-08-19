/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AbpApiDefinitionGetOptions, AbpApiDefinitionGetResponses } from '../../models/abpApiDefinition/AbpApiDefinitionGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/abp/api-definition}
 */
export function abpApiDefinitionGet<ThrowOnError extends boolean = true>(options: Options<AbpApiDefinitionGetOptions, ThrowOnError> = {}): Promise<RequestResult<AbpApiDefinitionGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/abp/api-definition', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AbpApiDefinitionGetResponses, ThrowOnError>>
}
