/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
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
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageGetList } from "../../clients/page/pageGetList.ts";

export const pageGetListQueryKey = (params?: {
  Filter?: PageGetListQueryFilter;
  Sorting?: PageGetListQuerySorting;
  SkipCount?: PageGetListQuerySkipCount;
  MaxResultCount?: PageGetListQueryMaxResultCount;
}) => [{ url: "/api/app/page" }, ...(params ? [params] : [])] as const;

type PageGetListQueryKey = ReturnType<typeof pageGetListQueryKey>;

export function pageGetListQueryOptions(
  params?: {
    Filter?: PageGetListQueryFilter;
    Sorting?: PageGetListQuerySorting;
    SkipCount?: PageGetListQuerySkipCount;
    MaxResultCount?: PageGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pageGetListQueryKey(params);
  return queryOptions<
    PageGetListStatus200,
    ResponseErrorConfig<
      | PageGetListStatus400
      | PageGetListStatus401
      | PageGetListStatus403
      | PageGetListStatus404
      | PageGetListStatus500
      | PageGetListStatus501
    >,
    PageGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pageGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/page}
 */
export function usePageGetList<
  TData = PageGetListStatus200,
  TQueryData = PageGetListStatus200,
  TQueryKey extends QueryKey = PageGetListQueryKey,
>(
  params?: {
    Filter?: PageGetListQueryFilter;
    Sorting?: PageGetListQuerySorting;
    SkipCount?: PageGetListQuerySkipCount;
    MaxResultCount?: PageGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageGetListStatus200,
        ResponseErrorConfig<
          | PageGetListStatus400
          | PageGetListStatus401
          | PageGetListStatus403
          | PageGetListStatus404
          | PageGetListStatus500
          | PageGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pageGetListQueryKey(params);

  const query = useQuery(
    {
      ...pageGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageGetListStatus400
      | PageGetListStatus401
      | PageGetListStatus403
      | PageGetListStatus404
      | PageGetListStatus500
      | PageGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
