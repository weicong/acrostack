/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostGetBySlugPathBlogId,
  BlogPostGetBySlugQuerySlug,
  BlogPostGetBySlugStatus200,
  BlogPostGetBySlugStatus400,
  BlogPostGetBySlugStatus401,
  BlogPostGetBySlugStatus403,
  BlogPostGetBySlugStatus404,
  BlogPostGetBySlugStatus500,
  BlogPostGetBySlugStatus501,
} from "../../models/blogPost/BlogPostGetBySlug.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostGetBySlug } from "../../clients/blogPost/blogPostGetBySlug.ts";

export const blogPostGetBySlugQueryKey = (
  blogId?: BlogPostGetBySlugPathBlogId,
  params?: { slug?: BlogPostGetBySlugQuerySlug },
) =>
  [
    { url: "/api/app/blog-post/by-slug/:blogId", params: { blogId: blogId } },
    ...(params ? [params] : []),
  ] as const;

type BlogPostGetBySlugQueryKey = ReturnType<typeof blogPostGetBySlugQueryKey>;

export function blogPostGetBySlugQueryOptions(
  blogId?: BlogPostGetBySlugPathBlogId,
  params?: { slug?: BlogPostGetBySlugQuerySlug },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostGetBySlugQueryKey(blogId, params);
  return queryOptions<
    BlogPostGetBySlugStatus200,
    ResponseErrorConfig<
      | BlogPostGetBySlugStatus400
      | BlogPostGetBySlugStatus401
      | BlogPostGetBySlugStatus403
      | BlogPostGetBySlugStatus404
      | BlogPostGetBySlugStatus500
      | BlogPostGetBySlugStatus501
    >,
    BlogPostGetBySlugStatus200,
    typeof queryKey
  >({
    enabled: !!blogId,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostGetBySlug(blogId!, params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/blog-post/by-slug/:blogId}
 */
export function useBlogPostGetBySlug<
  TData = BlogPostGetBySlugStatus200,
  TQueryData = BlogPostGetBySlugStatus200,
  TQueryKey extends QueryKey = BlogPostGetBySlugQueryKey,
>(
  blogId?: BlogPostGetBySlugPathBlogId,
  params?: { slug?: BlogPostGetBySlugQuerySlug },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostGetBySlugStatus200,
        ResponseErrorConfig<
          | BlogPostGetBySlugStatus400
          | BlogPostGetBySlugStatus401
          | BlogPostGetBySlugStatus403
          | BlogPostGetBySlugStatus404
          | BlogPostGetBySlugStatus500
          | BlogPostGetBySlugStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostGetBySlugQueryKey(blogId, params);

  const query = useQuery(
    {
      ...blogPostGetBySlugQueryOptions(blogId, params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostGetBySlugStatus400
      | BlogPostGetBySlugStatus401
      | BlogPostGetBySlugStatus403
      | BlogPostGetBySlugStatus404
      | BlogPostGetBySlugStatus500
      | BlogPostGetBySlugStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
