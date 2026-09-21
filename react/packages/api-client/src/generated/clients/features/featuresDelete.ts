/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  FeaturesDeleteOptions,
  FeaturesDeleteResponses,
} from "../../models/features/FeaturesDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/feature-management/features}
 */
export function featuresDelete<ThrowOnError extends boolean = true>(
  options: Options<FeaturesDeleteOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<FeaturesDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/feature-management/features",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<FeaturesDeleteResponses, ThrowOnError>>,
  );
}
