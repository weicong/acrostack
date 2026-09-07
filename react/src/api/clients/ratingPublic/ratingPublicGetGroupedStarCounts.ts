/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  RatingPublicGetGroupedStarCountsOptions,
  RatingPublicGetGroupedStarCountsResponses,
} from "../../models/ratingPublic/RatingPublicGetGroupedStarCounts";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicGetGroupedStarCounts<ThrowOnError extends boolean = true>(
  options: Options<RatingPublicGetGroupedStarCountsOptions, ThrowOnError>,
): Unwrappable<RequestResult<RatingPublicGetGroupedStarCountsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/ratings/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RatingPublicGetGroupedStarCountsResponses, ThrowOnError>>,
  );
}
