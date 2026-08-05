/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostPublicGetPathBlogSlug,
  BlogPostPublicGetPathBlogPostSlug,
  BlogPostPublicGetStatus200,
  BlogPostPublicGetStatus400,
  BlogPostPublicGetStatus401,
  BlogPostPublicGetStatus403,
  BlogPostPublicGetStatus404,
  BlogPostPublicGetStatus500,
  BlogPostPublicGetStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGet.ts";

function getBlogPostPublicGetUrl(
  blogSlug: BlogPostPublicGetPathBlogSlug,
  blogPostSlug: BlogPostPublicGetPathBlogPostSlug,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit-public/blog-posts/${blogSlug}/${blogPostSlug}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug}
 */
export async function blogPostPublicGet(
  blogSlug: BlogPostPublicGetPathBlogSlug,
  blogPostSlug: BlogPostPublicGetPathBlogPostSlug,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostPublicGetStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetStatus400
      | BlogPostPublicGetStatus401
      | BlogPostPublicGetStatus403
      | BlogPostPublicGetStatus404
      | BlogPostPublicGetStatus500
      | BlogPostPublicGetStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogPostPublicGetUrl(blogSlug, blogPostSlug).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
