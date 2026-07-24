/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  BackgroundJobGetPathId,
  BackgroundJobGetStatus200,
  BackgroundJobGetStatus400,
  BackgroundJobGetStatus401,
  BackgroundJobGetStatus403,
  BackgroundJobGetStatus404,
  BackgroundJobGetStatus500,
  BackgroundJobGetStatus501,
} from "../../models/backgroundJob/BackgroundJobGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { backgroundJobGet } from "../../clients/backgroundJob/backgroundJobGet.ts";

export const backgroundJobGetQueryKey = (id?: BackgroundJobGetPathId) =>
  [{ url: "/api/app/background-job/:id", params: { id: id } }] as const;

type BackgroundJobGetQueryKey = ReturnType<typeof backgroundJobGetQueryKey>;

export function backgroundJobGetQueryOptions(
  id?: BackgroundJobGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = backgroundJobGetQueryKey(id);
  return queryOptions<
    BackgroundJobGetStatus200,
    ResponseErrorConfig<
      | BackgroundJobGetStatus400
      | BackgroundJobGetStatus401
      | BackgroundJobGetStatus403
      | BackgroundJobGetStatus404
      | BackgroundJobGetStatus500
      | BackgroundJobGetStatus501
    >,
    BackgroundJobGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return backgroundJobGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/background-job/:id}
 */
export function useBackgroundJobGet<
  TData = BackgroundJobGetStatus200,
  TQueryData = BackgroundJobGetStatus200,
  TQueryKey extends QueryKey = BackgroundJobGetQueryKey,
>(
  id?: BackgroundJobGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        BackgroundJobGetStatus200,
        ResponseErrorConfig<
          | BackgroundJobGetStatus400
          | BackgroundJobGetStatus401
          | BackgroundJobGetStatus403
          | BackgroundJobGetStatus404
          | BackgroundJobGetStatus500
          | BackgroundJobGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? backgroundJobGetQueryKey(id);

  const query = useQuery(
    {
      ...backgroundJobGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | BackgroundJobGetStatus400
      | BackgroundJobGetStatus401
      | BackgroundJobGetStatus403
      | BackgroundJobGetStatus404
      | BackgroundJobGetStatus500
      | BackgroundJobGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
