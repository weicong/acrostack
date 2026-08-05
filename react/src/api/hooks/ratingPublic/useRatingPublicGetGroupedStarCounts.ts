/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  RatingPublicGetGroupedStarCountsPathEntityType,
  RatingPublicGetGroupedStarCountsPathEntityId,
  RatingPublicGetGroupedStarCountsStatus200,
  RatingPublicGetGroupedStarCountsStatus400,
  RatingPublicGetGroupedStarCountsStatus401,
  RatingPublicGetGroupedStarCountsStatus403,
  RatingPublicGetGroupedStarCountsStatus404,
  RatingPublicGetGroupedStarCountsStatus500,
  RatingPublicGetGroupedStarCountsStatus501,
} from "../../models/ratingPublic/RatingPublicGetGroupedStarCounts.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { ratingPublicGetGroupedStarCounts } from "../../clients/ratingPublic/ratingPublicGetGroupedStarCounts.ts";

export const ratingPublicGetGroupedStarCountsQueryKey = (
  entityType?: RatingPublicGetGroupedStarCountsPathEntityType,
  entityId?: RatingPublicGetGroupedStarCountsPathEntityId,
) =>
  [
    {
      url: "/api/cms-kit-public/ratings/:entityType/:entityId",
      params: { entityType: entityType, entityId: entityId },
    },
  ] as const;

type RatingPublicGetGroupedStarCountsQueryKey = ReturnType<
  typeof ratingPublicGetGroupedStarCountsQueryKey
>;

export function ratingPublicGetGroupedStarCountsQueryOptions(
  entityType?: RatingPublicGetGroupedStarCountsPathEntityType,
  entityId?: RatingPublicGetGroupedStarCountsPathEntityId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = ratingPublicGetGroupedStarCountsQueryKey(entityType, entityId);
  return queryOptions<
    RatingPublicGetGroupedStarCountsStatus200,
    ResponseErrorConfig<
      | RatingPublicGetGroupedStarCountsStatus400
      | RatingPublicGetGroupedStarCountsStatus401
      | RatingPublicGetGroupedStarCountsStatus403
      | RatingPublicGetGroupedStarCountsStatus404
      | RatingPublicGetGroupedStarCountsStatus500
      | RatingPublicGetGroupedStarCountsStatus501
    >,
    RatingPublicGetGroupedStarCountsStatus200,
    typeof queryKey
  >({
    enabled: !!(entityType && entityId),
    queryKey,
    queryFn: async ({ signal }) => {
      return ratingPublicGetGroupedStarCounts(entityType!, entityId!, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function useRatingPublicGetGroupedStarCounts<
  TData = RatingPublicGetGroupedStarCountsStatus200,
  TQueryData = RatingPublicGetGroupedStarCountsStatus200,
  TQueryKey extends QueryKey = RatingPublicGetGroupedStarCountsQueryKey,
>(
  entityType?: RatingPublicGetGroupedStarCountsPathEntityType,
  entityId?: RatingPublicGetGroupedStarCountsPathEntityId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        RatingPublicGetGroupedStarCountsStatus200,
        ResponseErrorConfig<
          | RatingPublicGetGroupedStarCountsStatus400
          | RatingPublicGetGroupedStarCountsStatus401
          | RatingPublicGetGroupedStarCountsStatus403
          | RatingPublicGetGroupedStarCountsStatus404
          | RatingPublicGetGroupedStarCountsStatus500
          | RatingPublicGetGroupedStarCountsStatus501
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
    resolvedOptions?.queryKey ?? ratingPublicGetGroupedStarCountsQueryKey(entityType, entityId);

  const query = useQuery(
    {
      ...ratingPublicGetGroupedStarCountsQueryOptions(entityType, entityId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | RatingPublicGetGroupedStarCountsStatus400
      | RatingPublicGetGroupedStarCountsStatus401
      | RatingPublicGetGroupedStarCountsStatus403
      | RatingPublicGetGroupedStarCountsStatus404
      | RatingPublicGetGroupedStarCountsStatus500
      | RatingPublicGetGroupedStarCountsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
