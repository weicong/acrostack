/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicGetOptions,
  BlogPostPublicGetResponses,
} from "../../models/blogPostPublic/BlogPostPublicGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug}
 */
export function blogPostPublicGet<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostPublicGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/blog-posts/{blogSlug}/{blogPostSlug}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostPublicGetResponses, ThrowOnError>>,
  );
}
