/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { AbpApplicationConfigurationGetOptions, AbpApplicationConfigurationGetResponses } from '../../models/abpApplicationConfiguration/AbpApplicationConfigurationGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/abp/application-configuration}
 */
export function abpApplicationConfigurationGet<ThrowOnError extends boolean = true>(options: Options<AbpApplicationConfigurationGetOptions, ThrowOnError> = {}): Promise<RequestResult<AbpApplicationConfigurationGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/abp/application-configuration', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<AbpApplicationConfigurationGetResponses, ThrowOnError>>
}
