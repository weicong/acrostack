/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostAdminGetListQueryFilter,
  BlogPostAdminGetListQueryBlogId,
  BlogPostAdminGetListQueryAuthorId,
  BlogPostAdminGetListQueryTagId,
  BlogPostAdminGetListQueryStatus,
  BlogPostAdminGetListQuerySorting,
  BlogPostAdminGetListQuerySkipCount,
  BlogPostAdminGetListQueryMaxResultCount,
  BlogPostAdminGetListStatus200,
  BlogPostAdminGetListStatus400,
  BlogPostAdminGetListStatus401,
  BlogPostAdminGetListStatus403,
  BlogPostAdminGetListStatus404,
  BlogPostAdminGetListStatus500,
  BlogPostAdminGetListStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostAdminGetList } from "../../clients/blogPostAdmin/blogPostAdminGetList.ts";

export const blogPostAdminGetListQueryKey = (params?: {
  Filter?: BlogPostAdminGetListQueryFilter;
  BlogId?: BlogPostAdminGetListQueryBlogId;
  AuthorId?: BlogPostAdminGetListQueryAuthorId;
  TagId?: BlogPostAdminGetListQueryTagId;
  Status?: BlogPostAdminGetListQueryStatus;
  Sorting?: BlogPostAdminGetListQuerySorting;
  SkipCount?: BlogPostAdminGetListQuerySkipCount;
  MaxResultCount?: BlogPostAdminGetListQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/blogs/blog-posts" }, ...(params ? [params] : [])] as const;

type BlogPostAdminGetListQueryKey = ReturnType<typeof blogPostAdminGetListQueryKey>;

export function blogPostAdminGetListQueryOptions(
  params?: {
    Filter?: BlogPostAdminGetListQueryFilter;
    BlogId?: BlogPostAdminGetListQueryBlogId;
    AuthorId?: BlogPostAdminGetListQueryAuthorId;
    TagId?: BlogPostAdminGetListQueryTagId;
    Status?: BlogPostAdminGetListQueryStatus;
    Sorting?: BlogPostAdminGetListQuerySorting;
    SkipCount?: BlogPostAdminGetListQuerySkipCount;
    MaxResultCount?: BlogPostAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostAdminGetListQueryKey(params);
  return queryOptions<
    BlogPostAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogPostAdminGetListStatus400
      | BlogPostAdminGetListStatus401
      | BlogPostAdminGetListStatus403
      | BlogPostAdminGetListStatus404
      | BlogPostAdminGetListStatus500
      | BlogPostAdminGetListStatus501
    >,
    BlogPostAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostAdminGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts}
 */
export function useBlogPostAdminGetList<
  TData = BlogPostAdminGetListStatus200,
  TQueryData = BlogPostAdminGetListStatus200,
  TQueryKey extends QueryKey = BlogPostAdminGetListQueryKey,
>(
  params?: {
    Filter?: BlogPostAdminGetListQueryFilter;
    BlogId?: BlogPostAdminGetListQueryBlogId;
    AuthorId?: BlogPostAdminGetListQueryAuthorId;
    TagId?: BlogPostAdminGetListQueryTagId;
    Status?: BlogPostAdminGetListQueryStatus;
    Sorting?: BlogPostAdminGetListQuerySorting;
    SkipCount?: BlogPostAdminGetListQuerySkipCount;
    MaxResultCount?: BlogPostAdminGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostAdminGetListStatus200,
        ResponseErrorConfig<
          | BlogPostAdminGetListStatus400
          | BlogPostAdminGetListStatus401
          | BlogPostAdminGetListStatus403
          | BlogPostAdminGetListStatus404
          | BlogPostAdminGetListStatus500
          | BlogPostAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostAdminGetListQueryKey(params);

  const query = useQuery(
    {
      ...blogPostAdminGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostAdminGetListStatus400
      | BlogPostAdminGetListStatus401
      | BlogPostAdminGetListStatus403
      | BlogPostAdminGetListStatus404
      | BlogPostAdminGetListStatus500
      | BlogPostAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
