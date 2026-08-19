/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogPostAdminGetListOptions,
  BlogPostAdminGetListStatus200,
  BlogPostAdminGetListStatus400,
  BlogPostAdminGetListStatus401,
  BlogPostAdminGetListStatus403,
  BlogPostAdminGetListStatus404,
  BlogPostAdminGetListStatus500,
  BlogPostAdminGetListStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostAdminGetList } from "../../clients/blogPostAdmin/blogPostAdminGetList";

export const blogPostAdminGetListQueryKey = ({
  query,
}: Omit<BlogPostAdminGetListOptions, "headers"> = {}) =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts" }, ...(query ? [query] : [])] as const;

type BlogPostAdminGetListQueryKey = ReturnType<typeof blogPostAdminGetListQueryKey>;

export function blogPostAdminGetListQueryOptions(
  { query }: BlogPostAdminGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogPostAdminGetListQueryKey({ query });
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
      const { data } = await blogPostAdminGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    query,
  }: {
    query?: BlogPostAdminGetListOptions["query"] | (() => BlogPostAdminGetListOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? blogPostAdminGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogPostAdminGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
