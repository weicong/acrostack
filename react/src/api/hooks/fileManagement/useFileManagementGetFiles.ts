/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementGetFilesQueryFolderId,
  FileManagementGetFilesStatus200,
} from "../../models/fileManagement/FileManagementGetFiles.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetFiles } from "../../clients/fileManagement/fileManagementGetFiles.ts";

export const fileManagementGetFilesQueryKey = (params?: {
  folderId?: FileManagementGetFilesQueryFolderId;
}) => [{ url: "/api/app/file-management/files" }, ...(params ? [params] : [])] as const;

type FileManagementGetFilesQueryKey = ReturnType<typeof fileManagementGetFilesQueryKey>;

export function fileManagementGetFilesQueryOptions(
  params?: { folderId?: FileManagementGetFilesQueryFolderId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetFilesQueryKey(params);
  return queryOptions<
    FileManagementGetFilesStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetFilesStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetFiles(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/files}
 */
export function useFileManagementGetFiles<
  TData = FileManagementGetFilesStatus200,
  TQueryData = FileManagementGetFilesStatus200,
  TQueryKey extends QueryKey = FileManagementGetFilesQueryKey,
>(
  params?: { folderId?: FileManagementGetFilesQueryFolderId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetFilesStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetFilesQueryKey(params);

  const query = useQuery(
    {
      ...fileManagementGetFilesQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
