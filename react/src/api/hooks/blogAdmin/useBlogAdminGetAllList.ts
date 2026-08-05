/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogAdminGetAllListStatus200,
  BlogAdminGetAllListStatus400,
  BlogAdminGetAllListStatus401,
  BlogAdminGetAllListStatus403,
  BlogAdminGetAllListStatus404,
  BlogAdminGetAllListStatus500,
  BlogAdminGetAllListStatus501,
} from "../../models/blogAdmin/BlogAdminGetAllList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogAdminGetAllList } from "../../clients/blogAdmin/blogAdminGetAllList.ts";

export const blogAdminGetAllListQueryKey = () => [{ url: "/api/cms-kit-admin/blogs/all" }] as const;

type BlogAdminGetAllListQueryKey = ReturnType<typeof blogAdminGetAllListQueryKey>;

export function blogAdminGetAllListQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogAdminGetAllListQueryKey();
  return queryOptions<
    BlogAdminGetAllListStatus200,
    ResponseErrorConfig<
      | BlogAdminGetAllListStatus400
      | BlogAdminGetAllListStatus401
      | BlogAdminGetAllListStatus403
      | BlogAdminGetAllListStatus404
      | BlogAdminGetAllListStatus500
      | BlogAdminGetAllListStatus501
    >,
    BlogAdminGetAllListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogAdminGetAllList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/all}
 */
export function useBlogAdminGetAllList<
  TData = BlogAdminGetAllListStatus200,
  TQueryData = BlogAdminGetAllListStatus200,
  TQueryKey extends QueryKey = BlogAdminGetAllListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogAdminGetAllListStatus200,
        ResponseErrorConfig<
          | BlogAdminGetAllListStatus400
          | BlogAdminGetAllListStatus401
          | BlogAdminGetAllListStatus403
          | BlogAdminGetAllListStatus404
          | BlogAdminGetAllListStatus500
          | BlogAdminGetAllListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogAdminGetAllListQueryKey();

  const query = useQuery(
    {
      ...blogAdminGetAllListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogAdminGetAllListStatus400
      | BlogAdminGetAllListStatus401
      | BlogAdminGetAllListStatus403
      | BlogAdminGetAllListStatus404
      | BlogAdminGetAllListStatus500
      | BlogAdminGetAllListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
