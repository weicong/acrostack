/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PageAdminGetListQueryFilter,
  PageAdminGetListQueryStatus,
  PageAdminGetListQuerySorting,
  PageAdminGetListQuerySkipCount,
  PageAdminGetListQueryMaxResultCount,
  PageAdminGetListStatus200,
  PageAdminGetListStatus400,
  PageAdminGetListStatus401,
  PageAdminGetListStatus403,
  PageAdminGetListStatus404,
  PageAdminGetListStatus500,
  PageAdminGetListStatus501,
} from "../../models/pageAdmin/PageAdminGetList.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageAdminGetList } from "../../clients/pageAdmin/pageAdminGetList.ts";

export const pageAdminGetListQueryKey = (params?: {
  Filter?: PageAdminGetListQueryFilter;
  Status?: PageAdminGetListQueryStatus;
  Sorting?: PageAdminGetListQuerySorting;
  SkipCount?: PageAdminGetListQuerySkipCount;
  MaxResultCount?: PageAdminGetListQueryMaxResultCount;
}) => [{ url: "/api/cms-kit-admin/pages" }, ...(params ? [params] : [])] as const;

type PageAdminGetListQueryKey = ReturnType<typeof pageAdminGetListQueryKey>;

export function pageAdminGetListQueryOptions(
  params?: {
    Filter?: PageAdminGetListQueryFilter;
    Status?: PageAdminGetListQueryStatus;
    Sorting?: PageAdminGetListQuerySorting;
    SkipCount?: PageAdminGetListQuerySkipCount;
    MaxResultCount?: PageAdminGetListQueryMaxResultCount;
  },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pageAdminGetListQueryKey(params);
  return queryOptions<
    PageAdminGetListStatus200,
    ResponseErrorConfig<
      | PageAdminGetListStatus400
      | PageAdminGetListStatus401
      | PageAdminGetListStatus403
      | PageAdminGetListStatus404
      | PageAdminGetListStatus500
      | PageAdminGetListStatus501
    >,
    PageAdminGetListStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return pageAdminGetList(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages}
 */
export function usePageAdminGetList<
  TData = PageAdminGetListStatus200,
  TQueryData = PageAdminGetListStatus200,
  TQueryKey extends QueryKey = PageAdminGetListQueryKey,
>(
  params?: {
    Filter?: PageAdminGetListQueryFilter;
    Status?: PageAdminGetListQueryStatus;
    Sorting?: PageAdminGetListQuerySorting;
    SkipCount?: PageAdminGetListQuerySkipCount;
    MaxResultCount?: PageAdminGetListQueryMaxResultCount;
  },
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageAdminGetListStatus200,
        ResponseErrorConfig<
          | PageAdminGetListStatus400
          | PageAdminGetListStatus401
          | PageAdminGetListStatus403
          | PageAdminGetListStatus404
          | PageAdminGetListStatus500
          | PageAdminGetListStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pageAdminGetListQueryKey(params);

  const query = useQuery(
    {
      ...pageAdminGetListQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageAdminGetListStatus400
      | PageAdminGetListStatus401
      | PageAdminGetListStatus403
      | PageAdminGetListStatus404
      | PageAdminGetListStatus500
      | PageAdminGetListStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
