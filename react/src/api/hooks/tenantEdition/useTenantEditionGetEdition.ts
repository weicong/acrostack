/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TenantEditionGetEditionPathTenantId,
  TenantEditionGetEditionStatus200,
  TenantEditionGetEditionStatus400,
  TenantEditionGetEditionStatus401,
  TenantEditionGetEditionStatus403,
  TenantEditionGetEditionStatus404,
  TenantEditionGetEditionStatus500,
  TenantEditionGetEditionStatus501,
} from "../../models/tenantEdition/TenantEditionGetEdition.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantEditionGetEdition } from "../../clients/tenantEdition/tenantEditionGetEdition.ts";

export const tenantEditionGetEditionQueryKey = (tenantId?: TenantEditionGetEditionPathTenantId) =>
  [{ url: "/api/app/tenant-edition/edition/:tenantId", params: { tenantId: tenantId } }] as const;

type TenantEditionGetEditionQueryKey = ReturnType<typeof tenantEditionGetEditionQueryKey>;

export function tenantEditionGetEditionQueryOptions(
  tenantId?: TenantEditionGetEditionPathTenantId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tenantEditionGetEditionQueryKey(tenantId);
  return queryOptions<
    TenantEditionGetEditionStatus200,
    ResponseErrorConfig<
      | TenantEditionGetEditionStatus400
      | TenantEditionGetEditionStatus401
      | TenantEditionGetEditionStatus403
      | TenantEditionGetEditionStatus404
      | TenantEditionGetEditionStatus500
      | TenantEditionGetEditionStatus501
    >,
    TenantEditionGetEditionStatus200,
    typeof queryKey
  >({
    enabled: !!tenantId,
    queryKey,
    queryFn: async ({ signal }) => {
      return tenantEditionGetEdition(tenantId!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/tenant-edition/edition/:tenantId}
 */
export function useTenantEditionGetEdition<
  TData = TenantEditionGetEditionStatus200,
  TQueryData = TenantEditionGetEditionStatus200,
  TQueryKey extends QueryKey = TenantEditionGetEditionQueryKey,
>(
  tenantId?: TenantEditionGetEditionPathTenantId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TenantEditionGetEditionStatus200,
        ResponseErrorConfig<
          | TenantEditionGetEditionStatus400
          | TenantEditionGetEditionStatus401
          | TenantEditionGetEditionStatus403
          | TenantEditionGetEditionStatus404
          | TenantEditionGetEditionStatus500
          | TenantEditionGetEditionStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tenantEditionGetEditionQueryKey(tenantId);

  const query = useQuery(
    {
      ...tenantEditionGetEditionQueryOptions(tenantId, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TenantEditionGetEditionStatus400
      | TenantEditionGetEditionStatus401
      | TenantEditionGetEditionStatus403
      | TenantEditionGetEditionStatus404
      | TenantEditionGetEditionStatus500
      | TenantEditionGetEditionStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
