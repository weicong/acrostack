/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsGetResourceOptions,
  PermissionsGetResourceStatus200,
  PermissionsGetResourceStatus400,
  PermissionsGetResourceStatus401,
  PermissionsGetResourceStatus403,
  PermissionsGetResourceStatus404,
  PermissionsGetResourceStatus500,
  PermissionsGetResourceStatus501,
} from "../../models/permissions/PermissionsGetResource";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResource } from "../../clients/permissions/permissionsGetResource";

export const permissionsGetResourceQueryKey = ({
  query,
}: Omit<PermissionsGetResourceOptions, "headers"> = {}) =>
  [{ url: "/api/permission-management/permissions/resource" }, ...(query ? [query] : [])] as const;

type PermissionsGetResourceQueryKey = ReturnType<typeof permissionsGetResourceQueryKey>;

export function permissionsGetResourceQueryOptions(
  { query }: PermissionsGetResourceOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = permissionsGetResourceQueryKey({ query });
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
      const { data } = await permissionsGetResource({
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
 * {@link /api/permission-management/permissions/resource}
 */
export function usePermissionsGetResource<
  TData = PermissionsGetResourceStatus200,
  TQueryData = PermissionsGetResourceStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceQueryKey,
>(
  {
    query,
  }: {
    query?: PermissionsGetResourceOptions["query"] | (() => PermissionsGetResourceOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetResourceQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...permissionsGetResourceQueryOptions(resolvedParams, config),
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
