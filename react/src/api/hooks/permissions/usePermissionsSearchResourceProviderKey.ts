/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsSearchResourceProviderKeyQueryResourceName,
  PermissionsSearchResourceProviderKeyQueryServiceName,
  PermissionsSearchResourceProviderKeyQueryFilter,
  PermissionsSearchResourceProviderKeyQueryPage,
  PermissionsSearchResourceProviderKeyStatus200,
  PermissionsSearchResourceProviderKeyStatus400,
  PermissionsSearchResourceProviderKeyStatus401,
  PermissionsSearchResourceProviderKeyStatus403,
  PermissionsSearchResourceProviderKeyStatus404,
  PermissionsSearchResourceProviderKeyStatus500,
  PermissionsSearchResourceProviderKeyStatus501,
} from "../../models/permissions/PermissionsSearchResourceProviderKey.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsSearchResourceProviderKey } from "../../clients/permissions/permissionsSearchResourceProviderKey.ts";

export const permissionsSearchResourceProviderKeyQueryKey = (params?: {
  resourceName?: PermissionsSearchResourceProviderKeyQueryResourceName;
  serviceName?: PermissionsSearchResourceProviderKeyQueryServiceName;
  filter?: PermissionsSearchResourceProviderKeyQueryFilter;
  page?: PermissionsSearchResourceProviderKeyQueryPage;
}) =>
  [
    { url: "/api/permission-management/permissions/search-resource-provider-keys" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsSearchResourceProviderKeyQueryKey = ReturnType<
  typeof permissionsSearchResourceProviderKeyQueryKey
>;

export function permissionsSearchResourceProviderKeyQueryOptions(
  params?: {
    resourceName?: PermissionsSearchResourceProviderKeyQueryResourceName;
    serviceName?: PermissionsSearchResourceProviderKeyQueryServiceName;
    filter?: PermissionsSearchResourceProviderKeyQueryFilter;
    page?: PermissionsSearchResourceProviderKeyQueryPage;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsSearchResourceProviderKeyQueryKey(params);
  return queryOptions<
    PermissionsSearchResourceProviderKeyStatus200,
    ResponseErrorConfig<
      | PermissionsSearchResourceProviderKeyStatus400
      | PermissionsSearchResourceProviderKeyStatus401
      | PermissionsSearchResourceProviderKeyStatus403
      | PermissionsSearchResourceProviderKeyStatus404
      | PermissionsSearchResourceProviderKeyStatus500
      | PermissionsSearchResourceProviderKeyStatus501
    >,
    PermissionsSearchResourceProviderKeyStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsSearchResourceProviderKey(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/search-resource-provider-keys}
 */
export function usePermissionsSearchResourceProviderKey<
  TData = PermissionsSearchResourceProviderKeyStatus200,
  TQueryData = PermissionsSearchResourceProviderKeyStatus200,
  TQueryKey extends QueryKey = PermissionsSearchResourceProviderKeyQueryKey,
>(
  params?: {
    resourceName?: PermissionsSearchResourceProviderKeyQueryResourceName;
    serviceName?: PermissionsSearchResourceProviderKeyQueryServiceName;
    filter?: PermissionsSearchResourceProviderKeyQueryFilter;
    page?: PermissionsSearchResourceProviderKeyQueryPage;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsSearchResourceProviderKeyStatus200,
        ResponseErrorConfig<
          | PermissionsSearchResourceProviderKeyStatus400
          | PermissionsSearchResourceProviderKeyStatus401
          | PermissionsSearchResourceProviderKeyStatus403
          | PermissionsSearchResourceProviderKeyStatus404
          | PermissionsSearchResourceProviderKeyStatus500
          | PermissionsSearchResourceProviderKeyStatus501
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
    resolvedOptions?.queryKey ?? permissionsSearchResourceProviderKeyQueryKey(params);

  const query = useQuery(
    {
      ...permissionsSearchResourceProviderKeyQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsSearchResourceProviderKeyStatus400
      | PermissionsSearchResourceProviderKeyStatus401
      | PermissionsSearchResourceProviderKeyStatus403
      | PermissionsSearchResourceProviderKeyStatus404
      | PermissionsSearchResourceProviderKeyStatus500
      | PermissionsSearchResourceProviderKeyStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
