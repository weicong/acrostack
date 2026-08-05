/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogFeatureGetOrDefaultPathBlogId,
  BlogFeatureGetOrDefaultPathFeatureName,
  BlogFeatureGetOrDefaultStatus200,
  BlogFeatureGetOrDefaultStatus400,
  BlogFeatureGetOrDefaultStatus401,
  BlogFeatureGetOrDefaultStatus403,
  BlogFeatureGetOrDefaultStatus404,
  BlogFeatureGetOrDefaultStatus500,
  BlogFeatureGetOrDefaultStatus501,
} from "../../models/blogFeature/BlogFeatureGetOrDefault.ts";

function getBlogFeatureGetOrDefaultUrl(
  blogId: BlogFeatureGetOrDefaultPathBlogId,
  featureName: BlogFeatureGetOrDefaultPathFeatureName,
) {
  const res = {
    method: "GET",
    url: `/api/cms-kit/blogs/${blogId}/features/${featureName}` as const,
  };

  return res;
}

/**
 * {@link /api/cms-kit/blogs/:blogId/features/:featureName}
 */
export async function blogFeatureGetOrDefault(
  blogId: BlogFeatureGetOrDefaultPathBlogId,
  featureName: BlogFeatureGetOrDefaultPathFeatureName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogFeatureGetOrDefaultStatus200,
    ResponseErrorConfig<
      | BlogFeatureGetOrDefaultStatus400
      | BlogFeatureGetOrDefaultStatus401
      | BlogFeatureGetOrDefaultStatus403
      | BlogFeatureGetOrDefaultStatus404
      | BlogFeatureGetOrDefaultStatus500
      | BlogFeatureGetOrDefaultStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getBlogFeatureGetOrDefaultUrl(blogId, featureName).url.toString(),
    ...requestConfig,
  });

  return res.data;
}
