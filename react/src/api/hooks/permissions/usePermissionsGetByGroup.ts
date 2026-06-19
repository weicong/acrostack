/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetByGroupQueryGroupName,
  PermissionsGetByGroupQueryProviderName,
  PermissionsGetByGroupQueryProviderKey,
  PermissionsGetByGroupStatus200,
  PermissionsGetByGroupStatus400,
  PermissionsGetByGroupStatus401,
  PermissionsGetByGroupStatus403,
  PermissionsGetByGroupStatus404,
  PermissionsGetByGroupStatus500,
  PermissionsGetByGroupStatus501,
} from "../../models/permissions/PermissionsGetByGroup.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetByGroup } from "../../clients/permissions/permissionsGetByGroup.ts";

export const permissionsGetByGroupQueryKey = (params?: {
  groupName?: PermissionsGetByGroupQueryGroupName;
  providerName?: PermissionsGetByGroupQueryProviderName;
  providerKey?: PermissionsGetByGroupQueryProviderKey;
}) =>
  [
    { url: "/api/permission-management/permissions/by-group" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsGetByGroupQueryKey = ReturnType<typeof permissionsGetByGroupQueryKey>;

export function permissionsGetByGroupQueryOptions(
  params?: {
    groupName?: PermissionsGetByGroupQueryGroupName;
    providerName?: PermissionsGetByGroupQueryProviderName;
    providerKey?: PermissionsGetByGroupQueryProviderKey;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetByGroupQueryKey(params);
  return queryOptions<
    PermissionsGetByGroupStatus200,
    ResponseErrorConfig<
      | PermissionsGetByGroupStatus400
      | PermissionsGetByGroupStatus401
      | PermissionsGetByGroupStatus403
      | PermissionsGetByGroupStatus404
      | PermissionsGetByGroupStatus500
      | PermissionsGetByGroupStatus501
    >,
    PermissionsGetByGroupStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGetByGroup(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/by-group}
 */
export function usePermissionsGetByGroup<
  TData = PermissionsGetByGroupStatus200,
  TQueryData = PermissionsGetByGroupStatus200,
  TQueryKey extends QueryKey = PermissionsGetByGroupQueryKey,
>(
  params?: {
    groupName?: PermissionsGetByGroupQueryGroupName;
    providerName?: PermissionsGetByGroupQueryProviderName;
    providerKey?: PermissionsGetByGroupQueryProviderKey;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetByGroupStatus200,
        ResponseErrorConfig<
          | PermissionsGetByGroupStatus400
          | PermissionsGetByGroupStatus401
          | PermissionsGetByGroupStatus403
          | PermissionsGetByGroupStatus404
          | PermissionsGetByGroupStatus500
          | PermissionsGetByGroupStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetByGroupQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetByGroupQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetByGroupStatus400
      | PermissionsGetByGroupStatus401
      | PermissionsGetByGroupStatus403
      | PermissionsGetByGroupStatus404
      | PermissionsGetByGroupStatus500
      | PermissionsGetByGroupStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
