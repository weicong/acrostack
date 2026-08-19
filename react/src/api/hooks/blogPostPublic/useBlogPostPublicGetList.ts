/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostPublicGetListOptions,
  BlogPostPublicGetListStatus200,
  BlogPostPublicGetListStatus400,
  BlogPostPublicGetListStatus401,
  BlogPostPublicGetListStatus403,
  BlogPostPublicGetListStatus404,
  BlogPostPublicGetListStatus500,
  BlogPostPublicGetListStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetList } from "../../clients/blogPostPublic/blogPostPublicGetList";

export const blogPostPublicGetListQueryKey = ({
  path,
  query,
}: Omit<BlogPostPublicGetListOptions, "headers">) =>
  [
    { url: "/api/cms-kit-public/blog-posts/:blogSlug", params: path },
    ...(query ? [query] : []),
  ] as const;

type BlogPostPublicGetListQueryKey = ReturnType<typeof blogPostPublicGetListQueryKey>;

export function blogPostPublicGetListQueryOptions(
  { path, query }: BlogPostPublicGetListOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogPostPublicGetListQueryKey({ path, query });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await blogPostPublicGetList({
        ...config,
        path,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    path,
    query,
  }: {
    path: BlogPostPublicGetListOptions["path"] | (() => BlogPostPublicGetListOptions["path"]);
    query?: BlogPostPublicGetListOptions["query"] | (() => BlogPostPublicGetListOptions["query"]);
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = {
    path: typeof path === "function" ? path() : path,
    query: typeof query === "function" ? query() : query,
  };
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogPostPublicGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
