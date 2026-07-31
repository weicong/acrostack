/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogGetListQueryFilter,
  BlogGetListQuerySorting,
  BlogGetListQuerySkipCount,
  BlogGetListQueryMaxResultCount,
  BlogGetListStatus200,
  BlogGetListStatus400,
  BlogGetListStatus401,
  BlogGetListStatus403,
  BlogGetListStatus404,
  BlogGetListStatus500,
  BlogGetListStatus501,
} from "../../models/blog/BlogGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogGetList } from "../../clients/blog/blogGetList.ts";

export const blogGetListQueryKey = (params?: {
  Filter?: BlogGetListQueryFilter;
  Sorting?: BlogGetListQuerySorting;
  SkipCount?: BlogGetListQuerySkipCount;
  MaxResultCount?: BlogGetListQueryMaxResultCount;
}) => [{ url: "/api/app/blog" }, ...(params ? [params] : [])] as const;

type BlogGetListQueryKey = ReturnType<typeof blogGetListQueryKey>;

export function blogGetListQueryOptions(
  params?: {
    Filter?: BlogGetListQueryFilter;
    Sorting?: BlogGetListQuerySorting;
    SkipCount?: BlogGetListQuerySkipCount;
    MaxResultCount?: BlogGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogGetListQueryKey(params);
  return queryOptions<
    BlogGetListStatus200,
    ResponseErrorConfig<
      | BlogGetListStatus400
      | BlogGetListStatus401
      | BlogGetListStatus403
      | BlogGetListStatus404
      | BlogGetListStatus500
      | BlogGetListStatus501
    >,
    BlogGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog}
 */
export function useBlogGetList<
  TData = BlogGetListStatus200,
  TQueryData = BlogGetListStatus200,
  TQueryKey extends QueryKey = BlogGetListQueryKey,
>(
  params?: {
    Filter?: BlogGetListQueryFilter;
    Sorting?: BlogGetListQuerySorting;
    SkipCount?: BlogGetListQuerySkipCount;
    MaxResultCount?: BlogGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogGetListStatus200,
        ResponseErrorConfig<
          | BlogGetListStatus400
          | BlogGetListStatus401
          | BlogGetListStatus403
          | BlogGetListStatus404
          | BlogGetListStatus500
          | BlogGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogGetListQueryKey(params);

  const query = useQuery(
    {
      ...blogGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogGetListStatus400
      | BlogGetListStatus401
      | BlogGetListStatus403
      | BlogGetListStatus404
      | BlogGetListStatus500
      | BlogGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
