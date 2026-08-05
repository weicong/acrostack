/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminDeletePathId,
  BlogPostAdminDeleteStatus200,
  BlogPostAdminDeleteStatus204,
  BlogPostAdminDeleteStatus400,
  BlogPostAdminDeleteStatus401,
  BlogPostAdminDeleteStatus403,
  BlogPostAdminDeleteStatus404,
  BlogPostAdminDeleteStatus500,
  BlogPostAdminDeleteStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminDelete.ts";

function getBlogPostAdminDeleteUrl(id: BlogPostAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/blogs/blog-posts/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export async function blogPostAdminDelete(
  id: BlogPostAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminDeleteStatus200 | BlogPostAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostAdminDeleteStatus400
      | BlogPostAdminDeleteStatus401
      | BlogPostAdminDeleteStatus403
      | BlogPostAdminDeleteStatus404
      | BlogPostAdminDeleteStatus500
      | BlogPostAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBlogPostAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
