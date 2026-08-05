/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TagPublicGetAllRelatedTagsPathEntityType,
  TagPublicGetAllRelatedTagsPathEntityId,
  TagPublicGetAllRelatedTagsStatus200,
  TagPublicGetAllRelatedTagsStatus400,
  TagPublicGetAllRelatedTagsStatus401,
  TagPublicGetAllRelatedTagsStatus403,
  TagPublicGetAllRelatedTagsStatus404,
  TagPublicGetAllRelatedTagsStatus500,
  TagPublicGetAllRelatedTagsStatus501,
} from "../../models/tagPublic/TagPublicGetAllRelatedTags.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tagPublicGetAllRelatedTags } from "../../clients/tagPublic/tagPublicGetAllRelatedTags.ts";

export const tagPublicGetAllRelatedTagsQueryKey = (
  entityType?: TagPublicGetAllRelatedTagsPathEntityType,
  entityId?: TagPublicGetAllRelatedTagsPathEntityId,
) =>
  [
    {
      url: "/api/cms-kit-public/tags/:entityType/:entityId",
      params: { entityType: entityType, entityId: entityId },
    },
  ] as const;

type TagPublicGetAllRelatedTagsQueryKey = ReturnType<typeof tagPublicGetAllRelatedTagsQueryKey>;

export function tagPublicGetAllRelatedTagsQueryOptions(
  entityType?: TagPublicGetAllRelatedTagsPathEntityType,
  entityId?: TagPublicGetAllRelatedTagsPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tagPublicGetAllRelatedTagsQueryKey(entityType, entityId);
  return queryOptions<
    TagPublicGetAllRelatedTagsStatus200,
    ResponseErrorConfig<
      | TagPublicGetAllRelatedTagsStatus400
      | TagPublicGetAllRelatedTagsStatus401
      | TagPublicGetAllRelatedTagsStatus403
      | TagPublicGetAllRelatedTagsStatus404
      | TagPublicGetAllRelatedTagsStatus500
      | TagPublicGetAllRelatedTagsStatus501
    >,
    TagPublicGetAllRelatedTagsStatus200,
    typeof queryKey
  >({
    enabled: !!(entityType && entityId),
    queryKey,
    queryFn: async ({ signal }) => {
      return tagPublicGetAllRelatedTags(entityType!, entityId!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/tags/:entityType/:entityId}
 */
export function useTagPublicGetAllRelatedTags<
  TData = TagPublicGetAllRelatedTagsStatus200,
  TQueryData = TagPublicGetAllRelatedTagsStatus200,
  TQueryKey extends QueryKey = TagPublicGetAllRelatedTagsQueryKey,
>(
  entityType?: TagPublicGetAllRelatedTagsPathEntityType,
  entityId?: TagPublicGetAllRelatedTagsPathEntityId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TagPublicGetAllRelatedTagsStatus200,
        ResponseErrorConfig<
          | TagPublicGetAllRelatedTagsStatus400
          | TagPublicGetAllRelatedTagsStatus401
          | TagPublicGetAllRelatedTagsStatus403
          | TagPublicGetAllRelatedTagsStatus404
          | TagPublicGetAllRelatedTagsStatus500
          | TagPublicGetAllRelatedTagsStatus501
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
    resolvedOptions?.queryKey ?? tagPublicGetAllRelatedTagsQueryKey(entityType, entityId);

  const query = useQuery(
    {
      ...tagPublicGetAllRelatedTagsQueryOptions(entityType, entityId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TagPublicGetAllRelatedTagsStatus400
      | TagPublicGetAllRelatedTagsStatus401
      | TagPublicGetAllRelatedTagsStatus403
      | TagPublicGetAllRelatedTagsStatus404
      | TagPublicGetAllRelatedTagsStatus500
      | TagPublicGetAllRelatedTagsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
