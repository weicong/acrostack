/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminSendToReviewPathId,
  BlogPostAdminSendToReviewStatus200,
  BlogPostAdminSendToReviewStatus204,
  BlogPostAdminSendToReviewStatus400,
  BlogPostAdminSendToReviewStatus401,
  BlogPostAdminSendToReviewStatus403,
  BlogPostAdminSendToReviewStatus404,
  BlogPostAdminSendToReviewStatus500,
  BlogPostAdminSendToReviewStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminSendToReview.ts";

function getBlogPostAdminSendToReviewUrl(id: BlogPostAdminSendToReviewPathId) {
  const res = {
    method: "POST",
    url: `/api/cms-kit-admin/blogs/blog-posts/${id}/send-to-review` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/send-to-review}
 */
export async function blogPostAdminSendToReview(
  id: BlogPostAdminSendToReviewPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminSendToReviewStatus200 | BlogPostAdminSendToReviewStatus204,
    ResponseErrorConfig<
      | BlogPostAdminSendToReviewStatus400
      | BlogPostAdminSendToReviewStatus401
      | BlogPostAdminSendToReviewStatus403
      | BlogPostAdminSendToReviewStatus404
      | BlogPostAdminSendToReviewStatus500
      | BlogPostAdminSendToReviewStatus501
    >,
    unknown
  >({ method: "POST", url: getBlogPostAdminSendToReviewUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
