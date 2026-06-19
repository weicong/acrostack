/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TimeZoneSettingsGetTimezonesStatus200,
  TimeZoneSettingsGetTimezonesStatus400,
  TimeZoneSettingsGetTimezonesStatus401,
  TimeZoneSettingsGetTimezonesStatus403,
  TimeZoneSettingsGetTimezonesStatus404,
  TimeZoneSettingsGetTimezonesStatus500,
  TimeZoneSettingsGetTimezonesStatus501,
} from "../../models/timeZoneSettings/TimeZoneSettingsGetTimezones.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { timeZoneSettingsGetTimezones } from "../../clients/timeZoneSettings/timeZoneSettingsGetTimezones.ts";

export const timeZoneSettingsGetTimezonesQueryKey = () =>
  [{ url: "/api/setting-management/timezone/timezones" }] as const;

type TimeZoneSettingsGetTimezonesQueryKey = ReturnType<typeof timeZoneSettingsGetTimezonesQueryKey>;

export function timeZoneSettingsGetTimezonesQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = timeZoneSettingsGetTimezonesQueryKey();
  return queryOptions<
    TimeZoneSettingsGetTimezonesStatus200,
    ResponseErrorConfig<
      | TimeZoneSettingsGetTimezonesStatus400
      | TimeZoneSettingsGetTimezonesStatus401
      | TimeZoneSettingsGetTimezonesStatus403
      | TimeZoneSettingsGetTimezonesStatus404
      | TimeZoneSettingsGetTimezonesStatus500
      | TimeZoneSettingsGetTimezonesStatus501
    >,
    TimeZoneSettingsGetTimezonesStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return timeZoneSettingsGetTimezones({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/setting-management/timezone/timezones}
 */
export function useTimeZoneSettingsGetTimezones<
  TData = TimeZoneSettingsGetTimezonesStatus200,
  TQueryData = TimeZoneSettingsGetTimezonesStatus200,
  TQueryKey extends QueryKey = TimeZoneSettingsGetTimezonesQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        TimeZoneSettingsGetTimezonesStatus200,
        ResponseErrorConfig<
          | TimeZoneSettingsGetTimezonesStatus400
          | TimeZoneSettingsGetTimezonesStatus401
          | TimeZoneSettingsGetTimezonesStatus403
          | TimeZoneSettingsGetTimezonesStatus404
          | TimeZoneSettingsGetTimezonesStatus500
          | TimeZoneSettingsGetTimezonesStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? timeZoneSettingsGetTimezonesQueryKey();

  const query = useQuery(
    {
      ...timeZoneSettingsGetTimezonesQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TimeZoneSettingsGetTimezonesStatus400
      | TimeZoneSettingsGetTimezonesStatus401
      | TimeZoneSettingsGetTimezonesStatus403
      | TimeZoneSettingsGetTimezonesStatus404
      | TimeZoneSettingsGetTimezonesStatus500
      | TimeZoneSettingsGetTimezonesStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
