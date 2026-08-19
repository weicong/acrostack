/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostPublicGetAuthorHasBlogPostOptions,
  BlogPostPublicGetAuthorHasBlogPostStatus200,
  BlogPostPublicGetAuthorHasBlogPostStatus400,
  BlogPostPublicGetAuthorHasBlogPostStatus401,
  BlogPostPublicGetAuthorHasBlogPostStatus403,
  BlogPostPublicGetAuthorHasBlogPostStatus404,
  BlogPostPublicGetAuthorHasBlogPostStatus500,
  BlogPostPublicGetAuthorHasBlogPostStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetAuthorHasBlogPost";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetAuthorHasBlogPost } from "../../clients/blogPostPublic/blogPostPublicGetAuthorHasBlogPost";

export const blogPostPublicGetAuthorHasBlogPostQueryKey = ({
  path,
}: Omit<BlogPostPublicGetAuthorHasBlogPostOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/blog-posts/authors/:id", params: path }] as const;

type BlogPostPublicGetAuthorHasBlogPostQueryKey = ReturnType<
  typeof blogPostPublicGetAuthorHasBlogPostQueryKey
>;

export function blogPostPublicGetAuthorHasBlogPostQueryOptions(
  { path }: BlogPostPublicGetAuthorHasBlogPostOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogPostPublicGetAuthorHasBlogPostQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await blogPostPublicGetAuthorHasBlogPost({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    path,
  }: {
    path:
      | BlogPostPublicGetAuthorHasBlogPostOptions["path"]
      | (() => BlogPostPublicGetAuthorHasBlogPostOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey =
    resolvedOptions?.queryKey ?? blogPostPublicGetAuthorHasBlogPostQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogPostPublicGetAuthorHasBlogPostQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
