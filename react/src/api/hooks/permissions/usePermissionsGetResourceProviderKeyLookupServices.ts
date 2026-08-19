/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsGetResourceProviderKeyLookupServicesOptions,
  PermissionsGetResourceProviderKeyLookupServicesStatus200,
  PermissionsGetResourceProviderKeyLookupServicesStatus400,
  PermissionsGetResourceProviderKeyLookupServicesStatus401,
  PermissionsGetResourceProviderKeyLookupServicesStatus403,
  PermissionsGetResourceProviderKeyLookupServicesStatus404,
  PermissionsGetResourceProviderKeyLookupServicesStatus500,
  PermissionsGetResourceProviderKeyLookupServicesStatus501,
} from "../../models/permissions/PermissionsGetResourceProviderKeyLookupServices";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceProviderKeyLookupServices } from "../../clients/permissions/permissionsGetResourceProviderKeyLookupServices";

export const permissionsGetResourceProviderKeyLookupServicesQueryKey = ({
  query,
}: Omit<PermissionsGetResourceProviderKeyLookupServicesOptions, "headers"> = {}) =>
  [
    { url: "/api/permission-management/permissions/resource-provider-key-lookup-services" },
    ...(query ? [query] : []),
  ] as const;

type PermissionsGetResourceProviderKeyLookupServicesQueryKey = ReturnType<
  typeof permissionsGetResourceProviderKeyLookupServicesQueryKey
>;

export function permissionsGetResourceProviderKeyLookupServicesQueryOptions(
  { query }: PermissionsGetResourceProviderKeyLookupServicesOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = permissionsGetResourceProviderKeyLookupServicesQueryKey({ query });
  return queryOptions<
    PermissionsGetResourceProviderKeyLookupServicesStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceProviderKeyLookupServicesStatus400
      | PermissionsGetResourceProviderKeyLookupServicesStatus401
      | PermissionsGetResourceProviderKeyLookupServicesStatus403
      | PermissionsGetResourceProviderKeyLookupServicesStatus404
      | PermissionsGetResourceProviderKeyLookupServicesStatus500
      | PermissionsGetResourceProviderKeyLookupServicesStatus501
    >,
    PermissionsGetResourceProviderKeyLookupServicesStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await permissionsGetResourceProviderKeyLookupServices({
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
 * {@link /api/permission-management/permissions/resource-provider-key-lookup-services}
 */
export function usePermissionsGetResourceProviderKeyLookupServices<
  TData = PermissionsGetResourceProviderKeyLookupServicesStatus200,
  TQueryData = PermissionsGetResourceProviderKeyLookupServicesStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceProviderKeyLookupServicesQueryKey,
>(
  {
    query,
  }: {
    query?:
      | PermissionsGetResourceProviderKeyLookupServicesOptions["query"]
      | (() => PermissionsGetResourceProviderKeyLookupServicesOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceProviderKeyLookupServicesStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceProviderKeyLookupServicesStatus400
          | PermissionsGetResourceProviderKeyLookupServicesStatus401
          | PermissionsGetResourceProviderKeyLookupServicesStatus403
          | PermissionsGetResourceProviderKeyLookupServicesStatus404
          | PermissionsGetResourceProviderKeyLookupServicesStatus500
          | PermissionsGetResourceProviderKeyLookupServicesStatus501
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
    resolvedOptions?.queryKey ??
    permissionsGetResourceProviderKeyLookupServicesQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...permissionsGetResourceProviderKeyLookupServicesQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceProviderKeyLookupServicesStatus400
      | PermissionsGetResourceProviderKeyLookupServicesStatus401
      | PermissionsGetResourceProviderKeyLookupServicesStatus403
      | PermissionsGetResourceProviderKeyLookupServicesStatus404
      | PermissionsGetResourceProviderKeyLookupServicesStatus500
      | PermissionsGetResourceProviderKeyLookupServicesStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
