/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogAdminMoveAllBlogPostsOptions,
  BlogAdminMoveAllBlogPostsResponses,
} from "../../models/blogAdmin/BlogAdminMoveAllBlogPosts";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/move-all-blog-posts}
 */
export function blogAdminMoveAllBlogPosts<ThrowOnError extends boolean = true>(
  options: Options<BlogAdminMoveAllBlogPostsOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogAdminMoveAllBlogPostsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "PUT",
      url: "/api/cms-kit-admin/blogs/{blogId}/move-all-blog-posts",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogAdminMoveAllBlogPostsResponses, ThrowOnError>>,
  );
}
