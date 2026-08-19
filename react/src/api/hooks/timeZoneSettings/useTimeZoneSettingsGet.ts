/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TimeZoneSettingsGetStatus200,
  TimeZoneSettingsGetStatus400,
  TimeZoneSettingsGetStatus401,
  TimeZoneSettingsGetStatus403,
  TimeZoneSettingsGetStatus404,
  TimeZoneSettingsGetStatus500,
  TimeZoneSettingsGetStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { timeZoneSettingsGet } from "../../clients/timeZoneSettings/timeZoneSettingsGet";

export const timeZoneSettingsGetQueryKey = () =>
  [{ url: "/api/setting-management/timezone" }] as const;

type TimeZoneSettingsGetQueryKey = ReturnType<typeof timeZoneSettingsGetQueryKey>;

export function timeZoneSettingsGetQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = timeZoneSettingsGetQueryKey();
  return queryOptions<
    TimeZoneSettingsGetStatus200,
    ResponseErrorConfig<
      | TimeZoneSettingsGetStatus400
      | TimeZoneSettingsGetStatus401
      | TimeZoneSettingsGetStatus403
      | TimeZoneSettingsGetStatus404
      | TimeZoneSettingsGetStatus500
      | TimeZoneSettingsGetStatus501
    >,
    TimeZoneSettingsGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await timeZoneSettingsGet({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
    },
  });
}

/**
 * {@link /api/setting-management/timezone}
 */
export function useTimeZoneSettingsGet<
  TData = TimeZoneSettingsGetStatus200,
  TQueryData = TimeZoneSettingsGetStatus200,
  TQueryKey extends QueryKey = TimeZoneSettingsGetQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        TimeZoneSettingsGetStatus200,
        ResponseErrorConfig<
          | TimeZoneSettingsGetStatus400
          | TimeZoneSettingsGetStatus401
          | TimeZoneSettingsGetStatus403
          | TimeZoneSettingsGetStatus404
          | TimeZoneSettingsGetStatus500
          | TimeZoneSettingsGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? timeZoneSettingsGetQueryKey();

  const queryResult = useQuery(
    {
      ...timeZoneSettingsGetQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TimeZoneSettingsGetStatus400
      | TimeZoneSettingsGetStatus401
      | TimeZoneSettingsGetStatus403
      | TimeZoneSettingsGetStatus404
      | TimeZoneSettingsGetStatus500
      | TimeZoneSettingsGetStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
