/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  RatingPublicDeleteOptions,
  RatingPublicDeleteResponses,
} from "../../models/ratingPublic/RatingPublicDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicDelete<ThrowOnError extends boolean = true>(
  options: Options<RatingPublicDeleteOptions, ThrowOnError>,
): Promise<RequestResult<RatingPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-public/ratings/{entityType}/{entityId}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<RatingPublicDeleteResponses, ThrowOnError>>;
}
