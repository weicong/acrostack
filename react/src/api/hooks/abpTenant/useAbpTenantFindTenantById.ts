/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AbpTenantFindTenantByIdPathId,
  AbpTenantFindTenantByIdStatus200,
  AbpTenantFindTenantByIdStatus400,
  AbpTenantFindTenantByIdStatus401,
  AbpTenantFindTenantByIdStatus403,
  AbpTenantFindTenantByIdStatus404,
  AbpTenantFindTenantByIdStatus500,
  AbpTenantFindTenantByIdStatus501,
} from "../../models/abpTenant/AbpTenantFindTenantById.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { abpTenantFindTenantById } from "../../clients/abpTenant/abpTenantFindTenantById.ts";

export const abpTenantFindTenantByIdQueryKey = (id?: AbpTenantFindTenantByIdPathId) =>
  [{ url: "/api/abp/multi-tenancy/tenants/by-id/:id", params: { id: id } }] as const;

type AbpTenantFindTenantByIdQueryKey = ReturnType<typeof abpTenantFindTenantByIdQueryKey>;

export function abpTenantFindTenantByIdQueryOptions(
  id?: AbpTenantFindTenantByIdPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = abpTenantFindTenantByIdQueryKey(id);
  return queryOptions<
    AbpTenantFindTenantByIdStatus200,
    ResponseErrorConfig<
      | AbpTenantFindTenantByIdStatus400
      | AbpTenantFindTenantByIdStatus401
      | AbpTenantFindTenantByIdStatus403
      | AbpTenantFindTenantByIdStatus404
      | AbpTenantFindTenantByIdStatus500
      | AbpTenantFindTenantByIdStatus501
    >,
    AbpTenantFindTenantByIdStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return abpTenantFindTenantById(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-id/:id}
 */
export function useAbpTenantFindTenantById<
  TData = AbpTenantFindTenantByIdStatus200,
  TQueryData = AbpTenantFindTenantByIdStatus200,
  TQueryKey extends QueryKey = AbpTenantFindTenantByIdQueryKey,
>(
  id?: AbpTenantFindTenantByIdPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        AbpTenantFindTenantByIdStatus200,
        ResponseErrorConfig<
          | AbpTenantFindTenantByIdStatus400
          | AbpTenantFindTenantByIdStatus401
          | AbpTenantFindTenantByIdStatus403
          | AbpTenantFindTenantByIdStatus404
          | AbpTenantFindTenantByIdStatus500
          | AbpTenantFindTenantByIdStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? abpTenantFindTenantByIdQueryKey(id);

  const query = useQuery(
    {
      ...abpTenantFindTenantByIdQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AbpTenantFindTenantByIdStatus400
      | AbpTenantFindTenantByIdStatus401
      | AbpTenantFindTenantByIdStatus403
      | AbpTenantFindTenantByIdStatus404
      | AbpTenantFindTenantByIdStatus500
      | AbpTenantFindTenantByIdStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
