/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicGetAuthorsHasBlogPostsOptions,
  BlogPostPublicGetAuthorsHasBlogPostsResponses,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorsHasBlogPosts";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/authors}
 */
export function blogPostPublicGetAuthorsHasBlogPosts<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicGetAuthorsHasBlogPostsOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BlogPostPublicGetAuthorsHasBlogPostsResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/blog-posts/authors",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostPublicGetAuthorsHasBlogPostsResponses, ThrowOnError>>,
  );
}
