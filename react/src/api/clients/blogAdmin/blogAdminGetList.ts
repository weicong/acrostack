/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogAdminGetListQueryFilter,
  BlogAdminGetListQuerySorting,
  BlogAdminGetListQuerySkipCount,
  BlogAdminGetListQueryMaxResultCount,
  BlogAdminGetListStatus200,
  BlogAdminGetListStatus400,
  BlogAdminGetListStatus401,
  BlogAdminGetListStatus403,
  BlogAdminGetListStatus404,
  BlogAdminGetListStatus500,
  BlogAdminGetListStatus501,
} from "../../models/blogAdmin/BlogAdminGetList.ts";

function getBlogAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/blogs` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export async function blogAdminGetList(
  params?: {
    Filter?: BlogAdminGetListQueryFilter;
    Sorting?: BlogAdminGetListQuerySorting;
    SkipCount?: BlogAdminGetListQuerySkipCount;
    MaxResultCount?: BlogAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogAdminGetListStatus400
      | BlogAdminGetListStatus401
      | BlogAdminGetListStatus403
      | BlogAdminGetListStatus404
      | BlogAdminGetListStatus500
      | BlogAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogAdminGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
