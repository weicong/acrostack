/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BookGetListQueryFilter,
  BookGetListQueryType,
  BookGetListQuerySorting,
  BookGetListQuerySkipCount,
  BookGetListQueryMaxResultCount,
  BookGetListStatus200,
  BookGetListStatus400,
  BookGetListStatus401,
  BookGetListStatus403,
  BookGetListStatus404,
  BookGetListStatus500,
  BookGetListStatus501,
} from "../../models/book/BookGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { bookGetList } from "../../clients/book/bookGetList.ts";

export const bookGetListQueryKey = (params?: {
  Filter?: BookGetListQueryFilter;
  Type?: BookGetListQueryType;
  Sorting?: BookGetListQuerySorting;
  SkipCount?: BookGetListQuerySkipCount;
  MaxResultCount?: BookGetListQueryMaxResultCount;
}) => [{ url: "/api/app/book" }, ...(params ? [params] : [])] as const;

type BookGetListQueryKey = ReturnType<typeof bookGetListQueryKey>;

export function bookGetListQueryOptions(
  params?: {
    Filter?: BookGetListQueryFilter;
    Type?: BookGetListQueryType;
    Sorting?: BookGetListQuerySorting;
    SkipCount?: BookGetListQuerySkipCount;
    MaxResultCount?: BookGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = bookGetListQueryKey(params);
  return queryOptions<
    BookGetListStatus200,
    ResponseErrorConfig<
      | BookGetListStatus400
      | BookGetListStatus401
      | BookGetListStatus403
      | BookGetListStatus404
      | BookGetListStatus500
      | BookGetListStatus501
    >,
    BookGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return bookGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/book}
 */
export function useBookGetList<
  TData = BookGetListStatus200,
  TQueryData = BookGetListStatus200,
  TQueryKey extends QueryKey = BookGetListQueryKey,
>(
  params?: {
    Filter?: BookGetListQueryFilter;
    Type?: BookGetListQueryType;
    Sorting?: BookGetListQuerySorting;
    SkipCount?: BookGetListQuerySkipCount;
    MaxResultCount?: BookGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BookGetListStatus200,
        ResponseErrorConfig<
          | BookGetListStatus400
          | BookGetListStatus401
          | BookGetListStatus403
          | BookGetListStatus404
          | BookGetListStatus500
          | BookGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? bookGetListQueryKey(params);

  const query = useQuery(
    {
      ...bookGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BookGetListStatus400
      | BookGetListStatus401
      | BookGetListStatus403
      | BookGetListStatus404
      | BookGetListStatus500
      | BookGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
