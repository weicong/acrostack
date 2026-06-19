/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TenantGetDefaultConnectionStringPathId,
  TenantGetDefaultConnectionStringStatus200,
  TenantGetDefaultConnectionStringStatus400,
  TenantGetDefaultConnectionStringStatus401,
  TenantGetDefaultConnectionStringStatus403,
  TenantGetDefaultConnectionStringStatus404,
  TenantGetDefaultConnectionStringStatus500,
  TenantGetDefaultConnectionStringStatus501,
} from "../../models/tenant/TenantGetDefaultConnectionString.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantGetDefaultConnectionString } from "../../clients/tenant/tenantGetDefaultConnectionString.ts";

export const tenantGetDefaultConnectionStringQueryKey = (
  id?: TenantGetDefaultConnectionStringPathId,
) =>
  [
    { url: "/api/multi-tenancy/tenants/:id/default-connection-string", params: { id: id } },
  ] as const;

type TenantGetDefaultConnectionStringQueryKey = ReturnType<
  typeof tenantGetDefaultConnectionStringQueryKey
>;

export function tenantGetDefaultConnectionStringQueryOptions(
  id?: TenantGetDefaultConnectionStringPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tenantGetDefaultConnectionStringQueryKey(id);
  return queryOptions<
    TenantGetDefaultConnectionStringStatus200,
    ResponseErrorConfig<
      | TenantGetDefaultConnectionStringStatus400
      | TenantGetDefaultConnectionStringStatus401
      | TenantGetDefaultConnectionStringStatus403
      | TenantGetDefaultConnectionStringStatus404
      | TenantGetDefaultConnectionStringStatus500
      | TenantGetDefaultConnectionStringStatus501
    >,
    TenantGetDefaultConnectionStringStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return tenantGetDefaultConnectionString(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function useTenantGetDefaultConnectionString<
  TData = TenantGetDefaultConnectionStringStatus200,
  TQueryData = TenantGetDefaultConnectionStringStatus200,
  TQueryKey extends QueryKey = TenantGetDefaultConnectionStringQueryKey,
>(
  id?: TenantGetDefaultConnectionStringPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TenantGetDefaultConnectionStringStatus200,
        ResponseErrorConfig<
          | TenantGetDefaultConnectionStringStatus400
          | TenantGetDefaultConnectionStringStatus401
          | TenantGetDefaultConnectionStringStatus403
          | TenantGetDefaultConnectionStringStatus404
          | TenantGetDefaultConnectionStringStatus500
          | TenantGetDefaultConnectionStringStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tenantGetDefaultConnectionStringQueryKey(id);

  const query = useQuery(
    {
      ...tenantGetDefaultConnectionStringQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TenantGetDefaultConnectionStringStatus400
      | TenantGetDefaultConnectionStringStatus401
      | TenantGetDefaultConnectionStringStatus403
      | TenantGetDefaultConnectionStringStatus404
      | TenantGetDefaultConnectionStringStatus500
      | TenantGetDefaultConnectionStringStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
