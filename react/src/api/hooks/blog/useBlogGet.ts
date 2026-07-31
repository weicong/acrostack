/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogGetPathId,
  BlogGetStatus200,
  BlogGetStatus400,
  BlogGetStatus401,
  BlogGetStatus403,
  BlogGetStatus404,
  BlogGetStatus500,
  BlogGetStatus501,
} from "../../models/blog/BlogGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogGet } from "../../clients/blog/blogGet.ts";

export const blogGetQueryKey = (id?: BlogGetPathId) =>
  [{ url: "/api/app/blog/:id", params: { id: id } }] as const;

type BlogGetQueryKey = ReturnType<typeof blogGetQueryKey>;

export function blogGetQueryOptions(
  id?: BlogGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogGetQueryKey(id);
  return queryOptions<
    BlogGetStatus200,
    ResponseErrorConfig<
      | BlogGetStatus400
      | BlogGetStatus401
      | BlogGetStatus403
      | BlogGetStatus404
      | BlogGetStatus500
      | BlogGetStatus501
    >,
    BlogGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog/:id}
 */
export function useBlogGet<
  TData = BlogGetStatus200,
  TQueryData = BlogGetStatus200,
  TQueryKey extends QueryKey = BlogGetQueryKey,
>(
  id?: BlogGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogGetStatus200,
        ResponseErrorConfig<
          | BlogGetStatus400
          | BlogGetStatus401
          | BlogGetStatus403
          | BlogGetStatus404
          | BlogGetStatus500
          | BlogGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogGetQueryKey(id);

  const query = useQuery(
    {
      ...blogGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogGetStatus400
      | BlogGetStatus401
      | BlogGetStatus403
      | BlogGetStatus404
      | BlogGetStatus500
      | BlogGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
