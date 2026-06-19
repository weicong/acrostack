/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PermissionsGetResourceDefinitionsQueryResourceName,
  PermissionsGetResourceDefinitionsStatus200,
  PermissionsGetResourceDefinitionsStatus400,
  PermissionsGetResourceDefinitionsStatus401,
  PermissionsGetResourceDefinitionsStatus403,
  PermissionsGetResourceDefinitionsStatus404,
  PermissionsGetResourceDefinitionsStatus500,
  PermissionsGetResourceDefinitionsStatus501,
} from "../../models/permissions/PermissionsGetResourceDefinitions.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceDefinitions } from "../../clients/permissions/permissionsGetResourceDefinitions.ts";

export const permissionsGetResourceDefinitionsQueryKey = (params?: {
  resourceName?: PermissionsGetResourceDefinitionsQueryResourceName;
}) =>
  [
    { url: "/api/permission-management/permissions/resource-definitions" },
    ...(params ? [params] : []),
  ] as const;

type PermissionsGetResourceDefinitionsQueryKey = ReturnType<
  typeof permissionsGetResourceDefinitionsQueryKey
>;

export function permissionsGetResourceDefinitionsQueryOptions(
  params?: { resourceName?: PermissionsGetResourceDefinitionsQueryResourceName },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = permissionsGetResourceDefinitionsQueryKey(params);
  return queryOptions<
    PermissionsGetResourceDefinitionsStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceDefinitionsStatus400
      | PermissionsGetResourceDefinitionsStatus401
      | PermissionsGetResourceDefinitionsStatus403
      | PermissionsGetResourceDefinitionsStatus404
      | PermissionsGetResourceDefinitionsStatus500
      | PermissionsGetResourceDefinitionsStatus501
    >,
    PermissionsGetResourceDefinitionsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return permissionsGetResourceDefinitions(params, {
        ...config,
        signal: config.signal ?? signal,
      });
    },
  });
}

/**
 * {@link /api/permission-management/permissions/resource-definitions}
 */
export function usePermissionsGetResourceDefinitions<
  TData = PermissionsGetResourceDefinitionsStatus200,
  TQueryData = PermissionsGetResourceDefinitionsStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceDefinitionsQueryKey,
>(
  params?: { resourceName?: PermissionsGetResourceDefinitionsQueryResourceName },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceDefinitionsStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceDefinitionsStatus400
          | PermissionsGetResourceDefinitionsStatus401
          | PermissionsGetResourceDefinitionsStatus403
          | PermissionsGetResourceDefinitionsStatus404
          | PermissionsGetResourceDefinitionsStatus500
          | PermissionsGetResourceDefinitionsStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetResourceDefinitionsQueryKey(params);

  const query = useQuery(
    {
      ...permissionsGetResourceDefinitionsQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceDefinitionsStatus400
      | PermissionsGetResourceDefinitionsStatus401
      | PermissionsGetResourceDefinitionsStatus403
      | PermissionsGetResourceDefinitionsStatus404
      | PermissionsGetResourceDefinitionsStatus500
      | PermissionsGetResourceDefinitionsStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
