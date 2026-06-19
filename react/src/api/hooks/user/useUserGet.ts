/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserGetPathId,
  UserGetStatus200,
  UserGetStatus400,
  UserGetStatus401,
  UserGetStatus403,
  UserGetStatus404,
  UserGetStatus500,
  UserGetStatus501,
} from "../../models/user/UserGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userGet } from "../../clients/user/userGet.ts";

export const userGetQueryKey = (id?: UserGetPathId) =>
  [{ url: "/api/identity/users/:id", params: { id: id } }] as const;

type UserGetQueryKey = ReturnType<typeof userGetQueryKey>;

export function userGetQueryOptions(
  id?: UserGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userGetQueryKey(id);
  return queryOptions<
    UserGetStatus200,
    ResponseErrorConfig<
      | UserGetStatus400
      | UserGetStatus401
      | UserGetStatus403
      | UserGetStatus404
      | UserGetStatus500
      | UserGetStatus501
    >,
    UserGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return userGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/:id}
 */
export function useUserGet<
  TData = UserGetStatus200,
  TQueryData = UserGetStatus200,
  TQueryKey extends QueryKey = UserGetQueryKey,
>(
  id?: UserGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserGetStatus200,
        ResponseErrorConfig<
          | UserGetStatus400
          | UserGetStatus401
          | UserGetStatus403
          | UserGetStatus404
          | UserGetStatus500
          | UserGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userGetQueryKey(id);

  const query = useQuery(
    {
      ...userGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserGetStatus400
      | UserGetStatus401
      | UserGetStatus403
      | UserGetStatus404
      | UserGetStatus500
      | UserGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
