/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  AbpTenantFindTenantByNamePathName,
  AbpTenantFindTenantByNameStatus200,
  AbpTenantFindTenantByNameStatus400,
  AbpTenantFindTenantByNameStatus401,
  AbpTenantFindTenantByNameStatus403,
  AbpTenantFindTenantByNameStatus404,
  AbpTenantFindTenantByNameStatus500,
  AbpTenantFindTenantByNameStatus501,
} from "../../models/abpTenant/AbpTenantFindTenantByName.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { abpTenantFindTenantByName } from "../../clients/abpTenant/abpTenantFindTenantByName.ts";

export const abpTenantFindTenantByNameQueryKey = (name?: AbpTenantFindTenantByNamePathName) =>
  [{ url: "/api/abp/multi-tenancy/tenants/by-name/:name", params: { name: name } }] as const;

type AbpTenantFindTenantByNameQueryKey = ReturnType<typeof abpTenantFindTenantByNameQueryKey>;

export function abpTenantFindTenantByNameQueryOptions(
  name?: AbpTenantFindTenantByNamePathName,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = abpTenantFindTenantByNameQueryKey(name);
  return queryOptions<
    AbpTenantFindTenantByNameStatus200,
    ResponseErrorConfig<
      | AbpTenantFindTenantByNameStatus400
      | AbpTenantFindTenantByNameStatus401
      | AbpTenantFindTenantByNameStatus403
      | AbpTenantFindTenantByNameStatus404
      | AbpTenantFindTenantByNameStatus500
      | AbpTenantFindTenantByNameStatus501
    >,
    AbpTenantFindTenantByNameStatus200,
    typeof queryKey
  >({
    enabled: !!name,
    queryKey,
    queryFn: async ({ signal }) => {
      return abpTenantFindTenantByName(name!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-name/:name}
 */
export function useAbpTenantFindTenantByName<
  TData = AbpTenantFindTenantByNameStatus200,
  TQueryData = AbpTenantFindTenantByNameStatus200,
  TQueryKey extends QueryKey = AbpTenantFindTenantByNameQueryKey,
>(
  name?: AbpTenantFindTenantByNamePathName,
  options: {
    query?: Partial<
      QueryObserverOptions<
        AbpTenantFindTenantByNameStatus200,
        ResponseErrorConfig<
          | AbpTenantFindTenantByNameStatus400
          | AbpTenantFindTenantByNameStatus401
          | AbpTenantFindTenantByNameStatus403
          | AbpTenantFindTenantByNameStatus404
          | AbpTenantFindTenantByNameStatus500
          | AbpTenantFindTenantByNameStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? abpTenantFindTenantByNameQueryKey(name);

  const query = useQuery(
    {
      ...abpTenantFindTenantByNameQueryOptions(name, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | AbpTenantFindTenantByNameStatus400
      | AbpTenantFindTenantByNameStatus401
      | AbpTenantFindTenantByNameStatus403
      | AbpTenantFindTenantByNameStatus404
      | AbpTenantFindTenantByNameStatus500
      | AbpTenantFindTenantByNameStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
