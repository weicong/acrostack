/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementDownloadFilePathId,
  FileManagementDownloadFileStatus200,
} from "../../models/fileManagement/FileManagementDownloadFile.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementDownloadFile } from "../../clients/fileManagement/fileManagementDownloadFile.ts";

export const fileManagementDownloadFileQueryKey = (id?: FileManagementDownloadFilePathId) =>
  [{ url: "/api/app/file-management/files/:id/download", params: { id: id } }] as const;

type FileManagementDownloadFileQueryKey = ReturnType<typeof fileManagementDownloadFileQueryKey>;

export function fileManagementDownloadFileQueryOptions(
  id?: FileManagementDownloadFilePathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementDownloadFileQueryKey(id);
  return queryOptions<
    FileManagementDownloadFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDownloadFileStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementDownloadFile(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/download}
 */
export function useFileManagementDownloadFile<
  TData = FileManagementDownloadFileStatus200,
  TQueryData = FileManagementDownloadFileStatus200,
  TQueryKey extends QueryKey = FileManagementDownloadFileQueryKey,
>(
  id?: FileManagementDownloadFilePathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementDownloadFileStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementDownloadFileQueryKey(id);

  const query = useQuery(
    {
      ...fileManagementDownloadFileQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
