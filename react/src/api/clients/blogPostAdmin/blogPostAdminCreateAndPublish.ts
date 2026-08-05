/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminCreateAndPublishData,
  BlogPostAdminCreateAndPublishStatus200,
  BlogPostAdminCreateAndPublishStatus400,
  BlogPostAdminCreateAndPublishStatus401,
  BlogPostAdminCreateAndPublishStatus403,
  BlogPostAdminCreateAndPublishStatus404,
  BlogPostAdminCreateAndPublishStatus500,
  BlogPostAdminCreateAndPublishStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreateAndPublish.ts";

function getBlogPostAdminCreateAndPublishUrl() {
  const res = {
    method: "POST",
    url: `/api/cms-kit-admin/blogs/blog-posts/create-and-publish` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/create-and-publish}
 */
export async function blogPostAdminCreateAndPublish(
  data?: BlogPostAdminCreateAndPublishData,
  config: Partial<RequestConfig<BlogPostAdminCreateAndPublishData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostAdminCreateAndPublishStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateAndPublishStatus400
      | BlogPostAdminCreateAndPublishStatus401
      | BlogPostAdminCreateAndPublishStatus403
      | BlogPostAdminCreateAndPublishStatus404
      | BlogPostAdminCreateAndPublishStatus500
      | BlogPostAdminCreateAndPublishStatus501
    >,
    BlogPostAdminCreateAndPublishData
  >({
    method: "POST",
    url: getBlogPostAdminCreateAndPublishUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
