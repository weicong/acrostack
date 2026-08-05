/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  ReactionPublicGetForSelectionPathEntityType,
  ReactionPublicGetForSelectionPathEntityId,
  ReactionPublicGetForSelectionStatus200,
  ReactionPublicGetForSelectionStatus400,
  ReactionPublicGetForSelectionStatus401,
  ReactionPublicGetForSelectionStatus403,
  ReactionPublicGetForSelectionStatus404,
  ReactionPublicGetForSelectionStatus500,
  ReactionPublicGetForSelectionStatus501,
} from "../../models/reactionPublic/ReactionPublicGetForSelection.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { reactionPublicGetForSelection } from "../../clients/reactionPublic/reactionPublicGetForSelection.ts";

export const reactionPublicGetForSelectionQueryKey = (
  entityType?: ReactionPublicGetForSelectionPathEntityType,
  entityId?: ReactionPublicGetForSelectionPathEntityId,
) =>
  [
    {
      url: "/api/cms-kit-public/reactions/:entityType/:entityId",
      params: { entityType: entityType, entityId: entityId },
    },
  ] as const;

type ReactionPublicGetForSelectionQueryKey = ReturnType<
  typeof reactionPublicGetForSelectionQueryKey
>;

export function reactionPublicGetForSelectionQueryOptions(
  entityType?: ReactionPublicGetForSelectionPathEntityType,
  entityId?: ReactionPublicGetForSelectionPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = reactionPublicGetForSelectionQueryKey(entityType, entityId);
  return queryOptions<
    ReactionPublicGetForSelectionStatus200,
    ResponseErrorConfig<
      | ReactionPublicGetForSelectionStatus400
      | ReactionPublicGetForSelectionStatus401
      | ReactionPublicGetForSelectionStatus403
      | ReactionPublicGetForSelectionStatus404
      | ReactionPublicGetForSelectionStatus500
      | ReactionPublicGetForSelectionStatus501
    >,
    ReactionPublicGetForSelectionStatus200,
    typeof queryKey
  >({
    enabled: !!(entityType && entityId),
    queryKey,
    queryFn: async ({ signal }) => {
      return reactionPublicGetForSelection(entityType!, entityId!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/reactions/:entityType/:entityId}
 */
export function useReactionPublicGetForSelection<
  TData = ReactionPublicGetForSelectionStatus200,
  TQueryData = ReactionPublicGetForSelectionStatus200,
  TQueryKey extends QueryKey = ReactionPublicGetForSelectionQueryKey,
>(
  entityType?: ReactionPublicGetForSelectionPathEntityType,
  entityId?: ReactionPublicGetForSelectionPathEntityId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        ReactionPublicGetForSelectionStatus200,
        ResponseErrorConfig<
          | ReactionPublicGetForSelectionStatus400
          | ReactionPublicGetForSelectionStatus401
          | ReactionPublicGetForSelectionStatus403
          | ReactionPublicGetForSelectionStatus404
          | ReactionPublicGetForSelectionStatus500
          | ReactionPublicGetForSelectionStatus501
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
    resolvedOptions?.queryKey ?? reactionPublicGetForSelectionQueryKey(entityType, entityId);

  const query = useQuery(
    {
      ...reactionPublicGetForSelectionQueryOptions(entityType, entityId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | ReactionPublicGetForSelectionStatus400
      | ReactionPublicGetForSelectionStatus401
      | ReactionPublicGetForSelectionStatus403
      | ReactionPublicGetForSelectionStatus404
      | ReactionPublicGetForSelectionStatus500
      | ReactionPublicGetForSelectionStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
