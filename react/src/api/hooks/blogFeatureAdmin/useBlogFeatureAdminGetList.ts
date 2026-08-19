/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BlogFeatureAdminGetListOptions,
  BlogFeatureAdminGetListStatus200,
  BlogFeatureAdminGetListStatus400,
  BlogFeatureAdminGetListStatus401,
  BlogFeatureAdminGetListStatus403,
  BlogFeatureAdminGetListStatus404,
  BlogFeatureAdminGetListStatus500,
  BlogFeatureAdminGetListStatus501,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogFeatureAdminGetList } from "../../clients/blogFeatureAdmin/blogFeatureAdminGetList";

export const blogFeatureAdminGetListQueryKey = ({
  path,
}: Omit<BlogFeatureAdminGetListOptions, "headers">) =>
  [{ url: "/api/cms-kit-admin/blogs/:blogId/features", params: path }] as const;

type BlogFeatureAdminGetListQueryKey = ReturnType<typeof blogFeatureAdminGetListQueryKey>;

export function blogFeatureAdminGetListQueryOptions(
  { path }: BlogFeatureAdminGetListOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = blogFeatureAdminGetListQueryKey({ path });
  return queryOptions<
    BlogFeatureAdminGetListStatus200,
    ResponseErrorConfig<
      | BlogFeatureAdminGetListStatus400
      | BlogFeatureAdminGetListStatus401
      | BlogFeatureAdminGetListStatus403
      | BlogFeatureAdminGetListStatus404
      | BlogFeatureAdminGetListStatus500
      | BlogFeatureAdminGetListStatus501
    >,
    BlogFeatureAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await blogFeatureAdminGetList({
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
 * {@link /api/cms-kit-admin/blogs/:blogId/features}
 */
export function useBlogFeatureAdminGetList<
  TData = BlogFeatureAdminGetListStatus200,
  TQueryData = BlogFeatureAdminGetListStatus200,
  TQueryKey extends QueryKey = BlogFeatureAdminGetListQueryKey,
>(
  {
    path,
  }: {
    path: BlogFeatureAdminGetListOptions["path"] | (() => BlogFeatureAdminGetListOptions["path"]);
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogFeatureAdminGetListStatus200,
        ResponseErrorConfig<
          | BlogFeatureAdminGetListStatus400
          | BlogFeatureAdminGetListStatus401
          | BlogFeatureAdminGetListStatus403
          | BlogFeatureAdminGetListStatus404
          | BlogFeatureAdminGetListStatus500
          | BlogFeatureAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogFeatureAdminGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...blogFeatureAdminGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogFeatureAdminGetListStatus400
      | BlogFeatureAdminGetListStatus401
      | BlogFeatureAdminGetListStatus403
      | BlogFeatureAdminGetListStatus404
      | BlogFeatureAdminGetListStatus500
      | BlogFeatureAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
