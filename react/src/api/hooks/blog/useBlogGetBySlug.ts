/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogGetBySlugQuerySlug,
  BlogGetBySlugStatus200,
  BlogGetBySlugStatus400,
  BlogGetBySlugStatus401,
  BlogGetBySlugStatus403,
  BlogGetBySlugStatus404,
  BlogGetBySlugStatus500,
  BlogGetBySlugStatus501,
} from "../../models/blog/BlogGetBySlug.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogGetBySlug } from "../../clients/blog/blogGetBySlug.ts";

export const blogGetBySlugQueryKey = (params?: { slug?: BlogGetBySlugQuerySlug }) =>
  [{ url: "/api/app/blog/by-slug" }, ...(params ? [params] : [])] as const;

type BlogGetBySlugQueryKey = ReturnType<typeof blogGetBySlugQueryKey>;

export function blogGetBySlugQueryOptions(
  params?: { slug?: BlogGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogGetBySlugQueryKey(params);
  return queryOptions<
    BlogGetBySlugStatus200,
    ResponseErrorConfig<
      | BlogGetBySlugStatus400
      | BlogGetBySlugStatus401
      | BlogGetBySlugStatus403
      | BlogGetBySlugStatus404
      | BlogGetBySlugStatus500
      | BlogGetBySlugStatus501
    >,
    BlogGetBySlugStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogGetBySlug(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog/by-slug}
 */
export function useBlogGetBySlug<
  TData = BlogGetBySlugStatus200,
  TQueryData = BlogGetBySlugStatus200,
  TQueryKey extends QueryKey = BlogGetBySlugQueryKey,
>(
  params?: { slug?: BlogGetBySlugQuerySlug },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogGetBySlugStatus200,
        ResponseErrorConfig<
          | BlogGetBySlugStatus400
          | BlogGetBySlugStatus401
          | BlogGetBySlugStatus403
          | BlogGetBySlugStatus404
          | BlogGetBySlugStatus500
          | BlogGetBySlugStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogGetBySlugQueryKey(params);

  const query = useQuery(
    {
      ...blogGetBySlugQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogGetBySlugStatus400
      | BlogGetBySlugStatus401
      | BlogGetBySlugStatus403
      | BlogGetBySlugStatus404
      | BlogGetBySlugStatus500
      | BlogGetBySlugStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
