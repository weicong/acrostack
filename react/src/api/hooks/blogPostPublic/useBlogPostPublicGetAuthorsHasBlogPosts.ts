/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostPublicGetAuthorsHasBlogPostsQueryFilter,
  BlogPostPublicGetAuthorsHasBlogPostsQuerySorting,
  BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount,
  BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount,
  BlogPostPublicGetAuthorsHasBlogPostsStatus200,
  BlogPostPublicGetAuthorsHasBlogPostsStatus400,
  BlogPostPublicGetAuthorsHasBlogPostsStatus401,
  BlogPostPublicGetAuthorsHasBlogPostsStatus403,
  BlogPostPublicGetAuthorsHasBlogPostsStatus404,
  BlogPostPublicGetAuthorsHasBlogPostsStatus500,
  BlogPostPublicGetAuthorsHasBlogPostsStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorsHasBlogPosts.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetAuthorsHasBlogPosts } from "../../clients/blogPostPublic/blogPostPublicGetAuthorsHasBlogPosts.ts";

export const blogPostPublicGetAuthorsHasBlogPostsQueryKey = (params?: {
  Filter?: BlogPostPublicGetAuthorsHasBlogPostsQueryFilter;
  Sorting?: BlogPostPublicGetAuthorsHasBlogPostsQuerySorting;
  SkipCount?: BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount;
  MaxResultCount?: BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-public/blog-posts/authors" }, ...(params ? [params] : [])] as const;

type BlogPostPublicGetAuthorsHasBlogPostsQueryKey = ReturnType<
  typeof blogPostPublicGetAuthorsHasBlogPostsQueryKey
>;

export function blogPostPublicGetAuthorsHasBlogPostsQueryOptions(
  params?: {
    Filter?: BlogPostPublicGetAuthorsHasBlogPostsQueryFilter;
    Sorting?: BlogPostPublicGetAuthorsHasBlogPostsQuerySorting;
    SkipCount?: BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostPublicGetAuthorsHasBlogPostsQueryKey(params);
  return queryOptions<
    BlogPostPublicGetAuthorsHasBlogPostsStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorsHasBlogPostsStatus400
      | BlogPostPublicGetAuthorsHasBlogPostsStatus401
      | BlogPostPublicGetAuthorsHasBlogPostsStatus403
      | BlogPostPublicGetAuthorsHasBlogPostsStatus404
      | BlogPostPublicGetAuthorsHasBlogPostsStatus500
      | BlogPostPublicGetAuthorsHasBlogPostsStatus501
    >,
    BlogPostPublicGetAuthorsHasBlogPostsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostPublicGetAuthorsHasBlogPosts(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/authors}
 */
export function useBlogPostPublicGetAuthorsHasBlogPosts<
  TData = BlogPostPublicGetAuthorsHasBlogPostsStatus200,
  TQueryData = BlogPostPublicGetAuthorsHasBlogPostsStatus200,
  TQueryKey extends QueryKey = BlogPostPublicGetAuthorsHasBlogPostsQueryKey,
>(
  params?: {
    Filter?: BlogPostPublicGetAuthorsHasBlogPostsQueryFilter;
    Sorting?: BlogPostPublicGetAuthorsHasBlogPostsQuerySorting;
    SkipCount?: BlogPostPublicGetAuthorsHasBlogPostsQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetAuthorsHasBlogPostsQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostPublicGetAuthorsHasBlogPostsStatus200,
        ResponseErrorConfig<
          | BlogPostPublicGetAuthorsHasBlogPostsStatus400
          | BlogPostPublicGetAuthorsHasBlogPostsStatus401
          | BlogPostPublicGetAuthorsHasBlogPostsStatus403
          | BlogPostPublicGetAuthorsHasBlogPostsStatus404
          | BlogPostPublicGetAuthorsHasBlogPostsStatus500
          | BlogPostPublicGetAuthorsHasBlogPostsStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? blogPostPublicGetAuthorsHasBlogPostsQueryKey(params);

  const query = useQuery(
    {
      ...blogPostPublicGetAuthorsHasBlogPostsQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorsHasBlogPostsStatus400
      | BlogPostPublicGetAuthorsHasBlogPostsStatus401
      | BlogPostPublicGetAuthorsHasBlogPostsStatus403
      | BlogPostPublicGetAuthorsHasBlogPostsStatus404
      | BlogPostPublicGetAuthorsHasBlogPostsStatus500
      | BlogPostPublicGetAuthorsHasBlogPostsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
