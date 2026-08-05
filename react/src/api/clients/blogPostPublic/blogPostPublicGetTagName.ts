/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicGetTagNamePathId,
  BlogPostPublicGetTagNameQueryTagId,
  BlogPostPublicGetTagNameStatus200,
  BlogPostPublicGetTagNameStatus400,
  BlogPostPublicGetTagNameStatus401,
  BlogPostPublicGetTagNameStatus403,
  BlogPostPublicGetTagNameStatus404,
  BlogPostPublicGetTagNameStatus500,
  BlogPostPublicGetTagNameStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetTagName.ts";

function getBlogPostPublicGetTagNameUrl(id: BlogPostPublicGetTagNamePathId) {
  const res = { method: "GET", url: `/api/cms-kit-public/blog-posts/tags/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/tags/:id}
 */
export async function blogPostPublicGetTagName(
  id: BlogPostPublicGetTagNamePathId,
  params?: { tagId?: BlogPostPublicGetTagNameQueryTagId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicGetTagNameStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetTagNameStatus400
      | BlogPostPublicGetTagNameStatus401
      | BlogPostPublicGetTagNameStatus403
      | BlogPostPublicGetTagNameStatus404
      | BlogPostPublicGetTagNameStatus500
      | BlogPostPublicGetTagNameStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostPublicGetTagNameUrl(id).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
