/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  RatingPublicDeleteOptions,
  RatingPublicDeleteResponses,
} from "../../models/ratingPublic/RatingPublicDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicDelete<ThrowOnError extends boolean = true>(
  options: Options<RatingPublicDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<RatingPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-public/ratings/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RatingPublicDeleteResponses, ThrowOnError>>,
  );
}
