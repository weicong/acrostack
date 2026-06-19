/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TenantGetListQueryFilter,
  TenantGetListQuerySorting,
  TenantGetListQuerySkipCount,
  TenantGetListQueryMaxResultCount,
  TenantGetListStatus200,
  TenantGetListStatus400,
  TenantGetListStatus401,
  TenantGetListStatus403,
  TenantGetListStatus404,
  TenantGetListStatus500,
  TenantGetListStatus501,
} from "../../models/tenant/TenantGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantGetList } from "../../clients/tenant/tenantGetList.ts";

export const tenantGetListQueryKey = (params?: {
  Filter?: TenantGetListQueryFilter;
  Sorting?: TenantGetListQuerySorting;
  SkipCount?: TenantGetListQuerySkipCount;
  MaxResultCount?: TenantGetListQueryMaxResultCount;
}) => [{ url: "/api/multi-tenancy/tenants" }, ...(params ? [params] : [])] as const;

type TenantGetListQueryKey = ReturnType<typeof tenantGetListQueryKey>;

export function tenantGetListQueryOptions(
  params?: {
    Filter?: TenantGetListQueryFilter;
    Sorting?: TenantGetListQuerySorting;
    SkipCount?: TenantGetListQuerySkipCount;
    MaxResultCount?: TenantGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tenantGetListQueryKey(params);
  return queryOptions<
    TenantGetListStatus200,
    ResponseErrorConfig<
      | TenantGetListStatus400
      | TenantGetListStatus401
      | TenantGetListStatus403
      | TenantGetListStatus404
      | TenantGetListStatus500
      | TenantGetListStatus501
    >,
    TenantGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return tenantGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants}
 */
export function useTenantGetList<
  TData = TenantGetListStatus200,
  TQueryData = TenantGetListStatus200,
  TQueryKey extends QueryKey = TenantGetListQueryKey,
>(
  params?: {
    Filter?: TenantGetListQueryFilter;
    Sorting?: TenantGetListQuerySorting;
    SkipCount?: TenantGetListQuerySkipCount;
    MaxResultCount?: TenantGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        TenantGetListStatus200,
        ResponseErrorConfig<
          | TenantGetListStatus400
          | TenantGetListStatus401
          | TenantGetListStatus403
          | TenantGetListStatus404
          | TenantGetListStatus500
          | TenantGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tenantGetListQueryKey(params);

  const query = useQuery(
    {
      ...tenantGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TenantGetListStatus400
      | TenantGetListStatus401
      | TenantGetListStatus403
      | TenantGetListStatus404
      | TenantGetListStatus500
      | TenantGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
