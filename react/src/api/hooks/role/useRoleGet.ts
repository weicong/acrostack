/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  RoleGetOptions,
  RoleGetStatus200,
  RoleGetStatus400,
  RoleGetStatus401,
  RoleGetStatus403,
  RoleGetStatus404,
  RoleGetStatus500,
  RoleGetStatus501,
} from "../../models/role/RoleGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { roleGet } from "../../clients/role/roleGet";

export const roleGetQueryKey = ({ path }: Omit<RoleGetOptions, "headers">) =>
  [{ url: "/api/identity/roles/:id", params: path }] as const;

type RoleGetQueryKey = ReturnType<typeof roleGetQueryKey>;

export function roleGetQueryOptions(
  { path }: RoleGetOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = roleGetQueryKey({ path });
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
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await roleGet({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  { path }: { path: RoleGetOptions["path"] | (() => RoleGetOptions["path"]) },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? roleGetQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...roleGetQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
