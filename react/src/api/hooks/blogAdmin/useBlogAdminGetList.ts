/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogAdminGetListQueryFilter,
  BlogAdminGetListQuerySorting,
  BlogAdminGetListQuerySkipCount,
  BlogAdminGetListQueryMaxResultCount,
  BlogAdminGetListStatus200,
  BlogAdminGetListStatus400,
  BlogAdminGetListStatus401,
  BlogAdminGetListStatus403,
  BlogAdminGetListStatus404,
  BlogAdminGetListStatus500,
  BlogAdminGetListStatus501,
} from "../../models/blogAdmin/BlogAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogAdminGetList } from "../../clients/blogAdmin/blogAdminGetList.ts";

export const blogAdminGetListQueryKey = (params?: {
  Filter?: BlogAdminGetListQueryFilter;
  Sorting?: BlogAdminGetListQuerySorting;
  SkipCount?: BlogAdminGetListQuerySkipCount;
  MaxResultCount?: BlogAdminGetListQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/blogs" }, ...(params ? [params] : [])] as const;

type BlogAdminGetListQueryKey = ReturnType<typeof blogAdminGetListQueryKey>;

export function blogAdminGetListQueryOptions(
  params?: {
    Filter?: BlogAdminGetListQueryFilter;
    Sorting?: BlogAdminGetListQuerySorting;
    SkipCount?: BlogAdminGetListQuerySkipCount;
    MaxResultCount?: BlogAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogAdminGetListQueryKey(params);
  return queryOptions<
    BlogAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogAdminGetListStatus400
      | BlogAdminGetListStatus401
      | BlogAdminGetListStatus403
      | BlogAdminGetListStatus404
      | BlogAdminGetListStatus500
      | BlogAdminGetListStatus501
    >,
    BlogAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogAdminGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs}
 */
export function useBlogAdminGetList<
  TData = BlogAdminGetListStatus200,
  TQueryData = BlogAdminGetListStatus200,
  TQueryKey extends QueryKey = BlogAdminGetListQueryKey,
>(
  params?: {
    Filter?: BlogAdminGetListQueryFilter;
    Sorting?: BlogAdminGetListQuerySorting;
    SkipCount?: BlogAdminGetListQuerySkipCount;
    MaxResultCount?: BlogAdminGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogAdminGetListStatus200,
        ResponseErrorConfig<
          | BlogAdminGetListStatus400
          | BlogAdminGetListStatus401
          | BlogAdminGetListStatus403
          | BlogAdminGetListStatus404
          | BlogAdminGetListStatus500
          | BlogAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogAdminGetListQueryKey(params);

  const query = useQuery(
    {
      ...blogAdminGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogAdminGetListStatus400
      | BlogAdminGetListStatus401
      | BlogAdminGetListStatus403
      | BlogAdminGetListStatus404
      | BlogAdminGetListStatus500
      | BlogAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
