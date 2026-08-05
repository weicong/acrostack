/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicGetAuthorsHasBlogPostsQueryFilter,
  BlogPostPublicGetAuthorsHasBlogPostsQuerySorting,
  BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount,
  BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount,
  BlogPostPublicGetAuthorsHasBlogPostsStatus200,
  BlogPostPublicGetAuthorsHasBlogPostsStatus400,
  BlogPostPublicGetAuthorsHasBlogPostsStatus401,
  BlogPostPublicGetAuthorsHasBlogPostsStatus403,
  BlogPostPublicGetAuthorsHasBlogPostsStatus404,
  BlogPostPublicGetAuthorsHasBlogPostsStatus500,
  BlogPostPublicGetAuthorsHasBlogPostsStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorsHasBlogPosts.ts";

function getBlogPostPublicGetAuthorsHasBlogPostsUrl() {
  const res = { method: "GET", url: `/api/cms-kit-public/blog-posts/authors` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/authors}
 */
export async function blogPostPublicGetAuthorsHasBlogPosts(
  params?: {
    Filter?: BlogPostPublicGetAuthorsHasBlogPostsQueryFilter;
    Sorting?: BlogPostPublicGetAuthorsHasBlogPostsQuerySorting;
    SkipCount?: BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicGetAuthorsHasBlogPostsStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorsHasBlogPostsStatus400
      | BlogPostPublicGetAuthorsHasBlogPostsStatus401
      | BlogPostPublicGetAuthorsHasBlogPostsStatus403
      | BlogPostPublicGetAuthorsHasBlogPostsStatus404
      | BlogPostPublicGetAuthorsHasBlogPostsStatus500
      | BlogPostPublicGetAuthorsHasBlogPostsStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostPublicGetAuthorsHasBlogPostsUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
