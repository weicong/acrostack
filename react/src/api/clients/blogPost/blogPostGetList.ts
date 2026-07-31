/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostGetListQueryFilter,
  BlogPostGetListQueryBlogId,
  BlogPostGetListQueryTag,
  BlogPostGetListQuerySorting,
  BlogPostGetListQuerySkipCount,
  BlogPostGetListQueryMaxResultCount,
  BlogPostGetListStatus200,
  BlogPostGetListStatus400,
  BlogPostGetListStatus401,
  BlogPostGetListStatus403,
  BlogPostGetListStatus404,
  BlogPostGetListStatus500,
  BlogPostGetListStatus501,
} from "../../models/blogPost/BlogPostGetList.ts";

function getBlogPostGetListUrl() {
  const res = { method: "GET", url: `/api/app/blog-post` as const };

  return res;
}

/**
 * {@link /api/app/blog-post}
 */
export async function blogPostGetList(
  params?: {
    Filter?: BlogPostGetListQueryFilter;
    BlogId?: BlogPostGetListQueryBlogId;
    Tag?: BlogPostGetListQueryTag;
    Sorting?: BlogPostGetListQuerySorting;
    SkipCount?: BlogPostGetListQuerySkipCount;
    MaxResultCount?: BlogPostGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostGetListStatus200,
    ResponseErrorConfig<
      | BlogPostGetListStatus400
      | BlogPostGetListStatus401
      | BlogPostGetListStatus403
      | BlogPostGetListStatus404
      | BlogPostGetListStatus500
      | BlogPostGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogPostGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
