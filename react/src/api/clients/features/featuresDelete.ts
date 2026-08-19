/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { FeaturesDeleteOptions, FeaturesDeleteResponses } from '../../models/features/FeaturesDelete'
import { client } from '../../.kubb/client'

/**
 * {@link /api/feature-management/features}
 */
export function featuresDelete<ThrowOnError extends boolean = true>(options: Options<FeaturesDeleteOptions, ThrowOnError> = {}): Promise<RequestResult<FeaturesDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'DELETE', url: '/api/feature-management/features', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<FeaturesDeleteResponses, ThrowOnError>>
}
