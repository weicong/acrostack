/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminCreateData,
  BlogPostAdminCreateStatus200,
  BlogPostAdminCreateStatus400,
  BlogPostAdminCreateStatus401,
  BlogPostAdminCreateStatus403,
  BlogPostAdminCreateStatus404,
  BlogPostAdminCreateStatus500,
  BlogPostAdminCreateStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminCreate.ts";

function getBlogPostAdminCreateUrl() {
  const res = { method: "POST", url: `/api/cms-kit-admin/blogs/blog-posts` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export async function blogPostAdminCreate(
  data?: BlogPostAdminCreateData,
  config: Partial<RequestConfig<BlogPostAdminCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostAdminCreateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminCreateStatus400
      | BlogPostAdminCreateStatus401
      | BlogPostAdminCreateStatus403
      | BlogPostAdminCreateStatus404
      | BlogPostAdminCreateStatus500
      | BlogPostAdminCreateStatus501
    >,
    BlogPostAdminCreateData
  >({
    method: "POST",
    url: getBlogPostAdminCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
