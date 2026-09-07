/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicGetTagNameOptions,
  BlogPostPublicGetTagNameResponses,
} from "../../models/blogPostPublic/BlogPostPublicGetTagName";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/tags/:id}
 */
export function blogPostPublicGetTagName<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicGetTagNameOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostPublicGetTagNameResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/blog-posts/tags/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostPublicGetTagNameResponses, ThrowOnError>>,
  );
}
