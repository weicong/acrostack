/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsGetByGroupOptions,
  PermissionsGetByGroupStatus200,
  PermissionsGetByGroupStatus400,
  PermissionsGetByGroupStatus401,
  PermissionsGetByGroupStatus403,
  PermissionsGetByGroupStatus404,
  PermissionsGetByGroupStatus500,
  PermissionsGetByGroupStatus501,
} from "../../models/permissions/PermissionsGetByGroup";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetByGroup } from "../../clients/permissions/permissionsGetByGroup";

export const permissionsGetByGroupQueryKey = ({
  query,
}: Omit<PermissionsGetByGroupOptions, "headers"> = {}) =>
  [{ url: "/api/permission-management/permissions/by-group" }, ...(query ? [query] : [])] as const;

type PermissionsGetByGroupQueryKey = ReturnType<typeof permissionsGetByGroupQueryKey>;

export function permissionsGetByGroupQueryOptions(
  { query }: PermissionsGetByGroupOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = permissionsGetByGroupQueryKey({ query });
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
      const { data } = await permissionsGetByGroup({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    query,
  }: {
    query?: PermissionsGetByGroupOptions["query"] | (() => PermissionsGetByGroupOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetByGroupQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...permissionsGetByGroupQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
