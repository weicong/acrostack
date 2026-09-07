/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FeaturesUpdateOptions,
  FeaturesUpdateResponses,
} from "../../models/features/FeaturesUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/feature-management/features}
 */
export function featuresUpdate<ThrowOnError extends boolean = true>(
  options: Options<FeaturesUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<FeaturesUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/feature-management/features",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FeaturesUpdateResponses, ThrowOnError>>,
  );
}
