/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostUpdatePathId,
  BlogPostUpdateData,
  BlogPostUpdateStatus200,
  BlogPostUpdateStatus400,
  BlogPostUpdateStatus401,
  BlogPostUpdateStatus403,
  BlogPostUpdateStatus404,
  BlogPostUpdateStatus500,
  BlogPostUpdateStatus501,
} from "../../models/blogPost/BlogPostUpdate.ts";

function getBlogPostUpdateUrl(id: BlogPostUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/blog-post/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog-post/:id}
 */
export async function blogPostUpdate(
  id: BlogPostUpdatePathId,
  data?: BlogPostUpdateData,
  config: Partial<RequestConfig<BlogPostUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostUpdateStatus200,
    ResponseErrorConfig<
      | BlogPostUpdateStatus400
      | BlogPostUpdateStatus401
      | BlogPostUpdateStatus403
      | BlogPostUpdateStatus404
      | BlogPostUpdateStatus500
      | BlogPostUpdateStatus501
    >,
    BlogPostUpdateData
  >({
    method: "PUT",
    url: getBlogPostUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
