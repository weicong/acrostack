/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostPublicGetAuthorHasBlogPostPathId,
  BlogPostPublicGetAuthorHasBlogPostStatus200,
  BlogPostPublicGetAuthorHasBlogPostStatus400,
  BlogPostPublicGetAuthorHasBlogPostStatus401,
  BlogPostPublicGetAuthorHasBlogPostStatus403,
  BlogPostPublicGetAuthorHasBlogPostStatus404,
  BlogPostPublicGetAuthorHasBlogPostStatus500,
  BlogPostPublicGetAuthorHasBlogPostStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorHasBlogPost.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetAuthorHasBlogPost } from "../../clients/blogPostPublic/blogPostPublicGetAuthorHasBlogPost.ts";

export const blogPostPublicGetAuthorHasBlogPostQueryKey = (
  id?: BlogPostPublicGetAuthorHasBlogPostPathId,
) => [{ url: "/api/cms-kit-public/blog-posts/authors/:id", params: { id: id } }] as const;

type BlogPostPublicGetAuthorHasBlogPostQueryKey = ReturnType<
  typeof blogPostPublicGetAuthorHasBlogPostQueryKey
>;

export function blogPostPublicGetAuthorHasBlogPostQueryOptions(
  id?: BlogPostPublicGetAuthorHasBlogPostPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostPublicGetAuthorHasBlogPostQueryKey(id);
  return queryOptions<
    BlogPostPublicGetAuthorHasBlogPostStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorHasBlogPostStatus400
      | BlogPostPublicGetAuthorHasBlogPostStatus401
      | BlogPostPublicGetAuthorHasBlogPostStatus403
      | BlogPostPublicGetAuthorHasBlogPostStatus404
      | BlogPostPublicGetAuthorHasBlogPostStatus500
      | BlogPostPublicGetAuthorHasBlogPostStatus501
    >,
    BlogPostPublicGetAuthorHasBlogPostStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostPublicGetAuthorHasBlogPost(id!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/authors/:id}
 */
export function useBlogPostPublicGetAuthorHasBlogPost<
  TData = BlogPostPublicGetAuthorHasBlogPostStatus200,
  TQueryData = BlogPostPublicGetAuthorHasBlogPostStatus200,
  TQueryKey extends QueryKey = BlogPostPublicGetAuthorHasBlogPostQueryKey,
>(
  id?: BlogPostPublicGetAuthorHasBlogPostPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostPublicGetAuthorHasBlogPostStatus200,
        ResponseErrorConfig<
          | BlogPostPublicGetAuthorHasBlogPostStatus400
          | BlogPostPublicGetAuthorHasBlogPostStatus401
          | BlogPostPublicGetAuthorHasBlogPostStatus403
          | BlogPostPublicGetAuthorHasBlogPostStatus404
          | BlogPostPublicGetAuthorHasBlogPostStatus500
          | BlogPostPublicGetAuthorHasBlogPostStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetAuthorHasBlogPostQueryKey(id);

  const query = useQuery(
    {
      ...blogPostPublicGetAuthorHasBlogPostQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostPublicGetAuthorHasBlogPostStatus400
      | BlogPostPublicGetAuthorHasBlogPostStatus401
      | BlogPostPublicGetAuthorHasBlogPostStatus403
      | BlogPostPublicGetAuthorHasBlogPostStatus404
      | BlogPostPublicGetAuthorHasBlogPostStatus500
      | BlogPostPublicGetAuthorHasBlogPostStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
