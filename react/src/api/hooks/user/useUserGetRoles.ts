/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserGetRolesPathId,
  UserGetRolesStatus200,
  UserGetRolesStatus400,
  UserGetRolesStatus401,
  UserGetRolesStatus403,
  UserGetRolesStatus404,
  UserGetRolesStatus500,
  UserGetRolesStatus501,
} from "../../models/user/UserGetRoles.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userGetRoles } from "../../clients/user/userGetRoles.ts";

export const userGetRolesQueryKey = (id?: UserGetRolesPathId) =>
  [{ url: "/api/identity/users/:id/roles", params: { id: id } }] as const;

type UserGetRolesQueryKey = ReturnType<typeof userGetRolesQueryKey>;

export function userGetRolesQueryOptions(
  id?: UserGetRolesPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userGetRolesQueryKey(id);
  return queryOptions<
    UserGetRolesStatus200,
    ResponseErrorConfig<
      | UserGetRolesStatus400
      | UserGetRolesStatus401
      | UserGetRolesStatus403
      | UserGetRolesStatus404
      | UserGetRolesStatus500
      | UserGetRolesStatus501
    >,
    UserGetRolesStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return userGetRoles(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export function useUserGetRoles<
  TData = UserGetRolesStatus200,
  TQueryData = UserGetRolesStatus200,
  TQueryKey extends QueryKey = UserGetRolesQueryKey,
>(
  id?: UserGetRolesPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserGetRolesStatus200,
        ResponseErrorConfig<
          | UserGetRolesStatus400
          | UserGetRolesStatus401
          | UserGetRolesStatus403
          | UserGetRolesStatus404
          | UserGetRolesStatus500
          | UserGetRolesStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userGetRolesQueryKey(id);

  const query = useQuery(
    {
      ...userGetRolesQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserGetRolesStatus400
      | UserGetRolesStatus401
      | UserGetRolesStatus403
      | UserGetRolesStatus404
      | UserGetRolesStatus500
      | UserGetRolesStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
