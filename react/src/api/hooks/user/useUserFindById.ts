/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserFindByIdPathId,
  UserFindByIdStatus200,
  UserFindByIdStatus400,
  UserFindByIdStatus401,
  UserFindByIdStatus403,
  UserFindByIdStatus404,
  UserFindByIdStatus500,
  UserFindByIdStatus501,
} from "../../models/user/UserFindById.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userFindById } from "../../clients/user/userFindById.ts";

export const userFindByIdQueryKey = (id?: UserFindByIdPathId) =>
  [{ url: "/api/identity/users/by-id/:id", params: { id: id } }] as const;

type UserFindByIdQueryKey = ReturnType<typeof userFindByIdQueryKey>;

export function userFindByIdQueryOptions(
  id?: UserFindByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userFindByIdQueryKey(id);
  return queryOptions<
    UserFindByIdStatus200,
    ResponseErrorConfig<
      | UserFindByIdStatus400
      | UserFindByIdStatus401
      | UserFindByIdStatus403
      | UserFindByIdStatus404
      | UserFindByIdStatus500
      | UserFindByIdStatus501
    >,
    UserFindByIdStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return userFindById(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/by-id/:id}
 */
export function useUserFindById<
  TData = UserFindByIdStatus200,
  TQueryData = UserFindByIdStatus200,
  TQueryKey extends QueryKey = UserFindByIdQueryKey,
>(
  id?: UserFindByIdPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserFindByIdStatus200,
        ResponseErrorConfig<
          | UserFindByIdStatus400
          | UserFindByIdStatus401
          | UserFindByIdStatus403
          | UserFindByIdStatus404
          | UserFindByIdStatus500
          | UserFindByIdStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userFindByIdQueryKey(id);

  const query = useQuery(
    {
      ...userFindByIdQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserFindByIdStatus400
      | UserFindByIdStatus401
      | UserFindByIdStatus403
      | UserFindByIdStatus404
      | UserFindByIdStatus500
      | UserFindByIdStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
