/* oxlint-disable */

import type { Options, RequestResult } from "../../.kubb/client";
import type {
  BlogPostAdminHasBlogPostWaitingForReviewOptions,
  BlogPostAdminHasBlogPostWaitingForReviewResponses,
} from "../../models/blogPostAdmin/BlogPostAdminHasBlogPostWaitingForReview";
import { client } from "../../.kubb/client";

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review}
 */
export function blogPostAdminHasBlogPostWaitingForReview<ThrowOnError extends boolean = true>(
  options: Options<BlogPostAdminHasBlogPostWaitingForReviewOptions, ThrowOnError> = {},
): Promise<RequestResult<BlogPostAdminHasBlogPostWaitingForReviewResponses, ThrowOnError>> {
  const { client: request = client, ...config } = options;

  return request({
    method: "GET",
    url: "/api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review",
    security: [{ type: "oauth2" }],
    ...config,
  }) as Promise<RequestResult<BlogPostAdminHasBlogPostWaitingForReviewResponses, ThrowOnError>>;
}
