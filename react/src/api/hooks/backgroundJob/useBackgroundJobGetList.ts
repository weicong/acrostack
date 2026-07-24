/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BackgroundJobGetListQueryFilter,
  BackgroundJobGetListQueryJobName,
  BackgroundJobGetListQueryIsAbandoned,
  BackgroundJobGetListQueryStartCreationTime,
  BackgroundJobGetListQueryEndCreationTime,
  BackgroundJobGetListQuerySorting,
  BackgroundJobGetListQuerySkipCount,
  BackgroundJobGetListQueryMaxResultCount,
  BackgroundJobGetListStatus200,
  BackgroundJobGetListStatus400,
  BackgroundJobGetListStatus401,
  BackgroundJobGetListStatus403,
  BackgroundJobGetListStatus404,
  BackgroundJobGetListStatus500,
  BackgroundJobGetListStatus501,
} from "../../models/backgroundJob/BackgroundJobGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { backgroundJobGetList } from "../../clients/backgroundJob/backgroundJobGetList.ts";

export const backgroundJobGetListQueryKey = (params?: {
  Filter?: BackgroundJobGetListQueryFilter;
  JobName?: BackgroundJobGetListQueryJobName;
  IsAbandoned?: BackgroundJobGetListQueryIsAbandoned;
  StartCreationTime?: BackgroundJobGetListQueryStartCreationTime;
  EndCreationTime?: BackgroundJobGetListQueryEndCreationTime;
  Sorting?: BackgroundJobGetListQuerySorting;
  SkipCount?: BackgroundJobGetListQuerySkipCount;
  MaxResultCount?: BackgroundJobGetListQueryMaxResultCount;
}) => [{ url: "/api/app/background-job" }, ...(params ? [params] : [])] as const;

type BackgroundJobGetListQueryKey = ReturnType<typeof backgroundJobGetListQueryKey>;

export function backgroundJobGetListQueryOptions(
  params?: {
    Filter?: BackgroundJobGetListQueryFilter;
    JobName?: BackgroundJobGetListQueryJobName;
    IsAbandoned?: BackgroundJobGetListQueryIsAbandoned;
    StartCreationTime?: BackgroundJobGetListQueryStartCreationTime;
    EndCreationTime?: BackgroundJobGetListQueryEndCreationTime;
    Sorting?: BackgroundJobGetListQuerySorting;
    SkipCount?: BackgroundJobGetListQuerySkipCount;
    MaxResultCount?: BackgroundJobGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = backgroundJobGetListQueryKey(params);
  return queryOptions<
    BackgroundJobGetListStatus200,
    ResponseErrorConfig<
      | BackgroundJobGetListStatus400
      | BackgroundJobGetListStatus401
      | BackgroundJobGetListStatus403
      | BackgroundJobGetListStatus404
      | BackgroundJobGetListStatus500
      | BackgroundJobGetListStatus501
    >,
    BackgroundJobGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return backgroundJobGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/background-job}
 */
export function useBackgroundJobGetList<
  TData = BackgroundJobGetListStatus200,
  TQueryData = BackgroundJobGetListStatus200,
  TQueryKey extends QueryKey = BackgroundJobGetListQueryKey,
>(
  params?: {
    Filter?: BackgroundJobGetListQueryFilter;
    JobName?: BackgroundJobGetListQueryJobName;
    IsAbandoned?: BackgroundJobGetListQueryIsAbandoned;
    StartCreationTime?: BackgroundJobGetListQueryStartCreationTime;
    EndCreationTime?: BackgroundJobGetListQueryEndCreationTime;
    Sorting?: BackgroundJobGetListQuerySorting;
    SkipCount?: BackgroundJobGetListQuerySkipCount;
    MaxResultCount?: BackgroundJobGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        BackgroundJobGetListStatus200,
        ResponseErrorConfig<
          | BackgroundJobGetListStatus400
          | BackgroundJobGetListStatus401
          | BackgroundJobGetListStatus403
          | BackgroundJobGetListStatus404
          | BackgroundJobGetListStatus500
          | BackgroundJobGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? backgroundJobGetListQueryKey(params);

  const query = useQuery(
    {
      ...backgroundJobGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BackgroundJobGetListStatus400
      | BackgroundJobGetListStatus401
      | BackgroundJobGetListStatus403
      | BackgroundJobGetListStatus404
      | BackgroundJobGetListStatus500
      | BackgroundJobGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
