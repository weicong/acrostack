/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostGetPathId,
  BlogPostGetStatus200,
  BlogPostGetStatus400,
  BlogPostGetStatus401,
  BlogPostGetStatus403,
  BlogPostGetStatus404,
  BlogPostGetStatus500,
  BlogPostGetStatus501,
} from "../../models/blogPost/BlogPostGet.ts";

function getBlogPostGetUrl(id: BlogPostGetPathId) {
  const res = { method: "GET", url: `/api/app/blog-post/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog-post/:id}
 */
export async function blogPostGet(
  id: BlogPostGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogPostGetStatus200,
    ResponseErrorConfig<
      | BlogPostGetStatus400
      | BlogPostGetStatus401
      | BlogPostGetStatus403
      | BlogPostGetStatus404
      | BlogPostGetStatus500
      | BlogPostGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogPostGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
