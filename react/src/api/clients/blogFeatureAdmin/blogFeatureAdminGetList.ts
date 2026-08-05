/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogFeatureAdminGetListPathBlogId,
  BlogFeatureAdminGetListStatus200,
  BlogFeatureAdminGetListStatus400,
  BlogFeatureAdminGetListStatus401,
  BlogFeatureAdminGetListStatus403,
  BlogFeatureAdminGetListStatus404,
  BlogFeatureAdminGetListStatus500,
  BlogFeatureAdminGetListStatus501,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminGetList.ts";

function getBlogFeatureAdminGetListUrl(blogId: BlogFeatureAdminGetListPathBlogId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs/${blogId}/features` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export async function blogFeatureAdminGetList(
  blogId: BlogFeatureAdminGetListPathBlogId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogFeatureAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogFeatureAdminGetListStatus400
      | BlogFeatureAdminGetListStatus401
      | BlogFeatureAdminGetListStatus403
      | BlogFeatureAdminGetListStatus404
      | BlogFeatureAdminGetListStatus500
      | BlogFeatureAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogFeatureAdminGetListUrl(blogId).url.toString(), ...requestConfig });

  return res.data;
}
