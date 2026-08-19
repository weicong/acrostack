/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  PermissionsGetResourceByProviderOptions,
  PermissionsGetResourceByProviderStatus200,
  PermissionsGetResourceByProviderStatus400,
  PermissionsGetResourceByProviderStatus401,
  PermissionsGetResourceByProviderStatus403,
  PermissionsGetResourceByProviderStatus404,
  PermissionsGetResourceByProviderStatus500,
  PermissionsGetResourceByProviderStatus501,
} from "../../models/permissions/PermissionsGetResourceByProvider";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { permissionsGetResourceByProvider } from "../../clients/permissions/permissionsGetResourceByProvider";

export const permissionsGetResourceByProviderQueryKey = ({
  query,
}: Omit<PermissionsGetResourceByProviderOptions, "headers"> = {}) =>
  [
    { url: "/api/permission-management/permissions/resource/by-provider" },
    ...(query ? [query] : []),
  ] as const;

type PermissionsGetResourceByProviderQueryKey = ReturnType<
  typeof permissionsGetResourceByProviderQueryKey
>;

export function permissionsGetResourceByProviderQueryOptions(
  { query }: PermissionsGetResourceByProviderOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = permissionsGetResourceByProviderQueryKey({ query });
  return queryOptions<
    PermissionsGetResourceByProviderStatus200,
    ResponseErrorConfig<
      | PermissionsGetResourceByProviderStatus400
      | PermissionsGetResourceByProviderStatus401
      | PermissionsGetResourceByProviderStatus403
      | PermissionsGetResourceByProviderStatus404
      | PermissionsGetResourceByProviderStatus500
      | PermissionsGetResourceByProviderStatus501
    >,
    PermissionsGetResourceByProviderStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await permissionsGetResourceByProvider({
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
 * {@link /api/permission-management/permissions/resource/by-provider}
 */
export function usePermissionsGetResourceByProvider<
  TData = PermissionsGetResourceByProviderStatus200,
  TQueryData = PermissionsGetResourceByProviderStatus200,
  TQueryKey extends QueryKey = PermissionsGetResourceByProviderQueryKey,
>(
  {
    query,
  }: {
    query?:
      | PermissionsGetResourceByProviderOptions["query"]
      | (() => PermissionsGetResourceByProviderOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        PermissionsGetResourceByProviderStatus200,
        ResponseErrorConfig<
          | PermissionsGetResourceByProviderStatus400
          | PermissionsGetResourceByProviderStatus401
          | PermissionsGetResourceByProviderStatus403
          | PermissionsGetResourceByProviderStatus404
          | PermissionsGetResourceByProviderStatus500
          | PermissionsGetResourceByProviderStatus501
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
    resolvedOptions?.queryKey ?? permissionsGetResourceByProviderQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...permissionsGetResourceByProviderQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PermissionsGetResourceByProviderStatus400
      | PermissionsGetResourceByProviderStatus401
      | PermissionsGetResourceByProviderStatus403
      | PermissionsGetResourceByProviderStatus404
      | PermissionsGetResourceByProviderStatus500
      | PermissionsGetResourceByProviderStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
