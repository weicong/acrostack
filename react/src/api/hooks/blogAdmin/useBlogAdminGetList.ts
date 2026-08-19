/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogAdminGetListOptions,
  BlogAdminGetListStatus200,
  BlogAdminGetListStatus400,
  BlogAdminGetListStatus401,
  BlogAdminGetListStatus403,
  BlogAdminGetListStatus404,
  BlogAdminGetListStatus500,
  BlogAdminGetListStatus501,
} from "../../models/blogAdmin/BlogAdminGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogAdminGetList } from "../../clients/blogAdmin/blogAdminGetList";

export const blogAdminGetListQueryKey = ({
  query,
}: Omit<BlogAdminGetListOptions, "headers"> = {}) =>
  [{ url: "/api/cms-kit-admin/blogs" }, ...(query ? [query] : [])] as const;

type BlogAdminGetListQueryKey = ReturnType<typeof blogAdminGetListQueryKey>;

export function blogAdminGetListQueryOptions(
  { query }: BlogAdminGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogAdminGetListQueryKey({ query });
  return queryOptions<
    BlogAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogAdminGetListStatus400
      | BlogAdminGetListStatus401
      | BlogAdminGetListStatus403
      | BlogAdminGetListStatus404
      | BlogAdminGetListStatus500
      | BlogAdminGetListStatus501
    >,
    BlogAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await blogAdminGetList({
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
 * {@link /api/cms-kit-admin/blogs}
 */
export function useBlogAdminGetList<
  TData = BlogAdminGetListStatus200,
  TQueryData = BlogAdminGetListStatus200,
  TQueryKey extends QueryKey = BlogAdminGetListQueryKey,
>(
  {
    query,
  }: { query?: BlogAdminGetListOptions["query"] | (() => BlogAdminGetListOptions["query"]) } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogAdminGetListStatus200,
        ResponseErrorConfig<
          | BlogAdminGetListStatus400
          | BlogAdminGetListStatus401
          | BlogAdminGetListStatus403
          | BlogAdminGetListStatus404
          | BlogAdminGetListStatus500
          | BlogAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogAdminGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogAdminGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogAdminGetListStatus400
      | BlogAdminGetListStatus401
      | BlogAdminGetListStatus403
      | BlogAdminGetListStatus404
      | BlogAdminGetListStatus500
      | BlogAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
