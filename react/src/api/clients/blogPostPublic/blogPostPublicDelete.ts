/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicDeletePathId,
  BlogPostPublicDeleteStatus200,
  BlogPostPublicDeleteStatus204,
  BlogPostPublicDeleteStatus400,
  BlogPostPublicDeleteStatus401,
  BlogPostPublicDeleteStatus403,
  BlogPostPublicDeleteStatus404,
  BlogPostPublicDeleteStatus500,
  BlogPostPublicDeleteStatus501,
} from "../../models/blogPostPublic/BlogPostPublicDelete.ts";

function getBlogPostPublicDeleteUrl(id: BlogPostPublicDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-public/blog-posts/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/:id}
 */
export async function blogPostPublicDelete(
  id: BlogPostPublicDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicDeleteStatus200 | BlogPostPublicDeleteStatus204,
    ResponseErrorConfig<
      | BlogPostPublicDeleteStatus400
      | BlogPostPublicDeleteStatus401
      | BlogPostPublicDeleteStatus403
      | BlogPostPublicDeleteStatus404
      | BlogPostPublicDeleteStatus500
      | BlogPostPublicDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBlogPostPublicDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
