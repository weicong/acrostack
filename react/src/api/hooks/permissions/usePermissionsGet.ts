/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetQueryProviderName,
  PermissionsGetQueryProviderKey,
  PermissionsGetStatus200,
  PermissionsGetStatus400,
  PermissionsGetStatus401,
  PermissionsGetStatus403,
  PermissionsGetStatus404,
  PermissionsGetStatus500,
  PermissionsGetStatus501,
} from "../../models/permissions/PermissionsGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGet } from "../../clients/permissions/permissionsGet.ts";

export const permissionsGetQueryKey = (params?: {
  providerName?: PermissionsGetQueryProviderName;
  providerKey?: PermissionsGetQueryProviderKey;
}) => [{ url: "/api/permission-management/permissions" }, ...(params ? [params] : [])] as const;

type PermissionsGetQueryKey = ReturnType<typeof permissionsGetQueryKey>;

export function permissionsGetQueryOptions(
  params?: {
    providerName?: PermissionsGetQueryProviderName;
    providerKey?: PermissionsGetQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetQueryKey(params);
  return queryOptions<
    PermissionsGetStatus200,
    ResponseErrorConfig<
      | PermissionsGetStatus400
      | PermissionsGetStatus401
      | PermissionsGetStatus403
      | PermissionsGetStatus404
      | PermissionsGetStatus500
      | PermissionsGetStatus501
    >,
    PermissionsGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGet(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/permission-management/permissions}
 */
export function usePermissionsGet<
  TData = PermissionsGetStatus200,
  TQueryData = PermissionsGetStatus200,
  TQueryKey extends QueryKey = PermissionsGetQueryKey,
>(
  params?: {
    providerName?: PermissionsGetQueryProviderName;
    providerKey?: PermissionsGetQueryProviderKey;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetStatus200,
        ResponseErrorConfig<
          | PermissionsGetStatus400
          | PermissionsGetStatus401
          | PermissionsGetStatus403
          | PermissionsGetStatus404
          | PermissionsGetStatus500
          | PermissionsGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetStatus400
      | PermissionsGetStatus401
      | PermissionsGetStatus403
      | PermissionsGetStatus404
      | PermissionsGetStatus500
      | PermissionsGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
