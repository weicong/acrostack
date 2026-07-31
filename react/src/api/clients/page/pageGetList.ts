/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageGetListQueryFilter,
  PageGetListQuerySorting,
  PageGetListQuerySkipCount,
  PageGetListQueryMaxResultCount,
  PageGetListStatus200,
  PageGetListStatus400,
  PageGetListStatus401,
  PageGetListStatus403,
  PageGetListStatus404,
  PageGetListStatus500,
  PageGetListStatus501,
} from "../../models/page/PageGetList.ts";

function getPageGetListUrl() {
  const res = { method: "GET", url: `/api/app/page` as const };

  return res;
}

/**
 * {@link /api/app/page}
 */
export async function pageGetList(
  params?: {
    Filter?: PageGetListQueryFilter;
    Sorting?: PageGetListQuerySorting;
    SkipCount?: PageGetListQuerySkipCount;
    MaxResultCount?: PageGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageGetListStatus200,
    ResponseErrorConfig<
      | PageGetListStatus400
      | PageGetListStatus401
      | PageGetListStatus403
      | PageGetListStatus404
      | PageGetListStatus500
      | PageGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getPageGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
