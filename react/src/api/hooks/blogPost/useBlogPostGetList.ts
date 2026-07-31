/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostGetListQueryFilter,
  BlogPostGetListQueryBlogId,
  BlogPostGetListQueryTag,
  BlogPostGetListQuerySorting,
  BlogPostGetListQuerySkipCount,
  BlogPostGetListQueryMaxResultCount,
  BlogPostGetListStatus200,
  BlogPostGetListStatus400,
  BlogPostGetListStatus401,
  BlogPostGetListStatus403,
  BlogPostGetListStatus404,
  BlogPostGetListStatus500,
  BlogPostGetListStatus501,
} from "../../models/blogPost/BlogPostGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostGetList } from "../../clients/blogPost/blogPostGetList.ts";

export const blogPostGetListQueryKey = (params?: {
  Filter?: BlogPostGetListQueryFilter;
  BlogId?: BlogPostGetListQueryBlogId;
  Tag?: BlogPostGetListQueryTag;
  Sorting?: BlogPostGetListQuerySorting;
  SkipCount?: BlogPostGetListQuerySkipCount;
  MaxResultCount?: BlogPostGetListQueryMaxResultCount;
}) => [{ url: "/api/app/blog-post" }, ...(params ? [params] : [])] as const;

type BlogPostGetListQueryKey = ReturnType<typeof blogPostGetListQueryKey>;

export function blogPostGetListQueryOptions(
  params?: {
    Filter?: BlogPostGetListQueryFilter;
    BlogId?: BlogPostGetListQueryBlogId;
    Tag?: BlogPostGetListQueryTag;
    Sorting?: BlogPostGetListQuerySorting;
    SkipCount?: BlogPostGetListQuerySkipCount;
    MaxResultCount?: BlogPostGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostGetListQueryKey(params);
  return queryOptions<
    BlogPostGetListStatus200,
    ResponseErrorConfig<
      | BlogPostGetListStatus400
      | BlogPostGetListStatus401
      | BlogPostGetListStatus403
      | BlogPostGetListStatus404
      | BlogPostGetListStatus500
      | BlogPostGetListStatus501
    >,
    BlogPostGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog-post}
 */
export function useBlogPostGetList<
  TData = BlogPostGetListStatus200,
  TQueryData = BlogPostGetListStatus200,
  TQueryKey extends QueryKey = BlogPostGetListQueryKey,
>(
  params?: {
    Filter?: BlogPostGetListQueryFilter;
    BlogId?: BlogPostGetListQueryBlogId;
    Tag?: BlogPostGetListQueryTag;
    Sorting?: BlogPostGetListQuerySorting;
    SkipCount?: BlogPostGetListQuerySkipCount;
    MaxResultCount?: BlogPostGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostGetListStatus200,
        ResponseErrorConfig<
          | BlogPostGetListStatus400
          | BlogPostGetListStatus401
          | BlogPostGetListStatus403
          | BlogPostGetListStatus404
          | BlogPostGetListStatus500
          | BlogPostGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostGetListQueryKey(params);

  const query = useQuery(
    {
      ...blogPostGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostGetListStatus400
      | BlogPostGetListStatus401
      | BlogPostGetListStatus403
      | BlogPostGetListStatus404
      | BlogPostGetListStatus500
      | BlogPostGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
