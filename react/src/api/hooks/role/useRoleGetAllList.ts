/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  RoleGetAllListStatus200,
  RoleGetAllListStatus400,
  RoleGetAllListStatus401,
  RoleGetAllListStatus403,
  RoleGetAllListStatus404,
  RoleGetAllListStatus500,
  RoleGetAllListStatus501,
} from "../../models/role/RoleGetAllList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { roleGetAllList } from "../../clients/role/roleGetAllList.ts";

export const roleGetAllListQueryKey = () => [{ url: "/api/identity/roles/all" }] as const;

type RoleGetAllListQueryKey = ReturnType<typeof roleGetAllListQueryKey>;

export function roleGetAllListQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = roleGetAllListQueryKey();
  return queryOptions<
    RoleGetAllListStatus200,
    ResponseErrorConfig<
      | RoleGetAllListStatus400
      | RoleGetAllListStatus401
      | RoleGetAllListStatus403
      | RoleGetAllListStatus404
      | RoleGetAllListStatus500
      | RoleGetAllListStatus501
    >,
    RoleGetAllListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return roleGetAllList({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/identity/roles/all}
 */
export function useRoleGetAllList<
  TData = RoleGetAllListStatus200,
  TQueryData = RoleGetAllListStatus200,
  TQueryKey extends QueryKey = RoleGetAllListQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        RoleGetAllListStatus200,
        ResponseErrorConfig<
          | RoleGetAllListStatus400
          | RoleGetAllListStatus401
          | RoleGetAllListStatus403
          | RoleGetAllListStatus404
          | RoleGetAllListStatus500
          | RoleGetAllListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? roleGetAllListQueryKey();

  const query = useQuery(
    {
      ...roleGetAllListQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | RoleGetAllListStatus400
      | RoleGetAllListStatus401
      | RoleGetAllListStatus403
      | RoleGetAllListStatus404
      | RoleGetAllListStatus500
      | RoleGetAllListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
