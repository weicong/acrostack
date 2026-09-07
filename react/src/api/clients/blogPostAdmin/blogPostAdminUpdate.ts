/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminUpdateOptions,
  BlogPostAdminUpdateResponses,
} from "../../models/blogPostAdmin/BlogPostAdminUpdate";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function blogPostAdminUpdate<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminUpdateOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostAdminUpdateResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/blogs/blog-posts/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminUpdateResponses, ThrowOnError>>,
  );
}
