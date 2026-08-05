/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  GlobalResourcePublicGetGlobalStyleStatus200,
  GlobalResourcePublicGetGlobalStyleStatus400,
  GlobalResourcePublicGetGlobalStyleStatus401,
  GlobalResourcePublicGetGlobalStyleStatus403,
  GlobalResourcePublicGetGlobalStyleStatus404,
  GlobalResourcePublicGetGlobalStyleStatus500,
  GlobalResourcePublicGetGlobalStyleStatus501,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalStyle.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { globalResourcePublicGetGlobalStyle } from "../../clients/globalResourcePublic/globalResourcePublicGetGlobalStyle.ts";

export const globalResourcePublicGetGlobalStyleQueryKey = () =>
  [{ url: "/api/cms-kit-public/global-resources/style" }] as const;

type GlobalResourcePublicGetGlobalStyleQueryKey = ReturnType<
  typeof globalResourcePublicGetGlobalStyleQueryKey
>;

export function globalResourcePublicGetGlobalStyleQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = globalResourcePublicGetGlobalStyleQueryKey();
  return queryOptions<
    GlobalResourcePublicGetGlobalStyleStatus200,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalStyleStatus400
      | GlobalResourcePublicGetGlobalStyleStatus401
      | GlobalResourcePublicGetGlobalStyleStatus403
      | GlobalResourcePublicGetGlobalStyleStatus404
      | GlobalResourcePublicGetGlobalStyleStatus500
      | GlobalResourcePublicGetGlobalStyleStatus501
    >,
    GlobalResourcePublicGetGlobalStyleStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return globalResourcePublicGetGlobalStyle({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/global-resources/style}
 */
export function useGlobalResourcePublicGetGlobalStyle<
  TData = GlobalResourcePublicGetGlobalStyleStatus200,
  TQueryData = GlobalResourcePublicGetGlobalStyleStatus200,
  TQueryKey extends QueryKey = GlobalResourcePublicGetGlobalStyleQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GlobalResourcePublicGetGlobalStyleStatus200,
        ResponseErrorConfig<
          | GlobalResourcePublicGetGlobalStyleStatus400
          | GlobalResourcePublicGetGlobalStyleStatus401
          | GlobalResourcePublicGetGlobalStyleStatus403
          | GlobalResourcePublicGetGlobalStyleStatus404
          | GlobalResourcePublicGetGlobalStyleStatus500
          | GlobalResourcePublicGetGlobalStyleStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? globalResourcePublicGetGlobalStyleQueryKey();

  const query = useQuery(
    {
      ...globalResourcePublicGetGlobalStyleQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalStyleStatus400
      | GlobalResourcePublicGetGlobalStyleStatus401
      | GlobalResourcePublicGetGlobalStyleStatus403
      | GlobalResourcePublicGetGlobalStyleStatus404
      | GlobalResourcePublicGetGlobalStyleStatus500
      | GlobalResourcePublicGetGlobalStyleStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
