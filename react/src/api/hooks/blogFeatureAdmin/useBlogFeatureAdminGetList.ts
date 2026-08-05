/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogFeatureAdminGetListPathBlogId,
  BlogFeatureAdminGetListStatus200,
  BlogFeatureAdminGetListStatus400,
  BlogFeatureAdminGetListStatus401,
  BlogFeatureAdminGetListStatus403,
  BlogFeatureAdminGetListStatus404,
  BlogFeatureAdminGetListStatus500,
  BlogFeatureAdminGetListStatus501,
} from "../../models/blogFeatureAdmin/BlogFeatureAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogFeatureAdminGetList } from "../../clients/blogFeatureAdmin/blogFeatureAdminGetList.ts";

export const blogFeatureAdminGetListQueryKey = (blogId?: BlogFeatureAdminGetListPathBlogId) =>
  [{ url: "/api/cms-kit-admin/blogs/:blogId/features", params: { blogId: blogId } }] as const;

type BlogFeatureAdminGetListQueryKey = ReturnType<typeof blogFeatureAdminGetListQueryKey>;

export function blogFeatureAdminGetListQueryOptions(
  blogId?: BlogFeatureAdminGetListPathBlogId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogFeatureAdminGetListQueryKey(blogId);
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
    enabled: !!blogId,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogFeatureAdminGetList(blogId!, { ...config, signal: config.signal ?? signal });
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
  blogId?: BlogFeatureAdminGetListPathBlogId,
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? blogFeatureAdminGetListQueryKey(blogId);

  const query = useQuery(
    {
      ...blogFeatureAdminGetListQueryOptions(blogId, config),
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
