/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  RoleGetListQueryFilter,
  RoleGetListQuerySorting,
  RoleGetListQuerySkipCount,
  RoleGetListQueryMaxResultCount,
  RoleGetListQueryExtraProperties,
  RoleGetListStatus200,
  RoleGetListStatus400,
  RoleGetListStatus401,
  RoleGetListStatus403,
  RoleGetListStatus404,
  RoleGetListStatus500,
  RoleGetListStatus501,
} from "../../models/role/RoleGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { roleGetList } from "../../clients/role/roleGetList.ts";

export const roleGetListQueryKey = (params?: {
  Filter?: RoleGetListQueryFilter;
  Sorting?: RoleGetListQuerySorting;
  SkipCount?: RoleGetListQuerySkipCount;
  MaxResultCount?: RoleGetListQueryMaxResultCount;
  ExtraProperties?: RoleGetListQueryExtraProperties;
}) => [{ url: "/api/identity/roles" }, ...(params ? [params] : [])] as const;

type RoleGetListQueryKey = ReturnType<typeof roleGetListQueryKey>;

export function roleGetListQueryOptions(
  params?: {
    Filter?: RoleGetListQueryFilter;
    Sorting?: RoleGetListQuerySorting;
    SkipCount?: RoleGetListQuerySkipCount;
    MaxResultCount?: RoleGetListQueryMaxResultCount;
    ExtraProperties?: RoleGetListQueryExtraProperties;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = roleGetListQueryKey(params);
  return queryOptions<
    RoleGetListStatus200,
    ResponseErrorConfig<
      | RoleGetListStatus400
      | RoleGetListStatus401
      | RoleGetListStatus403
      | RoleGetListStatus404
      | RoleGetListStatus500
      | RoleGetListStatus501
    >,
    RoleGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return roleGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/roles}
 */
export function useRoleGetList<
  TData = RoleGetListStatus200,
  TQueryData = RoleGetListStatus200,
  TQueryKey extends QueryKey = RoleGetListQueryKey,
>(
  params?: {
    Filter?: RoleGetListQueryFilter;
    Sorting?: RoleGetListQuerySorting;
    SkipCount?: RoleGetListQuerySkipCount;
    MaxResultCount?: RoleGetListQueryMaxResultCount;
    ExtraProperties?: RoleGetListQueryExtraProperties;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        RoleGetListStatus200,
        ResponseErrorConfig<
          | RoleGetListStatus400
          | RoleGetListStatus401
          | RoleGetListStatus403
          | RoleGetListStatus404
          | RoleGetListStatus500
          | RoleGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? roleGetListQueryKey(params);

  const query = useQuery(
    {
      ...roleGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | RoleGetListStatus400
      | RoleGetListStatus401
      | RoleGetListStatus403
      | RoleGetListStatus404
      | RoleGetListStatus500
      | RoleGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
