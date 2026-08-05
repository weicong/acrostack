/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  PageAdminGetPathId,
  PageAdminGetStatus200,
  PageAdminGetStatus400,
  PageAdminGetStatus401,
  PageAdminGetStatus403,
  PageAdminGetStatus404,
  PageAdminGetStatus500,
  PageAdminGetStatus501,
} from "../../models/pageAdmin/PageAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { pageAdminGet } from "../../clients/pageAdmin/pageAdminGet.ts";

export const pageAdminGetQueryKey = (id?: PageAdminGetPathId) =>
  [{ url: "/api/cms-kit-admin/pages/:id", params: { id: id } }] as const;

type PageAdminGetQueryKey = ReturnType<typeof pageAdminGetQueryKey>;

export function pageAdminGetQueryOptions(
  id?: PageAdminGetPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = pageAdminGetQueryKey(id);
  return queryOptions<
    PageAdminGetStatus200,
    ResponseErrorConfig<
      | PageAdminGetStatus400
      | PageAdminGetStatus401
      | PageAdminGetStatus403
      | PageAdminGetStatus404
      | PageAdminGetStatus500
      | PageAdminGetStatus501
    >,
    PageAdminGetStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return pageAdminGet(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/pages/:id}
 */
export function usePageAdminGet<
  TData = PageAdminGetStatus200,
  TQueryData = PageAdminGetStatus200,
  TQueryKey extends QueryKey = PageAdminGetQueryKey,
>(
  id?: PageAdminGetPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        PageAdminGetStatus200,
        ResponseErrorConfig<
          | PageAdminGetStatus400
          | PageAdminGetStatus401
          | PageAdminGetStatus403
          | PageAdminGetStatus404
          | PageAdminGetStatus500
          | PageAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? pageAdminGetQueryKey(id);

  const query = useQuery(
    {
      ...pageAdminGetQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | PageAdminGetStatus400
      | PageAdminGetStatus401
      | PageAdminGetStatus403
      | PageAdminGetStatus404
      | PageAdminGetStatus500
      | PageAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
