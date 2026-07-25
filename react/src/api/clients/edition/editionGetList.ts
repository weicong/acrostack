/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  EditionGetListQueryFilter,
  EditionGetListQuerySorting,
  EditionGetListQuerySkipCount,
  EditionGetListQueryMaxResultCount,
  EditionGetListStatus200,
  EditionGetListStatus400,
  EditionGetListStatus401,
  EditionGetListStatus403,
  EditionGetListStatus404,
  EditionGetListStatus500,
  EditionGetListStatus501,
} from "../../models/edition/EditionGetList.ts";

function getEditionGetListUrl() {
  const res = { method: "GET", url: `/api/app/edition` as const };

  return res;
}

/**
 * {@link /api/app/edition}
 */
export async function editionGetList(
  params?: {
    Filter?: EditionGetListQueryFilter;
    Sorting?: EditionGetListQuerySorting;
    SkipCount?: EditionGetListQuerySkipCount;
    MaxResultCount?: EditionGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    EditionGetListStatus200,
    ResponseErrorConfig<
      | EditionGetListStatus400
      | EditionGetListStatus401
      | EditionGetListStatus403
      | EditionGetListStatus404
      | EditionGetListStatus500
      | EditionGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getEditionGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
