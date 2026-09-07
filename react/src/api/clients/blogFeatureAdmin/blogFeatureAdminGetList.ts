/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogFeatureAdminGetListOptions,
  BlogFeatureAdminGetListResponses,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function blogFeatureAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<BlogFeatureAdminGetListOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogFeatureAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs/{blogId}/features",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogFeatureAdminGetListResponses, ThrowOnError>>,
  );
}
