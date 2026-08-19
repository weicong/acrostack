/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FeaturesGetOptions, FeaturesGetResponses } from '../../models/features/FeaturesGet'
import { client } from '../../.kubb/client'

/**
 * {@link /api/feature-management/features}
 */
export function featuresGet<ThrowOnError extends boolean = true>(options: Options<FeaturesGetOptions, ThrowOnError> = {}): Promise<RequestResult<FeaturesGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/feature-management/features', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FeaturesGetResponses, ThrowOnError>>
}
