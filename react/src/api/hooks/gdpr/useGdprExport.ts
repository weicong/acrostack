/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { GdprExportStatus200 } from "../../models/gdpr/GdprExport.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { gdprExport } from "../../clients/gdpr/gdprExport.ts";

export const gdprExportQueryKey = () => [{ url: "/api/app/gdpr/export" }] as const;

type GdprExportQueryKey = ReturnType<typeof gdprExportQueryKey>;

export function gdprExportQueryOptions(config: Partial<RequestConfig> & { client?: Client } = {}) {
  const queryKey = gdprExportQueryKey();
  return queryOptions<
    GdprExportStatus200,
    ResponseErrorConfig<Error>,
    GdprExportStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return gdprExport({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/gdpr/export}
 */
export function useGdprExport<
  TData = GdprExportStatus200,
  TQueryData = GdprExportStatus200,
  TQueryKey extends QueryKey = GdprExportQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GdprExportStatus200,
        ResponseErrorConfig<Error>,
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
  const queryKey = resolvedOptions?.queryKey ?? gdprExportQueryKey();

  const query = useQuery(
    {
      ...gdprExportQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
