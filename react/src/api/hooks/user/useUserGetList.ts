/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  UserGetListQueryFilter,
  UserGetListQuerySorting,
  UserGetListQuerySkipCount,
  UserGetListQueryMaxResultCount,
  UserGetListQueryExtraProperties,
  UserGetListStatus200,
  UserGetListStatus400,
  UserGetListStatus401,
  UserGetListStatus403,
  UserGetListStatus404,
  UserGetListStatus500,
  UserGetListStatus501,
} from "../../models/user/UserGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { userGetList } from "../../clients/user/userGetList.ts";

export const userGetListQueryKey = (params?: {
  Filter?: UserGetListQueryFilter;
  Sorting?: UserGetListQuerySorting;
  SkipCount?: UserGetListQuerySkipCount;
  MaxResultCount?: UserGetListQueryMaxResultCount;
  ExtraProperties?: UserGetListQueryExtraProperties;
}) => [{ url: "/api/identity/users" }, ...(params ? [params] : [])] as const;

type UserGetListQueryKey = ReturnType<typeof userGetListQueryKey>;

export function userGetListQueryOptions(
  params?: {
    Filter?: UserGetListQueryFilter;
    Sorting?: UserGetListQuerySorting;
    SkipCount?: UserGetListQuerySkipCount;
    MaxResultCount?: UserGetListQueryMaxResultCount;
    ExtraProperties?: UserGetListQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = userGetListQueryKey(params);
  return queryOptions<
    UserGetListStatus200,
    ResponseErrorConfig<
      | UserGetListStatus400
      | UserGetListStatus401
      | UserGetListStatus403
      | UserGetListStatus404
      | UserGetListStatus500
      | UserGetListStatus501
    >,
    UserGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return userGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/users}
 */
export function useUserGetList<
  TData = UserGetListStatus200,
  TQueryData = UserGetListStatus200,
  TQueryKey extends QueryKey = UserGetListQueryKey,
>(
  params?: {
    Filter?: UserGetListQueryFilter;
    Sorting?: UserGetListQuerySorting;
    SkipCount?: UserGetListQuerySkipCount;
    MaxResultCount?: UserGetListQueryMaxResultCount;
    ExtraProperties?: UserGetListQueryExtraProperties;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        UserGetListStatus200,
        ResponseErrorConfig<
          | UserGetListStatus400
          | UserGetListStatus401
          | UserGetListStatus403
          | UserGetListStatus404
          | UserGetListStatus500
          | UserGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? userGetListQueryKey(params);

  const query = useQuery(
    {
      ...userGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | UserGetListStatus400
      | UserGetListStatus401
      | UserGetListStatus403
      | UserGetListStatus404
      | UserGetListStatus500
      | UserGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
