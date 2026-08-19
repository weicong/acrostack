/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  GlobalResourceAdminGetStatus200,
  GlobalResourceAdminGetStatus400,
  GlobalResourceAdminGetStatus401,
  GlobalResourceAdminGetStatus403,
  GlobalResourceAdminGetStatus404,
  GlobalResourceAdminGetStatus500,
  GlobalResourceAdminGetStatus501,
} from "../../models/globalResourceAdmin/GlobalResourceAdminGet";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { globalResourceAdminGet } from "../../clients/globalResourceAdmin/globalResourceAdminGet";

export const globalResourceAdminGetQueryKey = () =>
  [{ url: "/api/cms-kit-admin/global-resources" }] as const;

type GlobalResourceAdminGetQueryKey = ReturnType<typeof globalResourceAdminGetQueryKey>;

export function globalResourceAdminGetQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await globalResourceAdminGet({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? globalResourceAdminGetQueryKey();

  const queryResult = useQuery(
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

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
