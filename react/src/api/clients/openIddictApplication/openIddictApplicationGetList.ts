/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  OpenIddictApplicationGetListQueryFilter,
  OpenIddictApplicationGetListQuerySorting,
  OpenIddictApplicationGetListQuerySkipCount,
  OpenIddictApplicationGetListQueryMaxResultCount,
  OpenIddictApplicationGetListStatus200,
  OpenIddictApplicationGetListStatus400,
  OpenIddictApplicationGetListStatus401,
  OpenIddictApplicationGetListStatus403,
  OpenIddictApplicationGetListStatus404,
  OpenIddictApplicationGetListStatus500,
  OpenIddictApplicationGetListStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGetList.ts";

function getOpenIddictApplicationGetListUrl() {
  const res = { method: "GET", url: `/api/app/open-iddict-application` as const };

  return res;
}

/**
 * {@link /api/app/open-iddict-application}
 */
export async function openIddictApplicationGetList(
  params?: {
    Filter?: OpenIddictApplicationGetListQueryFilter;
    Sorting?: OpenIddictApplicationGetListQuerySorting;
    SkipCount?: OpenIddictApplicationGetListQuerySkipCount;
    MaxResultCount?: OpenIddictApplicationGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    OpenIddictApplicationGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationGetListStatus400
      | OpenIddictApplicationGetListStatus401
      | OpenIddictApplicationGetListStatus403
      | OpenIddictApplicationGetListStatus404
      | OpenIddictApplicationGetListStatus500
      | OpenIddictApplicationGetListStatus501
    >,
    unknown
  >({
    method: "GET",
    url: getOpenIddictApplicationGetListUrl().url.toString(),
    params,
    ...requestConfig,
  });

  return res.data;
}
