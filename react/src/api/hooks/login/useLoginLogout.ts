/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  LoginLogoutStatus200,
  LoginLogoutStatus204,
  LoginLogoutStatus400,
  LoginLogoutStatus401,
  LoginLogoutStatus403,
  LoginLogoutStatus404,
  LoginLogoutStatus500,
  LoginLogoutStatus501,
} from "../../models/login/LoginLogout.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { loginLogout } from "../../clients/login/loginLogout.ts";

export const loginLogoutQueryKey = () => [{ url: "/api/account/logout" }] as const;

type LoginLogoutQueryKey = ReturnType<typeof loginLogoutQueryKey>;

export function loginLogoutQueryOptions(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const queryKey = loginLogoutQueryKey();
  return queryOptions<
    LoginLogoutStatus200 | LoginLogoutStatus204,
    ResponseErrorConfig<
      | LoginLogoutStatus400
      | LoginLogoutStatus401
      | LoginLogoutStatus403
      | LoginLogoutStatus404
      | LoginLogoutStatus500
      | LoginLogoutStatus501
    >,
    LoginLogoutStatus200 | LoginLogoutStatus204,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return loginLogout({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/account/logout}
 */
export function useLoginLogout<
  TData = LoginLogoutStatus200 | LoginLogoutStatus204,
  TQueryData = LoginLogoutStatus200 | LoginLogoutStatus204,
  TQueryKey extends QueryKey = LoginLogoutQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        LoginLogoutStatus200 | LoginLogoutStatus204,
        ResponseErrorConfig<
          | LoginLogoutStatus400
          | LoginLogoutStatus401
          | LoginLogoutStatus403
          | LoginLogoutStatus404
          | LoginLogoutStatus500
          | LoginLogoutStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? loginLogoutQueryKey();

  const query = useQuery(
    {
      ...loginLogoutQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | LoginLogoutStatus400
      | LoginLogoutStatus401
      | LoginLogoutStatus403
      | LoginLogoutStatus404
      | LoginLogoutStatus500
      | LoginLogoutStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
