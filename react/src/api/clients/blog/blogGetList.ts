/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  BlogGetListQueryFilter,
  BlogGetListQuerySorting,
  BlogGetListQuerySkipCount,
  BlogGetListQueryMaxResultCount,
  BlogGetListStatus200,
  BlogGetListStatus400,
  BlogGetListStatus401,
  BlogGetListStatus403,
  BlogGetListStatus404,
  BlogGetListStatus500,
  BlogGetListStatus501,
} from "../../models/blog/BlogGetList.ts";

function getBlogGetListUrl() {
  const res = { method: "GET", url: `/api/app/blog` as const };

  return res;
}

/**
 * {@link /api/app/blog}
 */
export async function blogGetList(
  params?: {
    Filter?: BlogGetListQueryFilter;
    Sorting?: BlogGetListQuerySorting;
    SkipCount?: BlogGetListQuerySkipCount;
    MaxResultCount?: BlogGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    BlogGetListStatus200,
    ResponseErrorConfig<
      | BlogGetListStatus400
      | BlogGetListStatus401
      | BlogGetListStatus403
      | BlogGetListStatus404
      | BlogGetListStatus500
      | BlogGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getBlogGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
