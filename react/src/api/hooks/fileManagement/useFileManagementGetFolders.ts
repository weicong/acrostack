/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementGetFoldersQueryParentId,
  FileManagementGetFoldersStatus200,
} from "../../models/fileManagement/FileManagementGetFolders.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetFolders } from "../../clients/fileManagement/fileManagementGetFolders.ts";

export const fileManagementGetFoldersQueryKey = (params?: {
  parentId?: FileManagementGetFoldersQueryParentId;
}) => [{ url: "/api/app/file-management/folders" }, ...(params ? [params] : [])] as const;

type FileManagementGetFoldersQueryKey = ReturnType<typeof fileManagementGetFoldersQueryKey>;

export function fileManagementGetFoldersQueryOptions(
  params?: { parentId?: FileManagementGetFoldersQueryParentId },
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetFoldersQueryKey(params);
  return queryOptions<
    FileManagementGetFoldersStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetFoldersStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetFolders(params, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/folders}
 */
export function useFileManagementGetFolders<
  TData = FileManagementGetFoldersStatus200,
  TQueryData = FileManagementGetFoldersStatus200,
  TQueryKey extends QueryKey = FileManagementGetFoldersQueryKey,
>(
  params?: { parentId?: FileManagementGetFoldersQueryParentId },
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetFoldersStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetFoldersQueryKey(params);

  const query = useQuery(
    {
      ...fileManagementGetFoldersQueryOptions(params, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
