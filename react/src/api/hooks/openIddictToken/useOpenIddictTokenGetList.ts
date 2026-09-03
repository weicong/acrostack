/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  OpenIddictTokenGetListOptions,
  OpenIddictTokenGetListStatus200,
  OpenIddictTokenGetListStatus400,
  OpenIddictTokenGetListStatus401,
  OpenIddictTokenGetListStatus403,
  OpenIddictTokenGetListStatus404,
  OpenIddictTokenGetListStatus500,
  OpenIddictTokenGetListStatus501,
} from "../../models/openIddictToken/OpenIddictTokenGetList";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictTokenGetList } from "../../clients/openIddictToken/openIddictTokenGetList";

export const openIddictTokenGetListQueryKey = ({
  query,
}: Omit<OpenIddictTokenGetListOptions, "headers"> = {}) =>
  [{ url: "/api/app/open-iddict-token" }, ...(query ? [query] : [])] as const;

type OpenIddictTokenGetListQueryKey = ReturnType<typeof openIddictTokenGetListQueryKey>;

export function openIddictTokenGetListQueryOptions(
  { query }: OpenIddictTokenGetListOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = openIddictTokenGetListQueryKey({ query });
  return queryOptions<
    OpenIddictTokenGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictTokenGetListStatus400
      | OpenIddictTokenGetListStatus401
      | OpenIddictTokenGetListStatus403
      | OpenIddictTokenGetListStatus404
      | OpenIddictTokenGetListStatus500
      | OpenIddictTokenGetListStatus501
    >,
    OpenIddictTokenGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await openIddictTokenGetList({
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
 * {@link /api/app/open-iddict-token}
 */
export function useOpenIddictTokenGetList<
  TData = OpenIddictTokenGetListStatus200,
  TQueryData = OpenIddictTokenGetListStatus200,
  TQueryKey extends QueryKey = OpenIddictTokenGetListQueryKey,
>(
  {
    query,
  }: {
    query?: OpenIddictTokenGetListOptions["query"] | (() => OpenIddictTokenGetListOptions["query"]);
  } = {},
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictTokenGetListStatus200,
        ResponseErrorConfig<
          | OpenIddictTokenGetListStatus400
          | OpenIddictTokenGetListStatus401
          | OpenIddictTokenGetListStatus403
          | OpenIddictTokenGetListStatus404
          | OpenIddictTokenGetListStatus500
          | OpenIddictTokenGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? openIddictTokenGetListQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...openIddictTokenGetListQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictTokenGetListStatus400
      | OpenIddictTokenGetListStatus401
      | OpenIddictTokenGetListStatus403
      | OpenIddictTokenGetListStatus404
      | OpenIddictTokenGetListStatus500
      | OpenIddictTokenGetListStatus501
    >
  > & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
