/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminGetPathId,
  BlogAdminGetStatus200,
  BlogAdminGetStatus400,
  BlogAdminGetStatus401,
  BlogAdminGetStatus403,
  BlogAdminGetStatus404,
  BlogAdminGetStatus500,
  BlogAdminGetStatus501,
} from "../../models/blogAdmin/BlogAdminGet.ts";

function getBlogAdminGetUrl(id: BlogAdminGetPathId) {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs/${id}` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export async function blogAdminGet(
  id: BlogAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogAdminGetStatus200,
    ResponseErrorConfig<
      | BlogAdminGetStatus400
      | BlogAdminGetStatus401
      | BlogAdminGetStatus403
      | BlogAdminGetStatus404
      | BlogAdminGetStatus500
      | BlogAdminGetStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogAdminGetUrl(id).url.toString(), ...requestConfig });

  return res.data;
}
