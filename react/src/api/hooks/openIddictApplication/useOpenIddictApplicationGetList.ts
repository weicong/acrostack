/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictApplicationGetListOptions,
  OpenIddictApplicationGetListStatus200,
  OpenIddictApplicationGetListStatus400,
  OpenIddictApplicationGetListStatus401,
  OpenIddictApplicationGetListStatus403,
  OpenIddictApplicationGetListStatus404,
  OpenIddictApplicationGetListStatus500,
  OpenIddictApplicationGetListStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictApplicationGetList } from "../../clients/openIddictApplication/openIddictApplicationGetList";

export const openIddictApplicationGetListQueryKey = ({
  query,
}: Omit<OpenIddictApplicationGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/open-iddict-application" }, ...(query ? [query] : [])] as const;

type OpenIddictApplicationGetListQueryKey = ReturnType<typeof openIddictApplicationGetListQueryKey>;

export function openIddictApplicationGetListQueryOptions(
  { query }: OpenIddictApplicationGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = openIddictApplicationGetListQueryKey({ query });
  return queryOptions<
    OpenIddictApplicationGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictApplicationGetListStatus400
      | OpenIddictApplicationGetListStatus401
      | OpenIddictApplicationGetListStatus403
      | OpenIddictApplicationGetListStatus404
      | OpenIddictApplicationGetListStatus500
      | OpenIddictApplicationGetListStatus501
    >,
    OpenIddictApplicationGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await openIddictApplicationGetList({
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
 * {@link /api/app/open-iddict-application}
 */
export function useOpenIddictApplicationGetList<
  TData = OpenIddictApplicationGetListStatus200,
  TQueryData = OpenIddictApplicationGetListStatus200,
  TQueryKey extends QueryKey = OpenIddictApplicationGetListQueryKey,
>(
  {
    query,
  }: {
    query?:
      | OpenIddictApplicationGetListOptions["query"]
      | (() => OpenIddictApplicationGetListOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictApplicationGetListStatus200,
        ResponseErrorConfig<
          | OpenIddictApplicationGetListStatus400
          | OpenIddictApplicationGetListStatus401
          | OpenIddictApplicationGetListStatus403
          | OpenIddictApplicationGetListStatus404
          | OpenIddictApplicationGetListStatus500
          | OpenIddictApplicationGetListStatus501
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
    resolvedOptions?.queryKey ?? openIddictApplicationGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...openIddictApplicationGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictApplicationGetListStatus400
      | OpenIddictApplicationGetListStatus401
      | OpenIddictApplicationGetListStatus403
      | OpenIddictApplicationGetListStatus404
      | OpenIddictApplicationGetListStatus500
      | OpenIddictApplicationGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
