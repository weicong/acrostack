/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogFeatureAdminSetPathBlogId,
  BlogFeatureAdminSetData,
  BlogFeatureAdminSetStatus200,
  BlogFeatureAdminSetStatus204,
  BlogFeatureAdminSetStatus400,
  BlogFeatureAdminSetStatus401,
  BlogFeatureAdminSetStatus403,
  BlogFeatureAdminSetStatus404,
  BlogFeatureAdminSetStatus500,
  BlogFeatureAdminSetStatus501,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminSet.ts";

function getBlogFeatureAdminSetUrl(blogId: BlogFeatureAdminSetPathBlogId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/blogs/${blogId}/features` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export async function blogFeatureAdminSet(
  blogId: BlogFeatureAdminSetPathBlogId,
  data?: BlogFeatureAdminSetData,
  config: Partial<RequestConfig<BlogFeatureAdminSetData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogFeatureAdminSetStatus200 | BlogFeatureAdminSetStatus204,
    ResponseErrorConfig<
      | BlogFeatureAdminSetStatus400
      | BlogFeatureAdminSetStatus401
      | BlogFeatureAdminSetStatus403
      | BlogFeatureAdminSetStatus404
      | BlogFeatureAdminSetStatus500
      | BlogFeatureAdminSetStatus501
    >,
    BlogFeatureAdminSetData
  >({
    method: "PUT",
    url: getBlogFeatureAdminSetUrl(blogId).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
