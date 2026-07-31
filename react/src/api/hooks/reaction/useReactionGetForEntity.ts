/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ReactionGetForEntityPathEntityId,
  ReactionGetForEntityQueryEntityType,
  ReactionGetForEntityStatus200,
  ReactionGetForEntityStatus400,
  ReactionGetForEntityStatus401,
  ReactionGetForEntityStatus403,
  ReactionGetForEntityStatus404,
  ReactionGetForEntityStatus500,
  ReactionGetForEntityStatus501,
} from "../../models/reaction/ReactionGetForEntity.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { reactionGetForEntity } from "../../clients/reaction/reactionGetForEntity.ts";

export const reactionGetForEntityQueryKey = (
  entityId?: ReactionGetForEntityPathEntityId,
  params?: { entityType?: ReactionGetForEntityQueryEntityType },
) =>
  [
    { url: "/api/app/reaction/for-entity/:entityId", params: { entityId: entityId } },
    ...(params ? [params] : []),
  ] as const;

type ReactionGetForEntityQueryKey = ReturnType<typeof reactionGetForEntityQueryKey>;

export function reactionGetForEntityQueryOptions(
  entityId?: ReactionGetForEntityPathEntityId,
  params?: { entityType?: ReactionGetForEntityQueryEntityType },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = reactionGetForEntityQueryKey(entityId, params);
  return queryOptions<
    ReactionGetForEntityStatus200,
    ResponseErrorConfig<
      | ReactionGetForEntityStatus400
      | ReactionGetForEntityStatus401
      | ReactionGetForEntityStatus403
      | ReactionGetForEntityStatus404
      | ReactionGetForEntityStatus500
      | ReactionGetForEntityStatus501
    >,
    ReactionGetForEntityStatus200,
    typeof queryKey
  >({
    enabled: !!entityId,
    queryKey,
    queryFn: async ({ signal }) => {
      return reactionGetForEntity(entityId!, params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/app/reaction/for-entity/:entityId}
 */
export function useReactionGetForEntity<
  TData = ReactionGetForEntityStatus200,
  TQueryData = ReactionGetForEntityStatus200,
  TQueryKey extends QueryKey = ReactionGetForEntityQueryKey,
>(
  entityId?: ReactionGetForEntityPathEntityId,
  params?: { entityType?: ReactionGetForEntityQueryEntityType },
  options: {
    query?: Partial<
      QueryObserverOptions<
        ReactionGetForEntityStatus200,
        ResponseErrorConfig<
          | ReactionGetForEntityStatus400
          | ReactionGetForEntityStatus401
          | ReactionGetForEntityStatus403
          | ReactionGetForEntityStatus404
          | ReactionGetForEntityStatus500
          | ReactionGetForEntityStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? reactionGetForEntityQueryKey(entityId, params);

  const query = useQuery(
    {
      ...reactionGetForEntityQueryOptions(entityId, params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ReactionGetForEntityStatus400
      | ReactionGetForEntityStatus401
      | ReactionGetForEntityStatus403
      | ReactionGetForEntityStatus404
      | ReactionGetForEntityStatus500
      | ReactionGetForEntityStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
