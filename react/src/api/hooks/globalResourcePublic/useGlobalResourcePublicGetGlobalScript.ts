/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  GlobalResourcePublicGetGlobalScriptStatus200,
  GlobalResourcePublicGetGlobalScriptStatus400,
  GlobalResourcePublicGetGlobalScriptStatus401,
  GlobalResourcePublicGetGlobalScriptStatus403,
  GlobalResourcePublicGetGlobalScriptStatus404,
  GlobalResourcePublicGetGlobalScriptStatus500,
  GlobalResourcePublicGetGlobalScriptStatus501,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalScript.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { globalResourcePublicGetGlobalScript } from "../../clients/globalResourcePublic/globalResourcePublicGetGlobalScript.ts";

export const globalResourcePublicGetGlobalScriptQueryKey = () =>
  [{ url: "/api/cms-kit-public/global-resources/script" }] as const;

type GlobalResourcePublicGetGlobalScriptQueryKey = ReturnType<
  typeof globalResourcePublicGetGlobalScriptQueryKey
>;

export function globalResourcePublicGetGlobalScriptQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = globalResourcePublicGetGlobalScriptQueryKey();
  return queryOptions<
    GlobalResourcePublicGetGlobalScriptStatus200,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalScriptStatus400
      | GlobalResourcePublicGetGlobalScriptStatus401
      | GlobalResourcePublicGetGlobalScriptStatus403
      | GlobalResourcePublicGetGlobalScriptStatus404
      | GlobalResourcePublicGetGlobalScriptStatus500
      | GlobalResourcePublicGetGlobalScriptStatus501
    >,
    GlobalResourcePublicGetGlobalScriptStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return globalResourcePublicGetGlobalScript({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/cms-kit-public/global-resources/script}
 */
export function useGlobalResourcePublicGetGlobalScript<
  TData = GlobalResourcePublicGetGlobalScriptStatus200,
  TQueryData = GlobalResourcePublicGetGlobalScriptStatus200,
  TQueryKey extends QueryKey = GlobalResourcePublicGetGlobalScriptQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GlobalResourcePublicGetGlobalScriptStatus200,
        ResponseErrorConfig<
          | GlobalResourcePublicGetGlobalScriptStatus400
          | GlobalResourcePublicGetGlobalScriptStatus401
          | GlobalResourcePublicGetGlobalScriptStatus403
          | GlobalResourcePublicGetGlobalScriptStatus404
          | GlobalResourcePublicGetGlobalScriptStatus500
          | GlobalResourcePublicGetGlobalScriptStatus501
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
  const queryKey = resolvedOptions?.queryKey ?? globalResourcePublicGetGlobalScriptQueryKey();

  const query = useQuery(
    {
      ...globalResourcePublicGetGlobalScriptQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<
    TData,
    ResponseErrorConfig<
      | GlobalResourcePublicGetGlobalScriptStatus400
      | GlobalResourcePublicGetGlobalScriptStatus401
      | GlobalResourcePublicGetGlobalScriptStatus403
      | GlobalResourcePublicGetGlobalScriptStatus404
      | GlobalResourcePublicGetGlobalScriptStatus500
      | GlobalResourcePublicGetGlobalScriptStatus501
    >
  > & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
