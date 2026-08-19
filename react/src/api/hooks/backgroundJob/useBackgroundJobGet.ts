/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  BackgroundJobGetOptions,
  BackgroundJobGetStatus200,
  BackgroundJobGetStatus400,
  BackgroundJobGetStatus401,
  BackgroundJobGetStatus403,
  BackgroundJobGetStatus404,
  BackgroundJobGetStatus500,
  BackgroundJobGetStatus501,
} from "../../models/backgroundJob/BackgroundJobGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { backgroundJobGet } from "../../clients/backgroundJob/backgroundJobGet";

export const backgroundJobGetQueryKey = ({ path }: Omit<BackgroundJobGetOptions, "headers">) =>
  [{ url: "/api/app/background-job/:id", params: path }] as const;

type BackgroundJobGetQueryKey = ReturnType<typeof backgroundJobGetQueryKey>;

export function backgroundJobGetQueryOptions(
  { path }: BackgroundJobGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = backgroundJobGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await backgroundJobGet({
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
 * {@link /api/app/background-job/:id}
 */
export function useBackgroundJobGet<
  TData = BackgroundJobGetStatus200,
  TQueryData = BackgroundJobGetStatus200,
  TQueryKey extends QueryKey = BackgroundJobGetQueryKey,
>(
  { path }: { path: BackgroundJobGetOptions["path"] | (() => BackgroundJobGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? backgroundJobGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...backgroundJobGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
