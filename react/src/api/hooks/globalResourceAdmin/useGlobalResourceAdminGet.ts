/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  GlobalResourceAdminGetStatus200,
  GlobalResourceAdminGetStatus400,
  GlobalResourceAdminGetStatus401,
  GlobalResourceAdminGetStatus403,
  GlobalResourceAdminGetStatus404,
  GlobalResourceAdminGetStatus500,
  GlobalResourceAdminGetStatus501,
} from "../../models/globalResourceAdmin/GlobalResourceAdminGet.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { globalResourceAdminGet } from "../../clients/globalResourceAdmin/globalResourceAdminGet.ts";

export const globalResourceAdminGetQueryKey = () =>
  [{ url: "/api/cms-kit-admin/global-resources" }] as const;

type GlobalResourceAdminGetQueryKey = ReturnType<typeof globalResourceAdminGetQueryKey>;

export function globalResourceAdminGetQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = globalResourceAdminGetQueryKey();
  return queryOptions<
    GlobalResourceAdminGetStatus200,
    ResponseErrorConfig<
      | GlobalResourceAdminGetStatus400
      | GlobalResourceAdminGetStatus401
      | GlobalResourceAdminGetStatus403
      | GlobalResourceAdminGetStatus404
      | GlobalResourceAdminGetStatus500
      | GlobalResourceAdminGetStatus501
    >,
    GlobalResourceAdminGetStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return globalResourceAdminGet({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-admin/global-resources}
 */
export function useGlobalResourceAdminGet<
  TData = GlobalResourceAdminGetStatus200,
  TQueryData = GlobalResourceAdminGetStatus200,
  TQueryKey extends QueryKey = GlobalResourceAdminGetQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GlobalResourceAdminGetStatus200,
        ResponseErrorConfig<
          | GlobalResourceAdminGetStatus400
          | GlobalResourceAdminGetStatus401
          | GlobalResourceAdminGetStatus403
          | GlobalResourceAdminGetStatus404
          | GlobalResourceAdminGetStatus500
          | GlobalResourceAdminGetStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? globalResourceAdminGetQueryKey();

  const query = useQuery(
    {
      ...globalResourceAdminGetQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | GlobalResourceAdminGetStatus400
      | GlobalResourceAdminGetStatus401
      | GlobalResourceAdminGetStatus403
      | GlobalResourceAdminGetStatus404
      | GlobalResourceAdminGetStatus500
      | GlobalResourceAdminGetStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
