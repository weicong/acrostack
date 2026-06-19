/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
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
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupSearch } from "../../clients/userLookup/userLookupSearch.ts";

export const userLookupSearchQueryKey = (params?: {
  Filter?: UserLookupSearchQueryFilter;
  Sorting?: UserLookupSearchQuerySorting;
  SkipCount?: UserLookupSearchQuerySkipCount;
  MaxResultCount?: UserLookupSearchQueryMaxResultCount;
  ExtraProperties?: UserLookupSearchQueryExtraProperties;
}) => [{ url: "/api/identity/users/lookup/search" }, ...(params ? [params] : [])] as const;

type UserLookupSearchQueryKey = ReturnType<typeof userLookupSearchQueryKey>;

export function userLookupSearchQueryOptions(
  params?: {
    Filter?: UserLookupSearchQueryFilter;
    Sorting?: UserLookupSearchQuerySorting;
    SkipCount?: UserLookupSearchQuerySkipCount;
    MaxResultCount?: UserLookupSearchQueryMaxResultCount;
    ExtraProperties?: UserLookupSearchQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userLookupSearchQueryKey(params);
  return queryOptions<
    UserLookupSearchStatus200,
    ResponseErrorConfig<
      | UserLookupSearchStatus400
      | UserLookupSearchStatus401
      | UserLookupSearchStatus403
      | UserLookupSearchStatus404
      | UserLookupSearchStatus500
      | UserLookupSearchStatus501
    >,
    UserLookupSearchStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return userLookupSearch(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/lookup/search}
 */
export function useUserLookupSearch<
  TData = UserLookupSearchStatus200,
  TQueryData = UserLookupSearchStatus200,
  TQueryKey extends QueryKey = UserLookupSearchQueryKey,
>(
  params?: {
    Filter?: UserLookupSearchQueryFilter;
    Sorting?: UserLookupSearchQuerySorting;
    SkipCount?: UserLookupSearchQuerySkipCount;
    MaxResultCount?: UserLookupSearchQueryMaxResultCount;
    ExtraProperties?: UserLookupSearchQueryExtraProperties;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupSearchStatus200,
        ResponseErrorConfig<
          | UserLookupSearchStatus400
          | UserLookupSearchStatus401
          | UserLookupSearchStatus403
          | UserLookupSearchStatus404
          | UserLookupSearchStatus500
          | UserLookupSearchStatus501
        >,
        TData,
        TQueryData,
        TQueryKey
      >
    > & { client?: QueryClient };
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? userLookupSearchQueryKey(params);

  const query = useQuery(
    {
      ...userLookupSearchQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupSearchStatus400
      | UserLookupSearchStatus401
      | UserLookupSearchStatus403
      | UserLookupSearchStatus404
      | UserLookupSearchStatus500
      | UserLookupSearchStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
