/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetResourceQueryResourceName,
  PermissionsGetResourceQueryResourceKey,
  PermissionsGetResourceStatus200,
  PermissionsGetResourceStatus400,
  PermissionsGetResourceStatus401,
  PermissionsGetResourceStatus403,
  PermissionsGetResourceStatus404,
  PermissionsGetResourceStatus500,
  PermissionsGetResourceStatus501,
} from "../../models/permissions/PermissionsGetResource.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResource } from "../../clients/permissions/permissionsGetResource.ts";

export const permissionsGetResourceQueryKey = (params?: {
  resourceName?: PermissionsGetResourceQueryResourceName;
  resourceKey?: PermissionsGetResourceQueryResourceKey;
}) =>
  [
    { url: "/api/permission-management/permissions/resource" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsGetResourceQueryKey = ReturnType<typeof permissionsGetResourceQueryKey>;

export function permissionsGetResourceQueryOptions(
  params?: {
    resourceName?: PermissionsGetResourceQueryResourceName;
    resourceKey?: PermissionsGetResourceQueryResourceKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetResourceQueryKey(params);
  return queryOptions<
    PermissionsGetResourceStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceStatus400
      | PermissionsGetResourceStatus401
      | PermissionsGetResourceStatus403
      | PermissionsGetResourceStatus404
      | PermissionsGetResourceStatus500
      | PermissionsGetResourceStatus501
    >,
    PermissionsGetResourceStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGetResource(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource}
 */
export function usePermissionsGetResource<
  TData = PermissionsGetResourceStatus200,
  TQueryData = PermissionsGetResourceStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceQueryKey,
>(
  params?: {
    resourceName?: PermissionsGetResourceQueryResourceName;
    resourceKey?: PermissionsGetResourceQueryResourceKey;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceStatus400
          | PermissionsGetResourceStatus401
          | PermissionsGetResourceStatus403
          | PermissionsGetResourceStatus404
          | PermissionsGetResourceStatus500
          | PermissionsGetResourceStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetResourceQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetResourceQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceStatus400
      | PermissionsGetResourceStatus401
      | PermissionsGetResourceStatus403
      | PermissionsGetResourceStatus404
      | PermissionsGetResourceStatus500
      | PermissionsGetResourceStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
