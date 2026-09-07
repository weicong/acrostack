/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogFeatureGetOrDefaultOptions,
  BlogFeatureGetOrDefaultResponses,
} from "../../models/blogFeature/BlogFeatureGetOrDefault";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit/blogs/:blogId/features/:featureName}
 */
export function blogFeatureGetOrDefault<ThrowOnError extends boolean = true>(
  options: Options<BlogFeatureGetOrDefaultOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogFeatureGetOrDefaultResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit/blogs/{blogId}/features/{featureName}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogFeatureGetOrDefaultResponses, ThrowOnError>>,
  );
}
