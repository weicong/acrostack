/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminMoveAllBlogPostsPathBlogId,
  BlogAdminMoveAllBlogPostsQueryAssignToBlogId,
  BlogAdminMoveAllBlogPostsStatus200,
  BlogAdminMoveAllBlogPostsStatus204,
  BlogAdminMoveAllBlogPostsStatus400,
  BlogAdminMoveAllBlogPostsStatus401,
  BlogAdminMoveAllBlogPostsStatus403,
  BlogAdminMoveAllBlogPostsStatus404,
  BlogAdminMoveAllBlogPostsStatus500,
  BlogAdminMoveAllBlogPostsStatus501,
} from "../../models/blogAdmin/BlogAdminMoveAllBlogPosts.ts";

function getBlogAdminMoveAllBlogPostsUrl(blogId: BlogAdminMoveAllBlogPostsPathBlogId) {
  const res = {
    method: "PUT",
    url: `/api/cms-kit-admin/blogs/${blogId}/move-all-blog-posts` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/move-all-blog-posts}
 */
export async function blogAdminMoveAllBlogPosts(
  blogId: BlogAdminMoveAllBlogPostsPathBlogId,
  params?: { assignToBlogId?: BlogAdminMoveAllBlogPostsQueryAssignToBlogId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogAdminMoveAllBlogPostsStatus200 | BlogAdminMoveAllBlogPostsStatus204,
    ResponseErrorConfig<
      | BlogAdminMoveAllBlogPostsStatus400
      | BlogAdminMoveAllBlogPostsStatus401
      | BlogAdminMoveAllBlogPostsStatus403
      | BlogAdminMoveAllBlogPostsStatus404
      | BlogAdminMoveAllBlogPostsStatus500
      | BlogAdminMoveAllBlogPostsStatus501
    >,
    unknown
  >({
    method: "PUT",
    url: getBlogAdminMoveAllBlogPostsUrl(blogId).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
