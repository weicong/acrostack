/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogAdminGetPathId,
  BlogAdminGetStatus200,
  BlogAdminGetStatus400,
  BlogAdminGetStatus401,
  BlogAdminGetStatus403,
  BlogAdminGetStatus404,
  BlogAdminGetStatus500,
  BlogAdminGetStatus501,
} from "../../models/blogAdmin/BlogAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogAdminGet } from "../../clients/blogAdmin/blogAdminGet.ts";

export const blogAdminGetQueryKey = (id?: BlogAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/blogs/:id", params: { id: id } }] as const;

type BlogAdminGetQueryKey = ReturnType<typeof blogAdminGetQueryKey>;

export function blogAdminGetQueryOptions(
  id?: BlogAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogAdminGetQueryKey(id);
  return queryOptions<
    BlogAdminGetStatus200,
    ResponseErrorConfig<
      | BlogAdminGetStatus400
      | BlogAdminGetStatus401
      | BlogAdminGetStatus403
      | BlogAdminGetStatus404
      | BlogAdminGetStatus500
      | BlogAdminGetStatus501
    >,
    BlogAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function useBlogAdminGet<
  TData = BlogAdminGetStatus200,
  TQueryData = BlogAdminGetStatus200,
  TQueryKey extends QueryKey = BlogAdminGetQueryKey,
>(
  id?: BlogAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogAdminGetStatus200,
        ResponseErrorConfig<
          | BlogAdminGetStatus400
          | BlogAdminGetStatus401
          | BlogAdminGetStatus403
          | BlogAdminGetStatus404
          | BlogAdminGetStatus500
          | BlogAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...blogAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogAdminGetStatus400
      | BlogAdminGetStatus401
      | BlogAdminGetStatus403
      | BlogAdminGetStatus404
      | BlogAdminGetStatus500
      | BlogAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
