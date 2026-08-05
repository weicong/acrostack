/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostAdminGetListQueryFilter,
  BlogPostAdminGetListQueryBlogId,
  BlogPostAdminGetListQueryAuthorId,
  BlogPostAdminGetListQueryTagId,
  BlogPostAdminGetListQueryStatus,
  BlogPostAdminGetListQuerySorting,
  BlogPostAdminGetListQuerySkipCount,
  BlogPostAdminGetListQueryMaxResultCount,
  BlogPostAdminGetListStatus200,
  BlogPostAdminGetListStatus400,
  BlogPostAdminGetListStatus401,
  BlogPostAdminGetListStatus403,
  BlogPostAdminGetListStatus404,
  BlogPostAdminGetListStatus500,
  BlogPostAdminGetListStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminGetList.ts";

function getBlogPostAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs/blog-posts` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export async function blogPostAdminGetList(
  params?: {
    Filter?: BlogPostAdminGetListQueryFilter;
    BlogId?: BlogPostAdminGetListQueryBlogId;
    AuthorId?: BlogPostAdminGetListQueryAuthorId;
    TagId?: BlogPostAdminGetListQueryTagId;
    Status?: BlogPostAdminGetListQueryStatus;
    Sorting?: BlogPostAdminGetListQuerySorting;
    SkipCount?: BlogPostAdminGetListQuerySkipCount;
    MaxResultCount?: BlogPostAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogPostAdminGetListStatus400
      | BlogPostAdminGetListStatus401
      | BlogPostAdminGetListStatus403
      | BlogPostAdminGetListStatus404
      | BlogPostAdminGetListStatus500
      | BlogPostAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogPostAdminGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
