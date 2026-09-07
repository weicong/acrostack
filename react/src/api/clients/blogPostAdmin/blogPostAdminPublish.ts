/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminPublishOptions,
  BlogPostAdminPublishResponses,
} from "../../models/blogPostAdmin/BlogPostAdminPublish";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/publish}
 */
export function blogPostAdminPublish<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminPublishOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostAdminPublishResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "POST",
      url: "/api/cms-kit-admin/blogs/blog-posts/{id}/publish",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminPublishResponses, ThrowOnError>>,
  );
}
