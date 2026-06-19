/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserLookupFindByIdPathId,
  UserLookupFindByIdStatus200,
  UserLookupFindByIdStatus400,
  UserLookupFindByIdStatus401,
  UserLookupFindByIdStatus403,
  UserLookupFindByIdStatus404,
  UserLookupFindByIdStatus500,
  UserLookupFindByIdStatus501,
} from "../../models/userLookup/UserLookupFindById.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userLookupFindById } from "../../clients/userLookup/userLookupFindById.ts";

export const userLookupFindByIdQueryKey = (id?: UserLookupFindByIdPathId) =>
  [{ url: "/api/identity/users/lookup/:id", params: { id: id } }] as const;

type UserLookupFindByIdQueryKey = ReturnType<typeof userLookupFindByIdQueryKey>;

export function userLookupFindByIdQueryOptions(
  id?: UserLookupFindByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userLookupFindByIdQueryKey(id);
  return queryOptions<
    UserLookupFindByIdStatus200,
    ResponseErrorConfig<
      | UserLookupFindByIdStatus400
      | UserLookupFindByIdStatus401
      | UserLookupFindByIdStatus403
      | UserLookupFindByIdStatus404
      | UserLookupFindByIdStatus500
      | UserLookupFindByIdStatus501
    >,
    UserLookupFindByIdStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return userLookupFindById(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users/lookup/:id}
 */
export function useUserLookupFindById<
  TData = UserLookupFindByIdStatus200,
  TQueryData = UserLookupFindByIdStatus200,
  TQueryKey extends QueryKey = UserLookupFindByIdQueryKey,
>(
  id?: UserLookupFindByIdPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserLookupFindByIdStatus200,
        ResponseErrorConfig<
          | UserLookupFindByIdStatus400
          | UserLookupFindByIdStatus401
          | UserLookupFindByIdStatus403
          | UserLookupFindByIdStatus404
          | UserLookupFindByIdStatus500
          | UserLookupFindByIdStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userLookupFindByIdQueryKey(id);

  const query = useQuery(
    {
      ...userLookupFindByIdQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserLookupFindByIdStatus400
      | UserLookupFindByIdStatus401
      | UserLookupFindByIdStatus403
      | UserLookupFindByIdStatus404
      | UserLookupFindByIdStatus500
      | UserLookupFindByIdStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
