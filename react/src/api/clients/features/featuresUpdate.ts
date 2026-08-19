/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FeaturesUpdateOptions, FeaturesUpdateResponses } from '../../models/features/FeaturesUpdate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/feature-management/features}
 */
export function featuresUpdate<ThrowOnError extends boolean = true>(options: Options<FeaturesUpdateOptions, ThrowOnError>): Promise<RequestResult<FeaturesUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/feature-management/features', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FeaturesUpdateResponses, ThrowOnError>>
}
