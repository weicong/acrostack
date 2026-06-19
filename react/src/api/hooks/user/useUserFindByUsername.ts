/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserFindByUsernamePathUserName,
  UserFindByUsernameStatus200,
  UserFindByUsernameStatus400,
  UserFindByUsernameStatus401,
  UserFindByUsernameStatus403,
  UserFindByUsernameStatus404,
  UserFindByUsernameStatus500,
  UserFindByUsernameStatus501,
} from "../../models/user/UserFindByUsername.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userFindByUsername } from "../../clients/user/userFindByUsername.ts";

export const userFindByUsernameQueryKey = (userName?: UserFindByUsernamePathUserName) =>
  [{ url: "/api/identity/users/by-username/:userName", params: { userName: userName } }] as const;

type UserFindByUsernameQueryKey = ReturnType<typeof userFindByUsernameQueryKey>;

export function userFindByUsernameQueryOptions(
  userName?: UserFindByUsernamePathUserName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userFindByUsernameQueryKey(userName);
  return queryOptions<
    UserFindByUsernameStatus200,
    ResponseErrorConfig<
      | UserFindByUsernameStatus400
      | UserFindByUsernameStatus401
      | UserFindByUsernameStatus403
      | UserFindByUsernameStatus404
      | UserFindByUsernameStatus500
      | UserFindByUsernameStatus501
    >,
    UserFindByUsernameStatus200,
    typeof queryKey
  >({
    enabled: !!userName,
    queryKey,
    queryFn: async ({ signal }) => {
      return userFindByUsername(userName!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/by-username/:userName}
 */
export function useUserFindByUsername<
  TData = UserFindByUsernameStatus200,
  TQueryData = UserFindByUsernameStatus200,
  TQueryKey extends QueryKey = UserFindByUsernameQueryKey,
>(
  userName?: UserFindByUsernamePathUserName,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserFindByUsernameStatus200,
        ResponseErrorConfig<
          | UserFindByUsernameStatus400
          | UserFindByUsernameStatus401
          | UserFindByUsernameStatus403
          | UserFindByUsernameStatus404
          | UserFindByUsernameStatus500
          | UserFindByUsernameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userFindByUsernameQueryKey(userName);

  const query = useQuery(
    {
      ...userFindByUsernameQueryOptions(userName, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserFindByUsernameStatus400
      | UserFindByUsernameStatus401
      | UserFindByUsernameStatus403
      | UserFindByUsernameStatus404
      | UserFindByUsernameStatus500
      | UserFindByUsernameStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
