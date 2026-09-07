/* oxlint-disable */

import type { Options, Unwrappable, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminGetListOptions,
  BlogPostAdminGetListResponses,
} from "../../models/blogPostAdmin/BlogPostAdminGetList";
import { client, withUnwrap } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export function blogPostAdminGetList<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminGetListOptions, ThrowOnError> = {},
): Unwrappable<RequestResult<BlogPostAdminGetListResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return withUnwrap(
    request({
      method: "GET",
      url: "/api/cms-kit-admin/blogs/blog-posts",
      security: [{ type: "oauth2" }],
      ...config,
    }) as Promise<RequestResult<BlogPostAdminGetListResponses, ThrowOnError>>,
  );
}
