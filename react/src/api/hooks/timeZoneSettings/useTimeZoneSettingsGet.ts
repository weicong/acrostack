/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TimeZoneSettingsGetStatus200,
  TimeZoneSettingsGetStatus400,
  TimeZoneSettingsGetStatus401,
  TimeZoneSettingsGetStatus403,
  TimeZoneSettingsGetStatus404,
  TimeZoneSettingsGetStatus500,
  TimeZoneSettingsGetStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { timeZoneSettingsGet } from "../../clients/timeZoneSettings/timeZoneSettingsGet.ts";

export const timeZoneSettingsGetQueryKey = () =>
  [{ url: "/api/setting-management/timezone" }] as const;

type TimeZoneSettingsGetQueryKey = ReturnType<typeof timeZoneSettingsGetQueryKey>;

export function timeZoneSettingsGetQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
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
      return timeZoneSettingsGet({ ...config, signal: config.signal ?? signal });
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? timeZoneSettingsGetQueryKey();

  const query = useQuery(
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
