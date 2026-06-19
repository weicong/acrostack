/* oxlint-disable */

import client from "@kubb/plugin-client/clients/axios";
import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  UserLookupSearchQueryFilter,
  UserLookupSearchQuerySorting,
  UserLookupSearchQuerySkipCount,
  UserLookupSearchQueryMaxResultCount,
  UserLookupSearchQueryExtraProperties,
  UserLookupSearchStatus200,
  UserLookupSearchStatus400,
  UserLookupSearchStatus401,
  UserLookupSearchStatus403,
  UserLookupSearchStatus404,
  UserLookupSearchStatus500,
  UserLookupSearchStatus501,
} from "../../models/userLookup/UserLookupSearch.ts";

function getUserLookupSearchUrl() {
  const res = { method: "GET", url: `/api/identity/users/lookup/search` as const };

  return res;
}

/**
 * {@link /api/identity/users/lookup/search}
 */
export async function userLookupSearch(
  params?: {
    Filter?: UserLookupSearchQueryFilter;
    Sorting?: UserLookupSearchQuerySorting;
    SkipCount?: UserLookupSearchQuerySkipCount;
    MaxResultCount?: UserLookupSearchQueryMaxResultCount;
    ExtraProperties?: UserLookupSearchQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UserLookupSearchStatus200,
    ResponseErrorConfig<
      | UserLookupSearchStatus400
      | UserLookupSearchStatus401
      | UserLookupSearchStatus403
      | UserLookupSearchStatus404
      | UserLookupSearchStatus500
      | UserLookupSearchStatus501
    >,
    unknown
  >({ method: "GET", url: getUserLookupSearchUrl().url.toString(), params, ...requestConfig });

  return res.data;
}
