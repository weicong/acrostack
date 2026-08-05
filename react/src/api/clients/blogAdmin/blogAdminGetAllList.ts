/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminGetAllListStatus200,
  BlogAdminGetAllListStatus400,
  BlogAdminGetAllListStatus401,
  BlogAdminGetAllListStatus403,
  BlogAdminGetAllListStatus404,
  BlogAdminGetAllListStatus500,
  BlogAdminGetAllListStatus501,
} from "../../models/blogAdmin/BlogAdminGetAllList.ts";

function getBlogAdminGetAllListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs/all` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs/all}
 */
export async function blogAdminGetAllList(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogAdminGetAllListStatus200,
    ResponseErrorConfig<
      | BlogAdminGetAllListStatus400
      | BlogAdminGetAllListStatus401
      | BlogAdminGetAllListStatus403
      | BlogAdminGetAllListStatus404
      | BlogAdminGetAllListStatus500
      | BlogAdminGetAllListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogAdminGetAllListUrl().url.toString(), ...requestConfig });

  return res.data;
}
