/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RoleGetAllListStatus200,
  RoleGetAllListStatus400,
  RoleGetAllListStatus401,
  RoleGetAllListStatus403,
  RoleGetAllListStatus404,
  RoleGetAllListStatus500,
  RoleGetAllListStatus501,
} from "../../models/role/RoleGetAllList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { roleGetAllList } from "../../clients/role/roleGetAllList";

export const roleGetAllListQueryKey = () => [{ url: "/api/identity/roles/all" }] as const;

type RoleGetAllListQueryKey = ReturnType<typeof roleGetAllListQueryKey>;

export function roleGetAllListQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await roleGetAllList({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? roleGetAllListQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
