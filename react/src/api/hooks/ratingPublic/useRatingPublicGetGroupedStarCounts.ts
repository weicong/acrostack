/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RatingPublicGetGroupedStarCountsOptions,
  RatingPublicGetGroupedStarCountsStatus200,
  RatingPublicGetGroupedStarCountsStatus400,
  RatingPublicGetGroupedStarCountsStatus401,
  RatingPublicGetGroupedStarCountsStatus403,
  RatingPublicGetGroupedStarCountsStatus404,
  RatingPublicGetGroupedStarCountsStatus500,
  RatingPublicGetGroupedStarCountsStatus501,
} from "../../models/ratingPublic/RatingPublicGetGroupedStarCounts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { ratingPublicGetGroupedStarCounts } from "../../clients/ratingPublic/ratingPublicGetGroupedStarCounts";

export const ratingPublicGetGroupedStarCountsQueryKey = ({
  path,
}: Omit<RatingPublicGetGroupedStarCountsOptions, "headers">) =>
  [{ url: "/api/cms-kit-public/ratings/:entityType/:entityId", params: path }] as const;

type RatingPublicGetGroupedStarCountsQueryKey = ReturnType<
  typeof ratingPublicGetGroupedStarCountsQueryKey
>;

export function ratingPublicGetGroupedStarCountsQueryOptions(
  { path }: RatingPublicGetGroupedStarCountsOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = ratingPublicGetGroupedStarCountsQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await ratingPublicGetGroupedStarCounts({
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
 * {@link /api/cms-kit-public/ratings/:entityType/:entityId}
 */
export function useRatingPublicGetGroupedStarCounts<
  TData = RatingPublicGetGroupedStarCountsStatus200,
  TQueryData = RatingPublicGetGroupedStarCountsStatus200,
  TQueryKey extends QueryKey = RatingPublicGetGroupedStarCountsQueryKey,
>(
  {
    path,
  }: {
    path:
      | RatingPublicGetGroupedStarCountsOptions["path"]
      | (() => RatingPublicGetGroupedStarCountsOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey =
    resolvedOptions?.queryKey ?? ratingPublicGetGroupedStarCountsQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...ratingPublicGetGroupedStarCountsQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
