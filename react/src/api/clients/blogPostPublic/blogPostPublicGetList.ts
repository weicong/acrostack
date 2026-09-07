/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicGetListOptions,
  BlogPostPublicGetListResponses,
} from "../../models/blogPostPublic/BlogPostPublicGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug}
 */
export function blogPostPublicGetList<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicGetListOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostPublicGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-public/blog-posts/{blogSlug}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostPublicGetListResponses, ThrowOnError>>,
  );
}
