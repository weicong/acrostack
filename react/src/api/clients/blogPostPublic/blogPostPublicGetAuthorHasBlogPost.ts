/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicGetAuthorHasBlogPostOptions,
  BlogPostPublicGetAuthorHasBlogPostResponses,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorHasBlogPost";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/authors/:id}
 */
export function blogPostPublicGetAuthorHasBlogPost<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicGetAuthorHasBlogPostOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostPublicGetAuthorHasBlogPostResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/blog-posts/authors/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostPublicGetAuthorHasBlogPostResponses, ThrowOnError>>,
  );
}
