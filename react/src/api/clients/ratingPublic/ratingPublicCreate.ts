/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  RatingPublicCreateOptions,
  RatingPublicCreateResponses,
} from "../../models/ratingPublic/RatingPublicCreate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function ratingPublicCreate<ThrowOnError extends boolean = true>(
  options: Options<RatingPublicCreateOptions, ThrowOnError>,
): Unwrappable<RequestResult<RatingPublicCreateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-public/ratings/{entityType}/{entityId}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<RatingPublicCreateResponses, ThrowOnError>>,
  );
}
