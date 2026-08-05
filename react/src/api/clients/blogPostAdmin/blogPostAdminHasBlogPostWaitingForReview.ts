/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminHasBlogPostWaitingForReviewStatus200,
  BlogPostAdminHasBlogPostWaitingForReviewStatus400,
  BlogPostAdminHasBlogPostWaitingForReviewStatus401,
  BlogPostAdminHasBlogPostWaitingForReviewStatus403,
  BlogPostAdminHasBlogPostWaitingForReviewStatus404,
  BlogPostAdminHasBlogPostWaitingForReviewStatus500,
  BlogPostAdminHasBlogPostWaitingForReviewStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminHasBlogPostWaitingForReview.ts";

function getBlogPostAdminHasBlogPostWaitingForReviewUrl() {
  const res = {
    method: "GET",
    url: `/api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/has-blogpost-waiting-for-review}
 */
export async function blogPostAdminHasBlogPostWaitingForReview(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminHasBlogPostWaitingForReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminHasBlogPostWaitingForReviewStatus400
      | BlogPostAdminHasBlogPostWaitingForReviewStatus401
      | BlogPostAdminHasBlogPostWaitingForReviewStatus403
      | BlogPostAdminHasBlogPostWaitingForReviewStatus404
      | BlogPostAdminHasBlogPostWaitingForReviewStatus500
      | BlogPostAdminHasBlogPostWaitingForReviewStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostAdminHasBlogPostWaitingForReviewUrl().url.toString(),
    ...requestConfig,
  });

  return res.data;
}
