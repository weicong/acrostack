/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetResourceProviderKeyLookupServicesQueryResourceName,
  PermissionsGetResourceProviderKeyLookupServicesStatus200,
  PermissionsGetResourceProviderKeyLookupServicesStatus400,
  PermissionsGetResourceProviderKeyLookupServicesStatus401,
  PermissionsGetResourceProviderKeyLookupServicesStatus403,
  PermissionsGetResourceProviderKeyLookupServicesStatus404,
  PermissionsGetResourceProviderKeyLookupServicesStatus500,
  PermissionsGetResourceProviderKeyLookupServicesStatus501,
} from "../../models/permissions/PermissionsGetResourceProviderKeyLookupServices.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceProviderKeyLookupServices } from "../../clients/permissions/permissionsGetResourceProviderKeyLookupServices.ts";

export const permissionsGetResourceProviderKeyLookupServicesQueryKey = (params?: {
  resourceName?: PermissionsGetResourceProviderKeyLookupServicesQueryResourceName;
}) =>
  [
    { url: "/api/permission-management/permissions/resource-provider-key-lookup-services" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsGetResourceProviderKeyLookupServicesQueryKey = ReturnType<
  typeof permissionsGetResourceProviderKeyLookupServicesQueryKey
>;

export function permissionsGetResourceProviderKeyLookupServicesQueryOptions(
  params?: { resourceName?: PermissionsGetResourceProviderKeyLookupServicesQueryResourceName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetResourceProviderKeyLookupServicesQueryKey(params);
  return queryOptions<
    PermissionsGetResourceProviderKeyLookupServicesStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceProviderKeyLookupServicesStatus400
      | PermissionsGetResourceProviderKeyLookupServicesStatus401
      | PermissionsGetResourceProviderKeyLookupServicesStatus403
      | PermissionsGetResourceProviderKeyLookupServicesStatus404
      | PermissionsGetResourceProviderKeyLookupServicesStatus500
      | PermissionsGetResourceProviderKeyLookupServicesStatus501
    >,
    PermissionsGetResourceProviderKeyLookupServicesStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGetResourceProviderKeyLookupServices(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource-provider-key-lookup-services}
 */
export function usePermissionsGetResourceProviderKeyLookupServices<
  TData = PermissionsGetResourceProviderKeyLookupServicesStatus200,
  TQueryData = PermissionsGetResourceProviderKeyLookupServicesStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceProviderKeyLookupServicesQueryKey,
>(
  params?: { resourceName?: PermissionsGetResourceProviderKeyLookupServicesQueryResourceName },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceProviderKeyLookupServicesStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceProviderKeyLookupServicesStatus400
          | PermissionsGetResourceProviderKeyLookupServicesStatus401
          | PermissionsGetResourceProviderKeyLookupServicesStatus403
          | PermissionsGetResourceProviderKeyLookupServicesStatus404
          | PermissionsGetResourceProviderKeyLookupServicesStatus500
          | PermissionsGetResourceProviderKeyLookupServicesStatus501
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
  const queryKey =
    resolvedOptions?.queryKey ?? permissionsGetResourceProviderKeyLookupServicesQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetResourceProviderKeyLookupServicesQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceProviderKeyLookupServicesStatus400
      | PermissionsGetResourceProviderKeyLookupServicesStatus401
      | PermissionsGetResourceProviderKeyLookupServicesStatus403
      | PermissionsGetResourceProviderKeyLookupServicesStatus404
      | PermissionsGetResourceProviderKeyLookupServicesStatus500
      | PermissionsGetResourceProviderKeyLookupServicesStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
