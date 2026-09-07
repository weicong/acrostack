/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogFeatureAdminSetOptions,
  BlogFeatureAdminSetResponses,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminSet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function blogFeatureAdminSet<ThrowOnError extends boolean = true>(
  options: Options<BlogFeatureAdminSetOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogFeatureAdminSetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/blogs/{blogId}/features",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogFeatureAdminSetResponses, ThrowOnError>>,
  );
}
