/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementGetThumbnailPathId,
  FileManagementGetThumbnailStatus200,
} from "../../models/fileManagement/FileManagementGetThumbnail.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetThumbnail } from "../../clients/fileManagement/fileManagementGetThumbnail.ts";

export const fileManagementGetThumbnailQueryKey = (id?: FileManagementGetThumbnailPathId) =>
  [{ url: "/api/app/file-management/files/:id/thumbnail", params: { id: id } }] as const;

type FileManagementGetThumbnailQueryKey = ReturnType<typeof fileManagementGetThumbnailQueryKey>;

export function fileManagementGetThumbnailQueryOptions(
  id?: FileManagementGetThumbnailPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetThumbnailQueryKey(id);
  return queryOptions<
    FileManagementGetThumbnailStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetThumbnailStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetThumbnail(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/thumbnail}
 */
export function useFileManagementGetThumbnail<
  TData = FileManagementGetThumbnailStatus200,
  TQueryData = FileManagementGetThumbnailStatus200,
  TQueryKey extends QueryKey = FileManagementGetThumbnailQueryKey,
>(
  id?: FileManagementGetThumbnailPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetThumbnailStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetThumbnailQueryKey(id);

  const query = useQuery(
    {
      ...fileManagementGetThumbnailQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
