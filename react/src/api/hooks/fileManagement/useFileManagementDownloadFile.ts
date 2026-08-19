/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementDownloadFileOptions,
  FileManagementDownloadFileStatus200,
} from "../../models/fileManagement/FileManagementDownloadFile";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementDownloadFile } from "../../clients/fileManagement/fileManagementDownloadFile";

export const fileManagementDownloadFileQueryKey = ({
  path,
}: Omit<FileManagementDownloadFileOptions, "headers">) =>
  [{ url: "/api/app/file-management/files/:id/download", params: path }] as const;

type FileManagementDownloadFileQueryKey = ReturnType<typeof fileManagementDownloadFileQueryKey>;

export function fileManagementDownloadFileQueryOptions(
  { path }: FileManagementDownloadFileOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = fileManagementDownloadFileQueryKey({ path });
  return queryOptions<
    FileManagementDownloadFileStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDownloadFileStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await fileManagementDownloadFile({
        ...config,
        path,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    path,
  }: {
    path:
      | FileManagementDownloadFileOptions["path"]
      | (() => FileManagementDownloadFileOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey = resolvedOptions?.queryKey ?? fileManagementDownloadFileQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...fileManagementDownloadFileQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
