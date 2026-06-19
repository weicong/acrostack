/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  RoleGetPathId,
  RoleGetStatus200,
  RoleGetStatus400,
  RoleGetStatus401,
  RoleGetStatus403,
  RoleGetStatus404,
  RoleGetStatus500,
  RoleGetStatus501,
} from "../../models/role/RoleGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { roleGet } from "../../clients/role/roleGet.ts";

export const roleGetQueryKey = (id?: RoleGetPathId) =>
  [{ url: "/api/identity/roles/:id", params: { id: id } }] as const;

type RoleGetQueryKey = ReturnType<typeof roleGetQueryKey>;

export function roleGetQueryOptions(
  id?: RoleGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = roleGetQueryKey(id);
  return queryOptions<
    RoleGetStatus200,
    ResponseErrorConfig<
      | RoleGetStatus400
      | RoleGetStatus401
      | RoleGetStatus403
      | RoleGetStatus404
      | RoleGetStatus500
      | RoleGetStatus501
    >,
    RoleGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return roleGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/roles/:id}
 */
export function useRoleGet<
  TData = RoleGetStatus200,
  TQueryData = RoleGetStatus200,
  TQueryKey extends QueryKey = RoleGetQueryKey,
>(
  id?: RoleGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        RoleGetStatus200,
        ResponseErrorConfig<
          | RoleGetStatus400
          | RoleGetStatus401
          | RoleGetStatus403
          | RoleGetStatus404
          | RoleGetStatus500
          | RoleGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? roleGetQueryKey(id);

  const query = useQuery(
    {
      ...roleGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | RoleGetStatus400
      | RoleGetStatus401
      | RoleGetStatus403
      | RoleGetStatus404
      | RoleGetStatus500
      | RoleGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
