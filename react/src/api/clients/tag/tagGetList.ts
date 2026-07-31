/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  TagGetListQueryFilter,
  TagGetListQuerySorting,
  TagGetListQuerySkipCount,
  TagGetListQueryMaxResultCount,
  TagGetListStatus200,
  TagGetListStatus400,
  TagGetListStatus401,
  TagGetListStatus403,
  TagGetListStatus404,
  TagGetListStatus500,
  TagGetListStatus501,
} from "../../models/tag/TagGetList.ts";

function getTagGetListUrl() {
  const res = { method: "GET", url: `/api/app/tag` as const };

  return res;
}

/**
 * {@link /api/app/tag}
 */
export async function tagGetList(
  params?: {
    Filter?: TagGetListQueryFilter;
    Sorting?: TagGetListQuerySorting;
    SkipCount?: TagGetListQuerySkipCount;
    MaxResultCount?: TagGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    TagGetListStatus200,
    ResponseErrorConfig<
      | TagGetListStatus400
      | TagGetListStatus401
      | TagGetListStatus403
      | TagGetListStatus404
      | TagGetListStatus500
      | TagGetListStatus501
    >,
    unknown
  >({ method: "GET", url: getTagGetListUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
