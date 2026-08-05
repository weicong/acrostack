/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicGetAuthorHasBlogPostPathId,
  BlogPostPublicGetAuthorHasBlogPostStatus200,
  BlogPostPublicGetAuthorHasBlogPostStatus400,
  BlogPostPublicGetAuthorHasBlogPostStatus401,
  BlogPostPublicGetAuthorHasBlogPostStatus403,
  BlogPostPublicGetAuthorHasBlogPostStatus404,
  BlogPostPublicGetAuthorHasBlogPostStatus500,
  BlogPostPublicGetAuthorHasBlogPostStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorHasBlogPost.ts";

function getBlogPostPublicGetAuthorHasBlogPostUrl(id: BlogPostPublicGetAuthorHasBlogPostPathId) {
  const res = { method: "GET", url: `/api/cms-kit-public/blog-posts/authors/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/authors/:id}
 */
export async function blogPostPublicGetAuthorHasBlogPost(
  id: BlogPostPublicGetAuthorHasBlogPostPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicGetAuthorHasBlogPostStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorHasBlogPostStatus400
      | BlogPostPublicGetAuthorHasBlogPostStatus401
      | BlogPostPublicGetAuthorHasBlogPostStatus403
      | BlogPostPublicGetAuthorHasBlogPostStatus404
      | BlogPostPublicGetAuthorHasBlogPostStatus500
      | BlogPostPublicGetAuthorHasBlogPostStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostPublicGetAuthorHasBlogPostUrl(id).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
