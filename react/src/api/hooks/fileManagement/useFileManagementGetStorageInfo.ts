/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type { FileManagementGetStorageInfoStatus200 } from "../../models/fileManagement/FileManagementGetStorageInfo";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetStorageInfo } from "../../clients/fileManagement/fileManagementGetStorageInfo";

export const fileManagementGetStorageInfoQueryKey = () =>
  [{ url: "/api/app/file-management/storage-info" }] as const;

type FileManagementGetStorageInfoQueryKey = ReturnType<typeof fileManagementGetStorageInfoQueryKey>;

export function fileManagementGetStorageInfoQueryOptions(
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
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
      const { data } = await fileManagementGetStorageInfo({
        ...config,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetStorageInfoQueryKey();

  const queryResult = useQuery(
    {
      ...fileManagementGetStorageInfoQueryOptions(config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
