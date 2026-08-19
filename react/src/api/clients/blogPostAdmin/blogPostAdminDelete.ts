/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminDeleteOptions,
  BlogPostAdminDeleteResponses,
} from "../../models/blogPostAdmin/BlogPostAdminDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function blogPostAdminDelete<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminDeleteOptions, ThrowOnError>,
): Promise<RequestResult<BlogPostAdminDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-admin/blogs/blog-posts/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogPostAdminDeleteResponses, ThrowOnError>>;
}
