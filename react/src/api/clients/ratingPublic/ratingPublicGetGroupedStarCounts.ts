/* oxlint-disable */

import type { Options, RequestResult } from '../../.kubb/client'
import type { RatingPublicGetGroupedStarCountsOptions, RatingPublicGetGroupedStarCountsResponses } from '../../models/ratingPublic/RatingPublicGetGroupedStarCounts'
import { client } from '../../.kubb/client'

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicGetGroupedStarCounts<ThrowOnError extends boolean = true>(options: Options<RatingPublicGetGroupedStarCountsOptions, ThrowOnError>): Promise<RequestResult<RatingPublicGetGroupedStarCountsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options

  return request({ method: 'GET', url: '/api/cms-kit-public/ratings/{entityType}/{entityId}', security: [{ type: 'oauth2' }], ...config }) as Promise<RequestResult<RatingPublicGetGroupedStarCountsResponses, ThrowOnError>>
}
