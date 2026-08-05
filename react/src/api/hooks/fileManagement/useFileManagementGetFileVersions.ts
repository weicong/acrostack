/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementGetFileVersionsPathId,
  FileManagementGetFileVersionsStatus200,
} from "../../models/fileManagement/FileManagementGetFileVersions.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetFileVersions } from "../../clients/fileManagement/fileManagementGetFileVersions.ts";

export const fileManagementGetFileVersionsQueryKey = (id?: FileManagementGetFileVersionsPathId) =>
  [{ url: "/api/app/file-management/files/:id/versions", params: { id: id } }] as const;

type FileManagementGetFileVersionsQueryKey = ReturnType<
  typeof fileManagementGetFileVersionsQueryKey
>;

export function fileManagementGetFileVersionsQueryOptions(
  id?: FileManagementGetFileVersionsPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetFileVersionsQueryKey(id);
  return queryOptions<
    FileManagementGetFileVersionsStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetFileVersionsStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetFileVersions(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/versions}
 */
export function useFileManagementGetFileVersions<
  TData = FileManagementGetFileVersionsStatus200,
  TQueryData = FileManagementGetFileVersionsStatus200,
  TQueryKey extends QueryKey = FileManagementGetFileVersionsQueryKey,
>(
  id?: FileManagementGetFileVersionsPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetFileVersionsStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetFileVersionsQueryKey(id);

  const query = useQuery(
    {
      ...fileManagementGetFileVersionsQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
