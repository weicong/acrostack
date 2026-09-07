/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminDeleteOptions,
  BlogPostAdminDeleteResponses,
} from "../../models/blogPostAdmin/BlogPostAdminDelete";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function blogPostAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminDeleteOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "DELETE",
      url: "/api/cms-kit-admin/blogs/blog-posts/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminDeleteResponses, ThrowOnError>>,
  );
}
