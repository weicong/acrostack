/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminGetPathId,
  BlogPostAdminGetStatus200,
  BlogPostAdminGetStatus400,
  BlogPostAdminGetStatus401,
  BlogPostAdminGetStatus403,
  BlogPostAdminGetStatus404,
  BlogPostAdminGetStatus500,
  BlogPostAdminGetStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminGet.ts";

function getBlogPostAdminGetUrl(id: BlogPostAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs/blog-posts/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export async function blogPostAdminGet(
  id: BlogPostAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminGetStatus200,
    ResponseErrorConfig<
      | BlogPostAdminGetStatus400
      | BlogPostAdminGetStatus401
      | BlogPostAdminGetStatus403
      | BlogPostAdminGetStatus404
      | BlogPostAdminGetStatus500
      | BlogPostAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogPostAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
