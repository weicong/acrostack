/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminUpdatePathId,
  BlogPostAdminUpdateData,
  BlogPostAdminUpdateStatus200,
  BlogPostAdminUpdateStatus400,
  BlogPostAdminUpdateStatus401,
  BlogPostAdminUpdateStatus403,
  BlogPostAdminUpdateStatus404,
  BlogPostAdminUpdateStatus500,
  BlogPostAdminUpdateStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminUpdate.ts";

function getBlogPostAdminUpdateUrl(id: BlogPostAdminUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/blogs/blog-posts/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export async function blogPostAdminUpdate(
  id: BlogPostAdminUpdatePathId,
  data?: BlogPostAdminUpdateData,
  config: Partial<RequestConfig<BlogPostAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostAdminUpdateStatus400
      | BlogPostAdminUpdateStatus401
      | BlogPostAdminUpdateStatus403
      | BlogPostAdminUpdateStatus404
      | BlogPostAdminUpdateStatus500
      | BlogPostAdminUpdateStatus501
    >,
    BlogPostAdminUpdateData
  >({
    method: "PUT",
    url: getBlogPostAdminUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
