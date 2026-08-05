/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BlogFeatureGetOrDefaultPathBlogId,
  BlogFeatureGetOrDefaultPathFeatureName,
  BlogFeatureGetOrDefaultStatus200,
  BlogFeatureGetOrDefaultStatus400,
  BlogFeatureGetOrDefaultStatus401,
  BlogFeatureGetOrDefaultStatus403,
  BlogFeatureGetOrDefaultStatus404,
  BlogFeatureGetOrDefaultStatus500,
  BlogFeatureGetOrDefaultStatus501,
} from "../../models/blogFeature/BlogFeatureGetOrDefault.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { blogFeatureGetOrDefault } from "../../clients/blogFeature/blogFeatureGetOrDefault.ts";

export const blogFeatureGetOrDefaultQueryKey = (
  blogId?: BlogFeatureGetOrDefaultPathBlogId,
  featureName?: BlogFeatureGetOrDefaultPathFeatureName,
) =>
  [
    {
      url: "/api/cms-kit/blogs/:blogId/features/:featureName",
      params: { blogId: blogId, featureName: featureName },
    },
  ] as const;

type BlogFeatureGetOrDefaultQueryKey = ReturnType<typeof blogFeatureGetOrDefaultQueryKey>;

export function blogFeatureGetOrDefaultQueryOptions(
  blogId?: BlogFeatureGetOrDefaultPathBlogId,
  featureName?: BlogFeatureGetOrDefaultPathFeatureName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = blogFeatureGetOrDefaultQueryKey(blogId, featureName);
  return queryOptions<
    BlogFeatureGetOrDefaultStatus200,
    ResponseErrorConfig<
      | BlogFeatureGetOrDefaultStatus400
      | BlogFeatureGetOrDefaultStatus401
      | BlogFeatureGetOrDefaultStatus403
      | BlogFeatureGetOrDefaultStatus404
      | BlogFeatureGetOrDefaultStatus500
      | BlogFeatureGetOrDefaultStatus501
    >,
    BlogFeatureGetOrDefaultStatus200,
    typeof queryKey
  >({
    enabled: !!(blogId && featureName),
    queryKey,
    queryFn: async ({ signal }) => {
      return blogFeatureGetOrDefault(blogId!, featureName!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit/blogs/:blogId/features/:featureName}
 */
export function useBlogFeatureGetOrDefault<
  TData = BlogFeatureGetOrDefaultStatus200,
  TQueryData = BlogFeatureGetOrDefaultStatus200,
  TQueryKey extends QueryKey = BlogFeatureGetOrDefaultQueryKey,
>(
  blogId?: BlogFeatureGetOrDefaultPathBlogId,
  featureName?: BlogFeatureGetOrDefaultPathFeatureName,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BlogFeatureGetOrDefaultStatus200,
        ResponseErrorConfig<
          | BlogFeatureGetOrDefaultStatus400
          | BlogFeatureGetOrDefaultStatus401
          | BlogFeatureGetOrDefaultStatus403
          | BlogFeatureGetOrDefaultStatus404
          | BlogFeatureGetOrDefaultStatus500
          | BlogFeatureGetOrDefaultStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? blogFeatureGetOrDefaultQueryKey(blogId, featureName);

  const query = useQuery(
    {
      ...blogFeatureGetOrDefaultQueryOptions(blogId, featureName, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BlogFeatureGetOrDefaultStatus400
      | BlogFeatureGetOrDefaultStatus401
      | BlogFeatureGetOrDefaultStatus403
      | BlogFeatureGetOrDefaultStatus404
      | BlogFeatureGetOrDefaultStatus500
      | BlogFeatureGetOrDefaultStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
