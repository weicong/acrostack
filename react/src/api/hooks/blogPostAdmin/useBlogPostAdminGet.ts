/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostAdminGetPathId,
  BlogPostAdminGetStatus200,
  BlogPostAdminGetStatus400,
  BlogPostAdminGetStatus401,
  BlogPostAdminGetStatus403,
  BlogPostAdminGetStatus404,
  BlogPostAdminGetStatus500,
  BlogPostAdminGetStatus501,
} from "../../models/blogPostAdmin/BlogPostAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostAdminGet } from "../../clients/blogPostAdmin/blogPostAdminGet.ts";

export const blogPostAdminGetQueryKey = (id?: BlogPostAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/blogs/blog-posts/:id", params: { id: id } }] as const;

type BlogPostAdminGetQueryKey = ReturnType<typeof blogPostAdminGetQueryKey>;

export function blogPostAdminGetQueryOptions(
  id?: BlogPostAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostAdminGetQueryKey(id);
  return queryOptions<
    BlogPostAdminGetStatus200,
    ResponseErrorConfig<
      | BlogPostAdminGetStatus400
      | BlogPostAdminGetStatus401
      | BlogPostAdminGetStatus403
      | BlogPostAdminGetStatus404
      | BlogPostAdminGetStatus500
      | BlogPostAdminGetStatus501
    >,
    BlogPostAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/blogs/blog-posts/:id}
 */
export function useBlogPostAdminGet<
  TData = BlogPostAdminGetStatus200,
  TQueryData = BlogPostAdminGetStatus200,
  TQueryKey extends QueryKey = BlogPostAdminGetQueryKey,
>(
  id?: BlogPostAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostAdminGetStatus200,
        ResponseErrorConfig<
          | BlogPostAdminGetStatus400
          | BlogPostAdminGetStatus401
          | BlogPostAdminGetStatus403
          | BlogPostAdminGetStatus404
          | BlogPostAdminGetStatus500
          | BlogPostAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...blogPostAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostAdminGetStatus400
      | BlogPostAdminGetStatus401
      | BlogPostAdminGetStatus403
      | BlogPostAdminGetStatus404
      | BlogPostAdminGetStatus500
      | BlogPostAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
