/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogAdminGetOptions,
  BlogAdminGetStatus200,
  BlogAdminGetStatus400,
  BlogAdminGetStatus401,
  BlogAdminGetStatus403,
  BlogAdminGetStatus404,
  BlogAdminGetStatus500,
  BlogAdminGetStatus501,
} from "../../models/blogAdmin/BlogAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogAdminGet } from "../../clients/blogAdmin/blogAdminGet";

export const blogAdminGetQueryKey = ({ path }: Omit<BlogAdminGetOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/blogs/:id", params: path }] as const;

type BlogAdminGetQueryKey = ReturnType<typeof blogAdminGetQueryKey>;

export function blogAdminGetQueryOptions(
  { path }: BlogAdminGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogAdminGetQueryKey({ path });
  return queryOptions<
    BlogAdminGetStatus200,
    ResponseErrorConfig<
      | BlogAdminGetStatus400
      | BlogAdminGetStatus401
      | BlogAdminGetStatus403
      | BlogAdminGetStatus404
      | BlogAdminGetStatus500
      | BlogAdminGetStatus501
    >,
    BlogAdminGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await blogAdminGet({
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
 * {@link /api/cms-kit-admin/blogs/:id}
 */
export function useBlogAdminGet<
  TData = BlogAdminGetStatus200,
  TQueryData = BlogAdminGetStatus200,
  TQueryKey extends QueryKey = BlogAdminGetQueryKey,
>(
  { path }: { path: BlogAdminGetOptions["path"] | (() => BlogAdminGetOptions["path"]) },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogAdminGetStatus200,
        ResponseErrorConfig<
          | BlogAdminGetStatus400
          | BlogAdminGetStatus401
          | BlogAdminGetStatus403
          | BlogAdminGetStatus404
          | BlogAdminGetStatus500
          | BlogAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogAdminGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogAdminGetQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogAdminGetStatus400
      | BlogAdminGetStatus401
      | BlogAdminGetStatus403
      | BlogAdminGetStatus404
      | BlogAdminGetStatus500
      | BlogAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
