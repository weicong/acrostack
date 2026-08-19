/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  GlobalResourcePublicGetGlobalScriptStatus200,
  GlobalResourcePublicGetGlobalScriptStatus400,
  GlobalResourcePublicGetGlobalScriptStatus401,
  GlobalResourcePublicGetGlobalScriptStatus403,
  GlobalResourcePublicGetGlobalScriptStatus404,
  GlobalResourcePublicGetGlobalScriptStatus500,
  GlobalResourcePublicGetGlobalScriptStatus501,
} from "../../models/globalResourcePublic/GlobalResourcePublicGetGlobalScript";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { globalResourcePublicGetGlobalScript } from "../../clients/globalResourcePublic/globalResourcePublicGetGlobalScript";

export const globalResourcePublicGetGlobalScriptQueryKey = () =>
  [{ url: "/api/cms-kit-public/global-resources/script" }] as const;

type GlobalResourcePublicGetGlobalScriptQueryKey = ReturnType<
  typeof globalResourcePublicGetGlobalScriptQueryKey
>;

export function globalResourcePublicGetGlobalScriptQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await globalResourcePublicGetGlobalScript({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? globalResourcePublicGetGlobalScriptQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
