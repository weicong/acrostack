/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetResourceByProviderQueryResourceName,
  PermissionsGetResourceByProviderQueryResourceKey,
  PermissionsGetResourceByProviderQueryProviderName,
  PermissionsGetResourceByProviderQueryProviderKey,
  PermissionsGetResourceByProviderStatus200,
  PermissionsGetResourceByProviderStatus400,
  PermissionsGetResourceByProviderStatus401,
  PermissionsGetResourceByProviderStatus403,
  PermissionsGetResourceByProviderStatus404,
  PermissionsGetResourceByProviderStatus500,
  PermissionsGetResourceByProviderStatus501,
} from "../../models/permissions/PermissionsGetResourceByProvider.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceByProvider } from "../../clients/permissions/permissionsGetResourceByProvider.ts";

export const permissionsGetResourceByProviderQueryKey = (params?: {
  resourceName?: PermissionsGetResourceByProviderQueryResourceName;
  resourceKey?: PermissionsGetResourceByProviderQueryResourceKey;
  providerName?: PermissionsGetResourceByProviderQueryProviderName;
  providerKey?: PermissionsGetResourceByProviderQueryProviderKey;
}) =>
  [
    { url: "/api/permission-management/permissions/resource/by-provider" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsGetResourceByProviderQueryKey = ReturnType<
  typeof permissionsGetResourceByProviderQueryKey
>;

export function permissionsGetResourceByProviderQueryOptions(
  params?: {
    resourceName?: PermissionsGetResourceByProviderQueryResourceName;
    resourceKey?: PermissionsGetResourceByProviderQueryResourceKey;
    providerName?: PermissionsGetResourceByProviderQueryProviderName;
    providerKey?: PermissionsGetResourceByProviderQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetResourceByProviderQueryKey(params);
  return queryOptions<
    PermissionsGetResourceByProviderStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceByProviderStatus400
      | PermissionsGetResourceByProviderStatus401
      | PermissionsGetResourceByProviderStatus403
      | PermissionsGetResourceByProviderStatus404
      | PermissionsGetResourceByProviderStatus500
      | PermissionsGetResourceByProviderStatus501
    >,
    PermissionsGetResourceByProviderStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGetResourceByProvider(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource/by-provider}
 */
export function usePermissionsGetResourceByProvider<
  TData = PermissionsGetResourceByProviderStatus200,
  TQueryData = PermissionsGetResourceByProviderStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceByProviderQueryKey,
>(
  params?: {
    resourceName?: PermissionsGetResourceByProviderQueryResourceName;
    resourceKey?: PermissionsGetResourceByProviderQueryResourceKey;
    providerName?: PermissionsGetResourceByProviderQueryProviderName;
    providerKey?: PermissionsGetResourceByProviderQueryProviderKey;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceByProviderStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceByProviderStatus400
          | PermissionsGetResourceByProviderStatus401
          | PermissionsGetResourceByProviderStatus403
          | PermissionsGetResourceByProviderStatus404
          | PermissionsGetResourceByProviderStatus500
          | PermissionsGetResourceByProviderStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetResourceByProviderQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetResourceByProviderQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceByProviderStatus400
      | PermissionsGetResourceByProviderStatus401
      | PermissionsGetResourceByProviderStatus403
      | PermissionsGetResourceByProviderStatus404
      | PermissionsGetResourceByProviderStatus500
      | PermissionsGetResourceByProviderStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
