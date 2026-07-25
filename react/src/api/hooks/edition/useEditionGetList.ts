/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  EditionGetListQueryFilter,
  EditionGetListQuerySorting,
  EditionGetListQuerySkipCount,
  EditionGetListQueryMaxResultCount,
  EditionGetListStatus200,
  EditionGetListStatus400,
  EditionGetListStatus401,
  EditionGetListStatus403,
  EditionGetListStatus404,
  EditionGetListStatus500,
  EditionGetListStatus501,
} from "../../models/edition/EditionGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { editionGetList } from "../../clients/edition/editionGetList.ts";

export const editionGetListQueryKey = (params?: {
  Filter?: EditionGetListQueryFilter;
  Sorting?: EditionGetListQuerySorting;
  SkipCount?: EditionGetListQuerySkipCount;
  MaxResultCount?: EditionGetListQueryMaxResultCount;
}) => [{ url: "/api/app/edition" }, ...(params ? [params] : [])] as const;

type EditionGetListQueryKey = ReturnType<typeof editionGetListQueryKey>;

export function editionGetListQueryOptions(
  params?: {
    Filter?: EditionGetListQueryFilter;
    Sorting?: EditionGetListQuerySorting;
    SkipCount?: EditionGetListQuerySkipCount;
    MaxResultCount?: EditionGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = editionGetListQueryKey(params);
  return queryOptions<
    EditionGetListStatus200,
    ResponseErrorConfig<
      | EditionGetListStatus400
      | EditionGetListStatus401
      | EditionGetListStatus403
      | EditionGetListStatus404
      | EditionGetListStatus500
      | EditionGetListStatus501
    >,
    EditionGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return editionGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/edition}
 */
export function useEditionGetList<
  TData = EditionGetListStatus200,
  TQueryData = EditionGetListStatus200,
  TQueryKey extends QueryKey = EditionGetListQueryKey,
>(
  params?: {
    Filter?: EditionGetListQueryFilter;
    Sorting?: EditionGetListQuerySorting;
    SkipCount?: EditionGetListQuerySkipCount;
    MaxResultCount?: EditionGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        EditionGetListStatus200,
        ResponseErrorConfig<
          | EditionGetListStatus400
          | EditionGetListStatus401
          | EditionGetListStatus403
          | EditionGetListStatus404
          | EditionGetListStatus500
          | EditionGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? editionGetListQueryKey(params);

  const query = useQuery(
    {
      ...editionGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | EditionGetListStatus400
      | EditionGetListStatus401
      | EditionGetListStatus403
      | EditionGetListStatus404
      | EditionGetListStatus500
      | EditionGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
