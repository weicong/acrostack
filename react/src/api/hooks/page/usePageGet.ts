/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PageGetPathId,
  PageGetStatus200,
  PageGetStatus400,
  PageGetStatus401,
  PageGetStatus403,
  PageGetStatus404,
  PageGetStatus500,
  PageGetStatus501,
} from "../../models/page/PageGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageGet } from "../../clients/page/pageGet.ts";

export const pageGetQueryKey = (id?: PageGetPathId) =>
  [{ url: "/api/app/page/:id", params: { id: id } }] as const;

type PageGetQueryKey = ReturnType<typeof pageGetQueryKey>;

export function pageGetQueryOptions(
  id?: PageGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pageGetQueryKey(id);
  return queryOptions<
    PageGetStatus200,
    ResponseErrorConfig<
      | PageGetStatus400
      | PageGetStatus401
      | PageGetStatus403
      | PageGetStatus404
      | PageGetStatus500
      | PageGetStatus501
    >,
    PageGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return pageGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/page/:id}
 */
export function usePageGet<
  TData = PageGetStatus200,
  TQueryData = PageGetStatus200,
  TQueryKey extends QueryKey = PageGetQueryKey,
>(
  id?: PageGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageGetStatus200,
        ResponseErrorConfig<
          | PageGetStatus400
          | PageGetStatus401
          | PageGetStatus403
          | PageGetStatus404
          | PageGetStatus500
          | PageGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pageGetQueryKey(id);

  const query = useQuery(
    {
      ...pageGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageGetStatus400
      | PageGetStatus401
      | PageGetStatus403
      | PageGetStatus404
      | PageGetStatus500
      | PageGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
