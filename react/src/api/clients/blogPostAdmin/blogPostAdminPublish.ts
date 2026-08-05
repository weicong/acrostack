/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminPublishPathId,
  BlogPostAdminPublishStatus200,
  BlogPostAdminPublishStatus204,
  BlogPostAdminPublishStatus400,
  BlogPostAdminPublishStatus401,
  BlogPostAdminPublishStatus403,
  BlogPostAdminPublishStatus404,
  BlogPostAdminPublishStatus500,
  BlogPostAdminPublishStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminPublish.ts";

function getBlogPostAdminPublishUrl(id: BlogPostAdminPublishPathId) {
  const res = { method: "POST", url: `/api/cms-kit-admin/blogs/blog-posts/${id}/publish` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id/publish}
 */
export async function blogPostAdminPublish(
  id: BlogPostAdminPublishPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminPublishStatus200 | BlogPostAdminPublishStatus204,
    ResponseErrorConfig<
      | BlogPostAdminPublishStatus400
      | BlogPostAdminPublishStatus401
      | BlogPostAdminPublishStatus403
      | BlogPostAdminPublishStatus404
      | BlogPostAdminPublishStatus500
      | BlogPostAdminPublishStatus501
    >,
    unknown
  >({ method: "POST", url: getBlogPostAdminPublishUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
