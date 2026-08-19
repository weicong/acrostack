/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsGetResourceDefinitionsOptions,
  PermissionsGetResourceDefinitionsStatus200,
  PermissionsGetResourceDefinitionsStatus400,
  PermissionsGetResourceDefinitionsStatus401,
  PermissionsGetResourceDefinitionsStatus403,
  PermissionsGetResourceDefinitionsStatus404,
  PermissionsGetResourceDefinitionsStatus500,
  PermissionsGetResourceDefinitionsStatus501,
} from "../../models/permissions/PermissionsGetResourceDefinitions";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceDefinitions } from "../../clients/permissions/permissionsGetResourceDefinitions";

export const permissionsGetResourceDefinitionsQueryKey = ({
  query,
}: Omit<PermissionsGetResourceDefinitionsOptions, "headers"> = {}) =>
  [
    { url: "/api/permission-management/permissions/resource-definitions" },
    ...(query ? [query] : []),
  ] as const;

type PermissionsGetResourceDefinitionsQueryKey = ReturnType<
  typeof permissionsGetResourceDefinitionsQueryKey
>;

export function permissionsGetResourceDefinitionsQueryOptions(
  { query }: PermissionsGetResourceDefinitionsOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = permissionsGetResourceDefinitionsQueryKey({ query });
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
      const { data } = await permissionsGetResourceDefinitions({
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
 * {@link /api/permission-management/permissions/resource-definitions}
 */
export function usePermissionsGetResourceDefinitions<
  TData = PermissionsGetResourceDefinitionsStatus200,
  TQueryData = PermissionsGetResourceDefinitionsStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceDefinitionsQueryKey,
>(
  {
    query,
  }: {
    query?:
      | PermissionsGetResourceDefinitionsOptions["query"]
      | (() => PermissionsGetResourceDefinitionsOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey =
    resolvedOptions?.queryKey ?? permissionsGetResourceDefinitionsQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...permissionsGetResourceDefinitionsQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
