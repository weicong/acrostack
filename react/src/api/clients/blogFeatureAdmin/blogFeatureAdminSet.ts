/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogFeatureAdminSetOptions,
  BlogFeatureAdminSetResponses,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminSet";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function blogFeatureAdminSet<ThrowOnError extends boolean = true>(
  options: Options<BlogFeatureAdminSetOptions, ThrowOnError>,
): Promise<RequestResult<BlogFeatureAdminSetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "PUT",
    url: "/api/cms-kit-admin/blogs/{blogId}/features",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogFeatureAdminSetResponses, ThrowOnError>>;
}
