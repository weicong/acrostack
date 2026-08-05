/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TenantEditionGetTenantListQueryFilter,
  TenantEditionGetTenantListQueryEditionId,
  TenantEditionGetTenantListQuerySorting,
  TenantEditionGetTenantListQuerySkipCount,
  TenantEditionGetTenantListQueryMaxResultCount,
  TenantEditionGetTenantListStatus200,
  TenantEditionGetTenantListStatus400,
  TenantEditionGetTenantListStatus401,
  TenantEditionGetTenantListStatus403,
  TenantEditionGetTenantListStatus404,
  TenantEditionGetTenantListStatus500,
  TenantEditionGetTenantListStatus501,
} from "../../models/tenantEdition/TenantEditionGetTenantList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantEditionGetTenantList } from "../../clients/tenantEdition/tenantEditionGetTenantList.ts";

export const tenantEditionGetTenantListQueryKey = (params?: {
  Filter?: TenantEditionGetTenantListQueryFilter;
  EditionId?: TenantEditionGetTenantListQueryEditionId;
  Sorting?: TenantEditionGetTenantListQuerySorting;
  SkipCount?: TenantEditionGetTenantListQuerySkipCount;
  MaxResultCount?: TenantEditionGetTenantListQueryMaxResultCount;
}) => [{ url: "/api/app/tenant-edition/tenant-list" }, ...(params ? [params] : [])] as const;

type TenantEditionGetTenantListQueryKey = ReturnType<typeof tenantEditionGetTenantListQueryKey>;

export function tenantEditionGetTenantListQueryOptions(
  params?: {
    Filter?: TenantEditionGetTenantListQueryFilter;
    EditionId?: TenantEditionGetTenantListQueryEditionId;
    Sorting?: TenantEditionGetTenantListQuerySorting;
    SkipCount?: TenantEditionGetTenantListQuerySkipCount;
    MaxResultCount?: TenantEditionGetTenantListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tenantEditionGetTenantListQueryKey(params);
  return queryOptions<
    TenantEditionGetTenantListStatus200,
    ResponseErrorConfig<
      | TenantEditionGetTenantListStatus400
      | TenantEditionGetTenantListStatus401
      | TenantEditionGetTenantListStatus403
      | TenantEditionGetTenantListStatus404
      | TenantEditionGetTenantListStatus500
      | TenantEditionGetTenantListStatus501
    >,
    TenantEditionGetTenantListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return tenantEditionGetTenantList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/tenant-edition/tenant-list}
 */
export function useTenantEditionGetTenantList<
  TData = TenantEditionGetTenantListStatus200,
  TQueryData = TenantEditionGetTenantListStatus200,
  TQueryKey extends QueryKey = TenantEditionGetTenantListQueryKey,
>(
  params?: {
    Filter?: TenantEditionGetTenantListQueryFilter;
    EditionId?: TenantEditionGetTenantListQueryEditionId;
    Sorting?: TenantEditionGetTenantListQuerySorting;
    SkipCount?: TenantEditionGetTenantListQuerySkipCount;
    MaxResultCount?: TenantEditionGetTenantListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        TenantEditionGetTenantListStatus200,
        ResponseErrorConfig<
          | TenantEditionGetTenantListStatus400
          | TenantEditionGetTenantListStatus401
          | TenantEditionGetTenantListStatus403
          | TenantEditionGetTenantListStatus404
          | TenantEditionGetTenantListStatus500
          | TenantEditionGetTenantListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tenantEditionGetTenantListQueryKey(params);

  const query = useQuery(
    {
      ...tenantEditionGetTenantListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TenantEditionGetTenantListStatus400
      | TenantEditionGetTenantListStatus401
      | TenantEditionGetTenantListStatus403
      | TenantEditionGetTenantListStatus404
      | TenantEditionGetTenantListStatus500
      | TenantEditionGetTenantListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
