/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TenantGetListOptions,
  TenantGetListStatus200,
  TenantGetListStatus400,
  TenantGetListStatus401,
  TenantGetListStatus403,
  TenantGetListStatus404,
  TenantGetListStatus500,
  TenantGetListStatus501,
} from "../../models/tenant/TenantGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantGetList } from "../../clients/tenant/tenantGetList";

export const tenantGetListQueryKey = ({ query }: Omit<TenantGetListOptions, "headers"> = {}) =>
  [{ url: "/api/multi-tenancy/tenants" }, ...(query ? [query] : [])] as const;

type TenantGetListQueryKey = ReturnType<typeof tenantGetListQueryKey>;

export function tenantGetListQueryOptions(
  { query }: TenantGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = tenantGetListQueryKey({ query });
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
      const { data } = await tenantGetList({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  { query }: { query?: TenantGetListOptions["query"] | (() => TenantGetListOptions["query"]) } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? tenantGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...tenantGetListQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
