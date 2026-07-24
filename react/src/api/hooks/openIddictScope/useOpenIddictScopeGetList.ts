/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  OpenIddictScopeGetListQueryFilter,
  OpenIddictScopeGetListQuerySorting,
  OpenIddictScopeGetListQuerySkipCount,
  OpenIddictScopeGetListQueryMaxResultCount,
  OpenIddictScopeGetListStatus200,
  OpenIddictScopeGetListStatus400,
  OpenIddictScopeGetListStatus401,
  OpenIddictScopeGetListStatus403,
  OpenIddictScopeGetListStatus404,
  OpenIddictScopeGetListStatus500,
  OpenIddictScopeGetListStatus501,
} from "../../models/openIddictScope/OpenIddictScopeGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { openIddictScopeGetList } from "../../clients/openIddictScope/openIddictScopeGetList.ts";

export const openIddictScopeGetListQueryKey = (params?: {
  Filter?: OpenIddictScopeGetListQueryFilter;
  Sorting?: OpenIddictScopeGetListQuerySorting;
  SkipCount?: OpenIddictScopeGetListQuerySkipCount;
  MaxResultCount?: OpenIddictScopeGetListQueryMaxResultCount;
}) => [{ url: "/api/app/open-iddict-scope" }, ...(params ? [params] : [])] as const;

type OpenIddictScopeGetListQueryKey = ReturnType<typeof openIddictScopeGetListQueryKey>;

export function openIddictScopeGetListQueryOptions(
  params?: {
    Filter?: OpenIddictScopeGetListQueryFilter;
    Sorting?: OpenIddictScopeGetListQuerySorting;
    SkipCount?: OpenIddictScopeGetListQuerySkipCount;
    MaxResultCount?: OpenIddictScopeGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = openIddictScopeGetListQueryKey(params);
  return queryOptions<
    OpenIddictScopeGetListStatus200,
    ResponseErrorConfig<
      | OpenIddictScopeGetListStatus400
      | OpenIddictScopeGetListStatus401
      | OpenIddictScopeGetListStatus403
      | OpenIddictScopeGetListStatus404
      | OpenIddictScopeGetListStatus500
      | OpenIddictScopeGetListStatus501
    >,
    OpenIddictScopeGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return openIddictScopeGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export function useOpenIddictScopeGetList<
  TData = OpenIddictScopeGetListStatus200,
  TQueryData = OpenIddictScopeGetListStatus200,
  TQueryKey extends QueryKey = OpenIddictScopeGetListQueryKey,
>(
  params?: {
    Filter?: OpenIddictScopeGetListQueryFilter;
    Sorting?: OpenIddictScopeGetListQuerySorting;
    SkipCount?: OpenIddictScopeGetListQuerySkipCount;
    MaxResultCount?: OpenIddictScopeGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        OpenIddictScopeGetListStatus200,
        ResponseErrorConfig<
          | OpenIddictScopeGetListStatus400
          | OpenIddictScopeGetListStatus401
          | OpenIddictScopeGetListStatus403
          | OpenIddictScopeGetListStatus404
          | OpenIddictScopeGetListStatus500
          | OpenIddictScopeGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? openIddictScopeGetListQueryKey(params);

  const query = useQuery(
    {
      ...openIddictScopeGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | OpenIddictScopeGetListStatus400
      | OpenIddictScopeGetListStatus401
      | OpenIddictScopeGetListStatus403
      | OpenIddictScopeGetListStatus404
      | OpenIddictScopeGetListStatus500
      | OpenIddictScopeGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
