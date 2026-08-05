/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminDeletePathId,
  BlogAdminDeleteStatus200,
  BlogAdminDeleteStatus204,
  BlogAdminDeleteStatus400,
  BlogAdminDeleteStatus401,
  BlogAdminDeleteStatus403,
  BlogAdminDeleteStatus404,
  BlogAdminDeleteStatus500,
  BlogAdminDeleteStatus501,
} from "../../models/blogAdmin/BlogAdminDelete.ts";

function getBlogAdminDeleteUrl(id: BlogAdminDeletePathId) {
  const res = { method: "DELETE", url: `/api/cms-kit-admin/blogs/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export async function blogAdminDelete(
  id: BlogAdminDeletePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogAdminDeleteStatus200 | BlogAdminDeleteStatus204,
    ResponseErrorConfig<
      | BlogAdminDeleteStatus400
      | BlogAdminDeleteStatus401
      | BlogAdminDeleteStatus403
      | BlogAdminDeleteStatus404
      | BlogAdminDeleteStatus500
      | BlogAdminDeleteStatus501
    >,
    unknown
  >({ method: "DELETE", url: getBlogAdminDeleteUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
