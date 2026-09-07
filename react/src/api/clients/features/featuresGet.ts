/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type { FeaturesGetOptions, FeaturesGetResponses } from "../../models/features/FeaturesGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/feature-management/features}
 */
export function featuresGet<ThrowOnError extends boolean = true>(
  options: Options<FeaturesGetOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<FeaturesGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/feature-management/features",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FeaturesGetResponses, ThrowOnError>>,
  );
}
