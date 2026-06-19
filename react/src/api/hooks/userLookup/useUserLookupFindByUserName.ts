/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserLookupFindByUserNamePathUserName,
  UserLookupFindByUserNameStatus200,
  UserLookupFindByUserNameStatus400,
  UserLookupFindByUserNameStatus401,
  UserLookupFindByUserNameStatus403,
  UserLookupFindByUserNameStatus404,
  UserLookupFindByUserNameStatus500,
  UserLookupFindByUserNameStatus501,
} from "../../models/userLookup/UserLookupFindByUserName.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupFindByUserName } from "../../clients/userLookup/userLookupFindByUserName.ts";

export const userLookupFindByUserNameQueryKey = (userName?: UserLookupFindByUserNamePathUserName) =>
  [
    { url: "/api/identity/users/lookup/by-username/:userName", params: { userName: userName } },
  ] as const;

type UserLookupFindByUserNameQueryKey = ReturnType<typeof userLookupFindByUserNameQueryKey>;

export function userLookupFindByUserNameQueryOptions(
  userName?: UserLookupFindByUserNamePathUserName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userLookupFindByUserNameQueryKey(userName);
  return queryOptions<
    UserLookupFindByUserNameStatus200,
    ResponseErrorConfig<
      | UserLookupFindByUserNameStatus400
      | UserLookupFindByUserNameStatus401
      | UserLookupFindByUserNameStatus403
      | UserLookupFindByUserNameStatus404
      | UserLookupFindByUserNameStatus500
      | UserLookupFindByUserNameStatus501
    >,
    UserLookupFindByUserNameStatus200,
    typeof queryKey
  >({
    enabled: !!userName,
    queryKey,
    queryFn: async ({ signal }) => {
      return userLookupFindByUserName(userName!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/lookup/by-username/:userName}
 */
export function useUserLookupFindByUserName<
  TData = UserLookupFindByUserNameStatus200,
  TQueryData = UserLookupFindByUserNameStatus200,
  TQueryKey extends QueryKey = UserLookupFindByUserNameQueryKey,
>(
  userName?: UserLookupFindByUserNamePathUserName,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupFindByUserNameStatus200,
        ResponseErrorConfig<
          | UserLookupFindByUserNameStatus400
          | UserLookupFindByUserNameStatus401
          | UserLookupFindByUserNameStatus403
          | UserLookupFindByUserNameStatus404
          | UserLookupFindByUserNameStatus500
          | UserLookupFindByUserNameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userLookupFindByUserNameQueryKey(userName);

  const query = useQuery(
    {
      ...userLookupFindByUserNameQueryOptions(userName, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupFindByUserNameStatus400
      | UserLookupFindByUserNameStatus401
      | UserLookupFindByUserNameStatus403
      | UserLookupFindByUserNameStatus404
      | UserLookupFindByUserNameStatus500
      | UserLookupFindByUserNameStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
