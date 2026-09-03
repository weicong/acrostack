/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictAuthorizationGetListOptions,
  OpenIddictAuthorizationGetListStatus200,
  OpenIddictAuthorizationGetListStatus400,
  OpenIddictAuthorizationGetListStatus401,
  OpenIddictAuthorizationGetListStatus403,
  OpenIddictAuthorizationGetListStatus404,
  OpenIddictAuthorizationGetListStatus500,
  OpenIddictAuthorizationGetListStatus501,
} from "../../models/openIddictAuthorization/OpenIddictAuthorizationGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictAuthorizationGetList } from "../../clients/openIddictAuthorization/openIddictAuthorizationGetList";

export const openIddictAuthorizationGetListQueryKey = ({
  query,
}: Omit<OpenIddictAuthorizationGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/open-iddict-authorization" }, ...(query ? [query] : [])] as const;

type OpenIddictAuthorizationGetListQueryKey = ReturnType<
  typeof openIddictAuthorizationGetListQueryKey
>;

export function openIddictAuthorizationGetListQueryOptions(
  { query }: OpenIddictAuthorizationGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = openIddictAuthorizationGetListQueryKey({ query });
  return queryOptions<
    OpenIddictAuthorizationGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictAuthorizationGetListStatus400
      | OpenIddictAuthorizationGetListStatus401
      | OpenIddictAuthorizationGetListStatus403
      | OpenIddictAuthorizationGetListStatus404
      | OpenIddictAuthorizationGetListStatus500
      | OpenIddictAuthorizationGetListStatus501
    >,
    OpenIddictAuthorizationGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await openIddictAuthorizationGetList({
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
 * {@link /api/app/open-iddict-authorization}
 */
export function useOpenIddictAuthorizationGetList<
  TData = OpenIddictAuthorizationGetListStatus200,
  TQueryData = OpenIddictAuthorizationGetListStatus200,
  TQueryKey extends QueryKey = OpenIddictAuthorizationGetListQueryKey,
>(
  {
    query,
  }: {
    query?:
      | OpenIddictAuthorizationGetListOptions["query"]
      | (() => OpenIddictAuthorizationGetListOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictAuthorizationGetListStatus200,
        ResponseErrorConfig<
          | OpenIddictAuthorizationGetListStatus400
          | OpenIddictAuthorizationGetListStatus401
          | OpenIddictAuthorizationGetListStatus403
          | OpenIddictAuthorizationGetListStatus404
          | OpenIddictAuthorizationGetListStatus500
          | OpenIddictAuthorizationGetListStatus501
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
    resolvedOptions?.queryKey ?? openIddictAuthorizationGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...openIddictAuthorizationGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictAuthorizationGetListStatus400
      | OpenIddictAuthorizationGetListStatus401
      | OpenIddictAuthorizationGetListStatus403
      | OpenIddictAuthorizationGetListStatus404
      | OpenIddictAuthorizationGetListStatus500
      | OpenIddictAuthorizationGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
