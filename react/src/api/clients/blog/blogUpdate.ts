/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogUpdatePathId,
  BlogUpdateData,
  BlogUpdateStatus200,
  BlogUpdateStatus400,
  BlogUpdateStatus401,
  BlogUpdateStatus403,
  BlogUpdateStatus404,
  BlogUpdateStatus500,
  BlogUpdateStatus501,
} from "../../models/blog/BlogUpdate.ts";

function getBlogUpdateUrl(id: BlogUpdatePathId) {
  const res = { method: "PUT", url: `/api/app/blog/${id}` as const };

  return res;
}

/**
 * {@link /api/app/blog/:id}
 */
export async function blogUpdate(
  id: BlogUpdatePathId,
  data?: BlogUpdateData,
  config: Partial<RequestConfig<BlogUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogUpdateStatus200,
    ResponseErrorConfig<
      | BlogUpdateStatus400
      | BlogUpdateStatus401
      | BlogUpdateStatus403
      | BlogUpdateStatus404
      | BlogUpdateStatus500
      | BlogUpdateStatus501
    >,
    BlogUpdateData
  >({
    method: "PUT",
    url: getBlogUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
