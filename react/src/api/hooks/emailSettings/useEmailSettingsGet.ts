/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  EmailSettingsGetStatus200,
  EmailSettingsGetStatus400,
  EmailSettingsGetStatus401,
  EmailSettingsGetStatus403,
  EmailSettingsGetStatus404,
  EmailSettingsGetStatus500,
  EmailSettingsGetStatus501,
} from "../../models/emailSettings/EmailSettingsGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { emailSettingsGet } from "../../clients/emailSettings/emailSettingsGet.ts";

export const emailSettingsGetQueryKey = () =>
  [{ url: "/api/setting-management/emailing" }] as const;

type EmailSettingsGetQueryKey = ReturnType<typeof emailSettingsGetQueryKey>;

export function emailSettingsGetQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = emailSettingsGetQueryKey();
  return queryOptions<
    EmailSettingsGetStatus200,
    ResponseErrorConfig<
      | EmailSettingsGetStatus400
      | EmailSettingsGetStatus401
      | EmailSettingsGetStatus403
      | EmailSettingsGetStatus404
      | EmailSettingsGetStatus500
      | EmailSettingsGetStatus501
    >,
    EmailSettingsGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return emailSettingsGet({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/setting-management/emailing}
 */
export function useEmailSettingsGet<
  TData = EmailSettingsGetStatus200,
  TQueryData = EmailSettingsGetStatus200,
  TQueryKey extends QueryKey = EmailSettingsGetQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        EmailSettingsGetStatus200,
        ResponseErrorConfig<
          | EmailSettingsGetStatus400
          | EmailSettingsGetStatus401
          | EmailSettingsGetStatus403
          | EmailSettingsGetStatus404
          | EmailSettingsGetStatus500
          | EmailSettingsGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? emailSettingsGetQueryKey();

  const query = useQuery(
    {
      ...emailSettingsGetQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | EmailSettingsGetStatus400
      | EmailSettingsGetStatus401
      | EmailSettingsGetStatus403
      | EmailSettingsGetStatus404
      | EmailSettingsGetStatus500
      | EmailSettingsGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
