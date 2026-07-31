/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostDeletePathId,
  BlogPostDeleteStatus200,
  BlogPostDeleteStatus204,
  BlogPostDeleteStatus400,
  BlogPostDeleteStatus401,
  BlogPostDeleteStatus403,
  BlogPostDeleteStatus404,
  BlogPostDeleteStatus500,
  BlogPostDeleteStatus501,
} from "../../models/blogPost/BlogPostDelete.ts";

function getBlogPostDeleteUrl(id: BlogPostDeletePathId) {
  const res = { method: "DELETE", url: `/api/app/blog-post/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog-post/:id}
 */
export async function blogPostDelete(
  id: BlogPostDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostDeleteStatus200 | BlogPostDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostDeleteStatus400
      | BlogPostDeleteStatus401
      | BlogPostDeleteStatus403
      | BlogPostDeleteStatus404
      | BlogPostDeleteStatus500
      | BlogPostDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBlogPostDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
