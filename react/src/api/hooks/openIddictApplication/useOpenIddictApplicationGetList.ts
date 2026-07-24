/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  OpenIddictApplicationGetListQueryFilter,
  OpenIddictApplicationGetListQuerySorting,
  OpenIddictApplicationGetListQuerySkipCount,
  OpenIddictApplicationGetListQueryMaxResultCount,
  OpenIddictApplicationGetListStatus200,
  OpenIddictApplicationGetListStatus400,
  OpenIddictApplicationGetListStatus401,
  OpenIddictApplicationGetListStatus403,
  OpenIddictApplicationGetListStatus404,
  OpenIddictApplicationGetListStatus500,
  OpenIddictApplicationGetListStatus501,
} from "../../models/openIddictApplication/OpenIddictApplicationGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictApplicationGetList } from "../../clients/openIddictApplication/openIddictApplicationGetList.ts";

export const openIddictApplicationGetListQueryKey = (params?: {
  Filter?: OpenIddictApplicationGetListQueryFilter;
  Sorting?: OpenIddictApplicationGetListQuerySorting;
  SkipCount?: OpenIddictApplicationGetListQuerySkipCount;
  MaxResultCount?: OpenIddictApplicationGetListQueryMaxResultCount;
}) => [{ url: "/api/app/open-iddict-application" }, ...(params ? [params] : [])] as const;

type OpenIddictApplicationGetListQueryKey = ReturnType<typeof openIddictApplicationGetListQueryKey>;

export function openIddictApplicationGetListQueryOptions(
  params?: {
    Filter?: OpenIddictApplicationGetListQueryFilter;
    Sorting?: OpenIddictApplicationGetListQuerySorting;
    SkipCount?: OpenIddictApplicationGetListQuerySkipCount;
    MaxResultCount?: OpenIddictApplicationGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = openIddictApplicationGetListQueryKey(params);
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
      return openIddictApplicationGetList(params, { ...config, signal: config.signal ?? signal });
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
  params?: {
    Filter?: OpenIddictApplicationGetListQueryFilter;
    Sorting?: OpenIddictApplicationGetListQuerySorting;
    SkipCount?: OpenIddictApplicationGetListQuerySkipCount;
    MaxResultCount?: OpenIddictApplicationGetListQueryMaxResultCount;
  },
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
    client?: Partial<RequestConfig> & { client?: Client };
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? openIddictApplicationGetListQueryKey(params);

  const query = useQuery(
    {
      ...openIddictApplicationGetListQueryOptions(params, config),
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

  query.queryKey = queryKey as TQueryKey;

  return query;
}
