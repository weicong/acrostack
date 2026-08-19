/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { RatingPublicCreateOptions, RatingPublicCreateResponses } from '../../models/ratingPublic/RatingPublicCreate'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicCreate<ThrowOnError extends boolean = true>(options: Options<RatingPublicCreateOptions, ThrowOnError>): Promise<RequestResult<RatingPublicCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'PUT', url: '/api/cms-kit-public/ratings/{entityType}/{entityId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<RatingPublicCreateResponses, ThrowOnError>>
}
