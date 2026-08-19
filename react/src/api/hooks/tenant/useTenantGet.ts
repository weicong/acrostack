/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  TenantGetOptions,
  TenantGetStatus200,
  TenantGetStatus400,
  TenantGetStatus401,
  TenantGetStatus403,
  TenantGetStatus404,
  TenantGetStatus500,
  TenantGetStatus501,
} from "../../models/tenant/TenantGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { tenantGet } from "../../clients/tenant/tenantGet";

export const tenantGetQueryKey = ({ path }: Omit<TenantGetOptions, "headers">) =>
  [{ url: "/api/multi-tenancy/tenants/:id", params: path }] as const;

type TenantGetQueryKey = ReturnType<typeof tenantGetQueryKey>;

export function tenantGetQueryOptions(
  { path }: TenantGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = tenantGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await tenantGet({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  { path }: { path: TenantGetOptions["path"] | (() => TenantGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? tenantGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...tenantGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
