/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  PageAdminGetListQueryFilter,
  PageAdminGetListQueryStatus,
  PageAdminGetListQuerySorting,
  PageAdminGetListQuerySkipCount,
  PageAdminGetListQueryMaxResultCount,
  PageAdminGetListStatus200,
  PageAdminGetListStatus400,
  PageAdminGetListStatus401,
  PageAdminGetListStatus403,
  PageAdminGetListStatus404,
  PageAdminGetListStatus500,
  PageAdminGetListStatus501,
} from "../../models/pageAdmin/PageAdminGetList.ts";

function getPageAdminGetListUrl() {
  const res = { method: "GET", url: `/api/cms-kit-admin/pages` as const };

  return res;
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export async function pageAdminGetList(
  params?: {
    Filter?: PageAdminGetListQueryFilter;
    Status?: PageAdminGetListQueryStatus;
    Sorting?: PageAdminGetListQuerySorting;
    SkipCount?: PageAdminGetListQuerySkipCount;
    MaxResultCount?: PageAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PageAdminGetListStatus200,
    ResponseErrorConfig<
      | PageAdminGetListStatus400
      | PageAdminGetListStatus401
      | PageAdminGetListStatus403
      | PageAdminGetListStatus404
      | PageAdminGetListStatus500
      | PageAdminGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getPageAdminGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
