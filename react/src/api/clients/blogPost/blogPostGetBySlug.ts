/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostGetBySlugPathBlogId,
  BlogPostGetBySlugQuerySlug,
  BlogPostGetBySlugStatus200,
  BlogPostGetBySlugStatus400,
  BlogPostGetBySlugStatus401,
  BlogPostGetBySlugStatus403,
  BlogPostGetBySlugStatus404,
  BlogPostGetBySlugStatus500,
  BlogPostGetBySlugStatus501,
} from "../../models/blogPost/BlogPostGetBySlug.ts";

function getBlogPostGetBySlugUrl(blogId: BlogPostGetBySlugPathBlogId) {
  const res = { method: "GET", url: `/api/app/blog-post/by-slug/${blogId}` as const };

  return res;
}

/**
 * {@link /api/app/blog-post/by-slug/:blogId}
 */
export async function blogPostGetBySlug(
  blogId: BlogPostGetBySlugPathBlogId,
  params?: { slug?: BlogPostGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostGetBySlugStatus200,
    ResponseErrorConfig<
      | BlogPostGetBySlugStatus400
      | BlogPostGetBySlugStatus401
      | BlogPostGetBySlugStatus403
      | BlogPostGetBySlugStatus404
      | BlogPostGetBySlugStatus500
      | BlogPostGetBySlugStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostGetBySlugUrl(blogId).url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
