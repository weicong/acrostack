/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogPostPublicGetTagNamePathId,
  BlogPostPublicGetTagNameQueryTagId,
  BlogPostPublicGetTagNameStatus200,
  BlogPostPublicGetTagNameStatus400,
  BlogPostPublicGetTagNameStatus401,
  BlogPostPublicGetTagNameStatus403,
  BlogPostPublicGetTagNameStatus404,
  BlogPostPublicGetTagNameStatus500,
  BlogPostPublicGetTagNameStatus501,
} from "../../models/blogPostPublic/BlogPostPublicGetTagName.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogPostPublicGetTagName } from "../../clients/blogPostPublic/blogPostPublicGetTagName.ts";

export const blogPostPublicGetTagNameQueryKey = (
  id?: BlogPostPublicGetTagNamePathId,
  params?: { tagId?: BlogPostPublicGetTagNameQueryTagId },
) =>
  [
    { url: "/api/cms-kit-public/blog-posts/tags/:id", params: { id: id } },
    ...(params ? [params] : []),
  ] as const;

type BlogPostPublicGetTagNameQueryKey = ReturnType<typeof blogPostPublicGetTagNameQueryKey>;

export function blogPostPublicGetTagNameQueryOptions(
  id?: BlogPostPublicGetTagNamePathId,
  params?: { tagId?: BlogPostPublicGetTagNameQueryTagId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogPostPublicGetTagNameQueryKey(id, params);
  return queryOptions<
    BlogPostPublicGetTagNameStatus200,
    ResponseErrorConfig<
      | BlogPostPublicGetTagNameStatus400
      | BlogPostPublicGetTagNameStatus401
      | BlogPostPublicGetTagNameStatus403
      | BlogPostPublicGetTagNameStatus404
      | BlogPostPublicGetTagNameStatus500
      | BlogPostPublicGetTagNameStatus501
    >,
    BlogPostPublicGetTagNameStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return blogPostPublicGetTagName(id!, params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/blog-posts/tags/:id}
 */
export function useBlogPostPublicGetTagName<
  TData = BlogPostPublicGetTagNameStatus200,
  TQueryData = BlogPostPublicGetTagNameStatus200,
  TQueryKey extends QueryKey = BlogPostPublicGetTagNameQueryKey,
>(
  id?: BlogPostPublicGetTagNamePathId,
  params?: { tagId?: BlogPostPublicGetTagNameQueryTagId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogPostPublicGetTagNameStatus200,
        ResponseErrorConfig<
          | BlogPostPublicGetTagNameStatus400
          | BlogPostPublicGetTagNameStatus401
          | BlogPostPublicGetTagNameStatus403
          | BlogPostPublicGetTagNameStatus404
          | BlogPostPublicGetTagNameStatus500
          | BlogPostPublicGetTagNameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? blogPostPublicGetTagNameQueryKey(id, params);

  const query = useQuery(
    {
      ...blogPostPublicGetTagNameQueryOptions(id, params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogPostPublicGetTagNameStatus400
      | BlogPostPublicGetTagNameStatus401
      | BlogPostPublicGetTagNameStatus403
      | BlogPostPublicGetTagNameStatus404
      | BlogPostPublicGetTagNameStatus500
      | BlogPostPublicGetTagNameStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
