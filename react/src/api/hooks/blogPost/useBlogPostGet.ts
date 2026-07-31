/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostGetPathId,
  BlogPostGetStatus200,
  BlogPostGetStatus400,
  BlogPostGetStatus401,
  BlogPostGetStatus403,
  BlogPostGetStatus404,
  BlogPostGetStatus500,
  BlogPostGetStatus501,
} from "../../models/blogPost/BlogPostGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostGet } from "../../clients/blogPost/blogPostGet.ts";

export const blogPostGetQueryKey = (id?: BlogPostGetPathId) =>
  [{ url: "/api/app/blog-post/:id", params: { id: id } }] as const;

type BlogPostGetQueryKey = ReturnType<typeof blogPostGetQueryKey>;

export function blogPostGetQueryOptions(
  id?: BlogPostGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostGetQueryKey(id);
  return queryOptions<
    BlogPostGetStatus200,
    ResponseErrorConfig<
      | BlogPostGetStatus400
      | BlogPostGetStatus401
      | BlogPostGetStatus403
      | BlogPostGetStatus404
      | BlogPostGetStatus500
      | BlogPostGetStatus501
    >,
    BlogPostGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog-post/:id}
 */
export function useBlogPostGet<
  TData = BlogPostGetStatus200,
  TQueryData = BlogPostGetStatus200,
  TQueryKey extends QueryKey = BlogPostGetQueryKey,
>(
  id?: BlogPostGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostGetStatus200,
        ResponseErrorConfig<
          | BlogPostGetStatus400
          | BlogPostGetStatus401
          | BlogPostGetStatus403
          | BlogPostGetStatus404
          | BlogPostGetStatus500
          | BlogPostGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostGetQueryKey(id);

  const query = useQuery(
    {
      ...blogPostGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostGetStatus400
      | BlogPostGetStatus401
      | BlogPostGetStatus403
      | BlogPostGetStatus404
      | BlogPostGetStatus500
      | BlogPostGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
