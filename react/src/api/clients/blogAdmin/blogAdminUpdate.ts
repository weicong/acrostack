/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminUpdatePathId,
  BlogAdminUpdateData,
  BlogAdminUpdateStatus200,
  BlogAdminUpdateStatus400,
  BlogAdminUpdateStatus401,
  BlogAdminUpdateStatus403,
  BlogAdminUpdateStatus404,
  BlogAdminUpdateStatus500,
  BlogAdminUpdateStatus501,
} from "../../models/blogAdmin/BlogAdminUpdate.ts";

function getBlogAdminUpdateUrl(id: BlogAdminUpdatePathId) {
  const res = { method: "PUT", url: `/api/cms-kit-admin/blogs/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export async function blogAdminUpdate(
  id: BlogAdminUpdatePathId,
  data?: BlogAdminUpdateData,
  config: Partial<RequestConfig<BlogAdminUpdateData>> & {
    client?: Client;
    contentType?: "application/json" | "text/json" | "application/*+json";
  } = {},
) {
  const { client: request = client, contentType = "application/json", ...requestConfig } = config;

  const requestData = data;

  const res = await request<
    BlogAdminUpdateStatus200,
    ResponseErrorConfig<
      | BlogAdminUpdateStatus400
      | BlogAdminUpdateStatus401
      | BlogAdminUpdateStatus403
      | BlogAdminUpdateStatus404
      | BlogAdminUpdateStatus500
      | BlogAdminUpdateStatus501
    >,
    BlogAdminUpdateData
  >({
    method: "PUT",
    url: getBlogAdminUpdateUrl(id).url.toString(),
    data: requestData,
    contentType,
    ...requestConfig,
  });

  return res.data;
}
