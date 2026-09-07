/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminGetOptions,
  BlogPostAdminGetResponses,
} from "../../models/blogPostAdmin/BlogPostAdminGet";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function blogPostAdminGet<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminGetOptions, ThrowOnError>,
): Unwrappable<RequestResult<BlogPostAdminGetResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs/blog-posts/{id}",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminGetResponses, ThrowOnError>>,
  );
}
