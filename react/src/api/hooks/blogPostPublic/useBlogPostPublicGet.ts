/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostPublicGetPathBlogSlug,
  BlogPostPublicGetPathBlogPostSlug,
  BlogPostPublicGetStatus200,
  BlogPostPublicGetStatus400,
  BlogPostPublicGetStatus401,
  BlogPostPublicGetStatus403,
  BlogPostPublicGetStatus404,
  BlogPostPublicGetStatus500,
  BlogPostPublicGetStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGet } from "../../clients/blogPostPublic/blogPostPublicGet.ts";

export const blogPostPublicGetQueryKey = (
  blogSlug?: BlogPostPublicGetPathBlogSlug,
  blogPostSlug?: BlogPostPublicGetPathBlogPostSlug,
) =>
  [
    {
      url: "/api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug",
      params: { blogSlug: blogSlug, blogPostSlug: blogPostSlug },
    },
  ] as const;

type BlogPostPublicGetQueryKey = ReturnType<typeof blogPostPublicGetQueryKey>;

export function blogPostPublicGetQueryOptions(
  blogSlug?: BlogPostPublicGetPathBlogSlug,
  blogPostSlug?: BlogPostPublicGetPathBlogPostSlug,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostPublicGetQueryKey(blogSlug, blogPostSlug);
  return queryOptions<
    BlogPostPublicGetStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetStatus400
      | BlogPostPublicGetStatus401
      | BlogPostPublicGetStatus403
      | BlogPostPublicGetStatus404
      | BlogPostPublicGetStatus500
      | BlogPostPublicGetStatus501
    >,
    BlogPostPublicGetStatus200,
    typeof queryKey
  >({
    enabled: !!(blogSlug && blogPostSlug),
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostPublicGet(blogSlug!, blogPostSlug!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/:blogSlug/:blogPostSlug}
 */
export function useBlogPostPublicGet<
  TData = BlogPostPublicGetStatus200,
  TQueryData = BlogPostPublicGetStatus200,
  TQueryKey extends QueryKey = BlogPostPublicGetQueryKey,
>(
  blogSlug?: BlogPostPublicGetPathBlogSlug,
  blogPostSlug?: BlogPostPublicGetPathBlogPostSlug,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostPublicGetStatus200,
        ResponseErrorConfig<
          | BlogPostPublicGetStatus400
          | BlogPostPublicGetStatus401
          | BlogPostPublicGetStatus403
          | BlogPostPublicGetStatus404
          | BlogPostPublicGetStatus500
          | BlogPostPublicGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetQueryKey(blogSlug, blogPostSlug);

  const query = useQuery(
    {
      ...blogPostPublicGetQueryOptions(blogSlug, blogPostSlug, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostPublicGetStatus400
      | BlogPostPublicGetStatus401
      | BlogPostPublicGetStatus403
      | BlogPostPublicGetStatus404
      | BlogPostPublicGetStatus500
      | BlogPostPublicGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
