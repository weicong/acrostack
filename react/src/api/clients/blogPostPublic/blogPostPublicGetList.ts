/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicGetListPathBlogSlug,
  BlogPostPublicGetListQueryAuthorId,
  BlogPostPublicGetListQueryTagId,
  BlogPostPublicGetListQueryFilterOnFavorites,
  BlogPostPublicGetListQuerySorting,
  BlogPostPublicGetListQuerySkipCount,
  BlogPostPublicGetListQueryMaxResultCount,
  BlogPostPublicGetListStatus200,
  BlogPostPublicGetListStatus400,
  BlogPostPublicGetListStatus401,
  BlogPostPublicGetListStatus403,
  BlogPostPublicGetListStatus404,
  BlogPostPublicGetListStatus500,
  BlogPostPublicGetListStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetList.ts";

function getBlogPostPublicGetListUrl(blogSlug: BlogPostPublicGetListPathBlogSlug) {
  const res = { method: "GET", url: `/api/cms-kit-public/blog-posts/${blogSlug}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug}
 */
export async function blogPostPublicGetList(
  blogSlug: BlogPostPublicGetListPathBlogSlug,
  params?: {
    AuthorId?: BlogPostPublicGetListQueryAuthorId;
    TagId?: BlogPostPublicGetListQueryTagId;
    FilterOnFavorites?: BlogPostPublicGetListQueryFilterOnFavorites;
    Sorting?: BlogPostPublicGetListQuerySorting;
    SkipCount?: BlogPostPublicGetListQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicGetListStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetListStatus400
      | BlogPostPublicGetListStatus401
      | BlogPostPublicGetListStatus403
      | BlogPostPublicGetListStatus404
      | BlogPostPublicGetListStatus500
      | BlogPostPublicGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostPublicGetListUrl(blogSlug).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
