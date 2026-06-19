/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  TenantGetPathId,
  TenantGetStatus200,
  TenantGetStatus400,
  TenantGetStatus401,
  TenantGetStatus403,
  TenantGetStatus404,
  TenantGetStatus500,
  TenantGetStatus501,
} from "../../models/tenant/TenantGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantGet } from "../../clients/tenant/tenantGet.ts";

export const tenantGetQueryKey = (id?: TenantGetPathId) =>
  [{ url: "/api/multi-tenancy/tenants/:id", params: { id: id } }] as const;

type TenantGetQueryKey = ReturnType<typeof tenantGetQueryKey>;

export function tenantGetQueryOptions(
  id?: TenantGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = tenantGetQueryKey(id);
  return queryOptions<
    TenantGetStatus200,
    ResponseErrorConfig<
      | TenantGetStatus400
      | TenantGetStatus401
      | TenantGetStatus403
      | TenantGetStatus404
      | TenantGetStatus500
      | TenantGetStatus501
    >,
    TenantGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return tenantGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/multi-tenancy/tenants/:id}
 */
export function useTenantGet<
  TData = TenantGetStatus200,
  TQueryData = TenantGetStatus200,
  TQueryKey extends QueryKey = TenantGetQueryKey,
>(
  id?: TenantGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        TenantGetStatus200,
        ResponseErrorConfig<
          | TenantGetStatus400
          | TenantGetStatus401
          | TenantGetStatus403
          | TenantGetStatus404
          | TenantGetStatus500
          | TenantGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? tenantGetQueryKey(id);

  const query = useQuery(
    {
      ...tenantGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | TenantGetStatus400
      | TenantGetStatus401
      | TenantGetStatus403
      | TenantGetStatus404
      | TenantGetStatus500
      | TenantGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
