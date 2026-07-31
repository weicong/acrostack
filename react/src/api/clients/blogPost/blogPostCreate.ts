/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogPostCreateData,
  BlogPostCreateStatus200,
  BlogPostCreateStatus400,
  BlogPostCreateStatus401,
  BlogPostCreateStatus403,
  BlogPostCreateStatus404,
  BlogPostCreateStatus500,
  BlogPostCreateStatus501,
} from "../../models/blogPost/BlogPostCreate.ts";

function getBlogPostCreateUrl() {
  const res = { method: "POST", url: `/api/app/blog-post` as const };

  return res;
}

/**
 * {@link /api/app/blog-post}
 */
export async function blogPostCreate(
  data?: BlogPostCreateData,
  config: Partial<RequestConfig<BlogPostCreateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogPostCreateStatus200,
    ResponseErrorConfig<
      | BlogPostCreateStatus400
      | BlogPostCreateStatus401
      | BlogPostCreateStatus403
      | BlogPostCreateStatus404
      | BlogPostCreateStatus500
      | BlogPostCreateStatus501
    >,
    BlogPostCreateData
  >({
    method: "POST",
    url: getBlogPostCreateUrl().url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
