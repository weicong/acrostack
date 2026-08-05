/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostPublicGetListPathBlogSlug,
  BlogPostPublicGetListQueryAuthorId,
  BlogPostPublicGetListQueryTagId,
  BlogPostPublicGetListQueryFilterOnFavorites,
  BlogPostPublicGetListQuerySorting,
  BlogPostPublicGetListQuerySkipCount,
  BlogPostPublicGetListQueryMaxResultCount,
  BlogPostPublicGetListStatus200,
  BlogPostPublicGetListStatus400,
  BlogPostPublicGetListStatus401,
  BlogPostPublicGetListStatus403,
  BlogPostPublicGetListStatus404,
  BlogPostPublicGetListStatus500,
  BlogPostPublicGetListStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetList } from "../../clients/blogPostPublic/blogPostPublicGetList.ts";

export const blogPostPublicGetListQueryKey = (
  blogSlug?: BlogPostPublicGetListPathBlogSlug,
  params?: {
    AuthorId?: BlogPostPublicGetListQueryAuthorId;
    TagId?: BlogPostPublicGetListQueryTagId;
    FilterOnFavorites?: BlogPostPublicGetListQueryFilterOnFavorites;
    Sorting?: BlogPostPublicGetListQuerySorting;
    SkipCount?: BlogPostPublicGetListQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetListQueryMaxResultCount;
  },
) =>
  [
    { url: "/api/cms-kit-public/blog-posts/:blogSlug", params: { blogSlug: blogSlug } },
    ...(params ? [params] : []),
  ] as const;

type BlogPostPublicGetListQueryKey = ReturnType<typeof blogPostPublicGetListQueryKey>;

export function blogPostPublicGetListQueryOptions(
  blogSlug?: BlogPostPublicGetListPathBlogSlug,
  params?: {
    AuthorId?: BlogPostPublicGetListQueryAuthorId;
    TagId?: BlogPostPublicGetListQueryTagId;
    FilterOnFavorites?: BlogPostPublicGetListQueryFilterOnFavorites;
    Sorting?: BlogPostPublicGetListQuerySorting;
    SkipCount?: BlogPostPublicGetListQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostPublicGetListQueryKey(blogSlug, params);
  return queryOptions<
    BlogPostPublicGetListStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetListStatus400
      | BlogPostPublicGetListStatus401
      | BlogPostPublicGetListStatus403
      | BlogPostPublicGetListStatus404
      | BlogPostPublicGetListStatus500
      | BlogPostPublicGetListStatus501
    >,
    BlogPostPublicGetListStatus200,
    typeof queryKey
  >({
    enabled: !!blogSlug,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostPublicGetList(blogSlug!, params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug}
 */
export function useBlogPostPublicGetList<
  TData = BlogPostPublicGetListStatus200,
  TQueryData = BlogPostPublicGetListStatus200,
  TQueryKey extends QueryKey = BlogPostPublicGetListQueryKey,
>(
  blogSlug?: BlogPostPublicGetListPathBlogSlug,
  params?: {
    AuthorId?: BlogPostPublicGetListQueryAuthorId;
    TagId?: BlogPostPublicGetListQueryTagId;
    FilterOnFavorites?: BlogPostPublicGetListQueryFilterOnFavorites;
    Sorting?: BlogPostPublicGetListQuerySorting;
    SkipCount?: BlogPostPublicGetListQuerySkipCount;
    MaxResultCount?: BlogPostPublicGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostPublicGetListStatus200,
        ResponseErrorConfig<
          | BlogPostPublicGetListStatus400
          | BlogPostPublicGetListStatus401
          | BlogPostPublicGetListStatus403
          | BlogPostPublicGetListStatus404
          | BlogPostPublicGetListStatus500
          | BlogPostPublicGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetListQueryKey(blogSlug, params);

  const query = useQuery(
    {
      ...blogPostPublicGetListQueryOptions(blogSlug, params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostPublicGetListStatus400
      | BlogPostPublicGetListStatus401
      | BlogPostPublicGetListStatus403
      | BlogPostPublicGetListStatus404
      | BlogPostPublicGetListStatus500
      | BlogPostPublicGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
