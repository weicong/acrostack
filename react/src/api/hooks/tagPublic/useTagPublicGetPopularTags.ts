/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagPublicGetPopularTagsPathEntityType,
  TagPublicGetPopularTagsPathMaxCount,
  TagPublicGetPopularTagsStatus200,
  TagPublicGetPopularTagsStatus400,
  TagPublicGetPopularTagsStatus401,
  TagPublicGetPopularTagsStatus403,
  TagPublicGetPopularTagsStatus404,
  TagPublicGetPopularTagsStatus500,
  TagPublicGetPopularTagsStatus501,
} from "../../models/tagPublic/TagPublicGetPopularTags.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagPublicGetPopularTags } from "../../clients/tagPublic/tagPublicGetPopularTags.ts";

export const tagPublicGetPopularTagsQueryKey = (
  entityType?: TagPublicGetPopularTagsPathEntityType,
  maxCount?: TagPublicGetPopularTagsPathMaxCount,
) =>
  [
    {
      url: "/api/cms-kit-public/tags/popular/:entityType/:maxCount",
      params: { entityType: entityType, maxCount: maxCount },
    },
  ] as const;

type TagPublicGetPopularTagsQueryKey = ReturnType<typeof tagPublicGetPopularTagsQueryKey>;

export function tagPublicGetPopularTagsQueryOptions(
  entityType?: TagPublicGetPopularTagsPathEntityType,
  maxCount?: TagPublicGetPopularTagsPathMaxCount,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagPublicGetPopularTagsQueryKey(entityType, maxCount);
  return queryOptions<
    TagPublicGetPopularTagsStatus200,
    ResponseErrorConfig<
      | TagPublicGetPopularTagsStatus400
      | TagPublicGetPopularTagsStatus401
      | TagPublicGetPopularTagsStatus403
      | TagPublicGetPopularTagsStatus404
      | TagPublicGetPopularTagsStatus500
      | TagPublicGetPopularTagsStatus501
    >,
    TagPublicGetPopularTagsStatus200,
    typeof queryKey
  >({
    enabled: !!(entityType && maxCount),
    queryKey,
    queryFn: async ({ signal }) => {
      return tagPublicGetPopularTags(entityType!, maxCount!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/tags/popular/:entityType/:maxCount}
 */
export function useTagPublicGetPopularTags<
  TData = TagPublicGetPopularTagsStatus200,
  TQueryData = TagPublicGetPopularTagsStatus200,
  TQueryKey extends QueryKey = TagPublicGetPopularTagsQueryKey,
>(
  entityType?: TagPublicGetPopularTagsPathEntityType,
  maxCount?: TagPublicGetPopularTagsPathMaxCount,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagPublicGetPopularTagsStatus200,
        ResponseErrorConfig<
          | TagPublicGetPopularTagsStatus400
          | TagPublicGetPopularTagsStatus401
          | TagPublicGetPopularTagsStatus403
          | TagPublicGetPopularTagsStatus404
          | TagPublicGetPopularTagsStatus500
          | TagPublicGetPopularTagsStatus501
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
    resolvedOptions?.queryKey ?? tagPublicGetPopularTagsQueryKey(entityType, maxCount);

  const query = useQuery(
    {
      ...tagPublicGetPopularTagsQueryOptions(entityType, maxCount, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagPublicGetPopularTagsStatus400
      | TagPublicGetPopularTagsStatus401
      | TagPublicGetPopularTagsStatus403
      | TagPublicGetPopularTagsStatus404
      | TagPublicGetPopularTagsStatus500
      | TagPublicGetPopularTagsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
