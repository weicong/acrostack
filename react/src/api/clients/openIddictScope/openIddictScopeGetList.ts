/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictScopeGetListQueryFilter,
  OpenIddictScopeGetListQuerySorting,
  OpenIddictScopeGetListQuerySkipCount,
  OpenIddictScopeGetListQueryMaxResultCount,
  OpenIddictScopeGetListStatus200,
  OpenIddictScopeGetListStatus400,
  OpenIddictScopeGetListStatus401,
  OpenIddictScopeGetListStatus403,
  OpenIddictScopeGetListStatus404,
  OpenIddictScopeGetListStatus500,
  OpenIddictScopeGetListStatus501,
} from "../../models/openIddictScope/OpenIddictScopeGetList.ts";

function getOpenIddictScopeGetListUrl() {
  const res = { method: "GET", url: `/api/app/open-iddict-scope` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export async function openIddictScopeGetList(
  params?: {
    Filter?: OpenIddictScopeGetListQueryFilter;
    Sorting?: OpenIddictScopeGetListQuerySorting;
    SkipCount?: OpenIddictScopeGetListQuerySkipCount;
    MaxResultCount?: OpenIddictScopeGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictScopeGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeGetListStatus400
      | OpenIddictScopeGetListStatus401
      | OpenIddictScopeGetListStatus403
      | OpenIddictScopeGetListStatus404
      | OpenIddictScopeGetListStatus500
      | OpenIddictScopeGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getOpenIddictScopeGetListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
