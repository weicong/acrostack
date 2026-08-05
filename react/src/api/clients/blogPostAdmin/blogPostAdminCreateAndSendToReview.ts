/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminCreateAndSendToReviewData,
  BlogPostAdminCreateAndSendToReviewStatus200,
  BlogPostAdminCreateAndSendToReviewStatus400,
  BlogPostAdminCreateAndSendToReviewStatus401,
  BlogPostAdminCreateAndSendToReviewStatus403,
  BlogPostAdminCreateAndSendToReviewStatus404,
  BlogPostAdminCreateAndSendToReviewStatus500,
  BlogPostAdminCreateAndSendToReviewStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreateAndSendToReview.ts";

function getBlogPostAdminCreateAndSendToReviewUrl() {
  const res = {
    method: "POST",
    url: `/api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-send-to-review}
 */
export async function blogPostAdminCreateAndSendToReview(
  data?: BlogPostAdminCreateAndSendToReviewData,
  config: Partial<RequestConfig<BlogPostAdminCreateAndSendToReviewData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostAdminCreateAndSendToReviewStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndSendToReviewStatus400
      | BlogPostAdminCreateAndSendToReviewStatus401
      | BlogPostAdminCreateAndSendToReviewStatus403
      | BlogPostAdminCreateAndSendToReviewStatus404
      | BlogPostAdminCreateAndSendToReviewStatus500
      | BlogPostAdminCreateAndSendToReviewStatus501
    >,
    BlogPostAdminCreateAndSendToReviewData
  >({
    method: "POST",
    url: getBlogPostAdminCreateAndSendToReviewUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
