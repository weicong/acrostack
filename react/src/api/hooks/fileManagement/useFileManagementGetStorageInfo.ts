/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { FileManagementGetStorageInfoStatus200 } from "../../models/fileManagement/FileManagementGetStorageInfo.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetStorageInfo } from "../../clients/fileManagement/fileManagementGetStorageInfo.ts";

export const fileManagementGetStorageInfoQueryKey = () =>
  [{ url: "/api/app/file-management/storage-info" }] as const;

type FileManagementGetStorageInfoQueryKey = ReturnType<typeof fileManagementGetStorageInfoQueryKey>;

export function fileManagementGetStorageInfoQueryOptions(
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetStorageInfoQueryKey();
  return queryOptions<
    FileManagementGetStorageInfoStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetStorageInfoStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetStorageInfo({ ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/storage-info}
 */
export function useFileManagementGetStorageInfo<
  TData = FileManagementGetStorageInfoStatus200,
  TQueryData = FileManagementGetStorageInfoStatus200,
  TQueryKey extends QueryKey = FileManagementGetStorageInfoQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetStorageInfoStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetStorageInfoQueryKey();

  const query = useQuery(
    {
      ...fileManagementGetStorageInfoQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
