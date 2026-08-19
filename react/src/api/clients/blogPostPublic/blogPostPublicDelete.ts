/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogPostPublicDeleteOptions,
  BlogPostPublicDeleteResponses,
} from "../../models/blogPostPublic/BlogPostPublicDelete";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-public/blog-posts/:id}
 */
export function blogPostPublicDelete<ThrowOnError extends boolean = true>(
  options: Options<BlogPostPublicDeleteOptions, ThrowOnError>,
): Promise<RequestResult<BlogPostPublicDeleteResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "DELETE",
    url: "/api/cms-kit-public/blog-posts/{id}",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogPostPublicDeleteResponses, ThrowOnError>>;
}
