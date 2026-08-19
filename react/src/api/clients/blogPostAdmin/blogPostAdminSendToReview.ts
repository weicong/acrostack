/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminSendToReviewOptions,
  BlogPostAdminSendToReviewResponses,
} from "../../models/blogPostAdmin/BlogPostAdminSendToReview";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/send-to-review}
 */
export function blogPostAdminSendToReview<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminSendToReviewOptions, ThrowOnError>,
): Promise<RequestResult<BlogPostAdminSendToReviewResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "POST",
    url: "/api/cms-kit-admin/blogs/blog-posts/{id}/send-to-review",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogPostAdminSendToReviewResponses, ThrowOnError>>;
}
