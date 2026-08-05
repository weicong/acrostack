/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementDownloadSharedPathToken,
  FileManagementDownloadSharedStatus200,
} from "../../models/fileManagement/FileManagementDownloadShared.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementDownloadShared } from "../../clients/fileManagement/fileManagementDownloadShared.ts";

export const fileManagementDownloadSharedQueryKey = (
  token?: FileManagementDownloadSharedPathToken,
) => [{ url: "/api/app/file-management/shared/:token", params: { token: token } }] as const;

type FileManagementDownloadSharedQueryKey = ReturnType<typeof fileManagementDownloadSharedQueryKey>;

export function fileManagementDownloadSharedQueryOptions(
  token?: FileManagementDownloadSharedPathToken,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementDownloadSharedQueryKey(token);
  return queryOptions<
    FileManagementDownloadSharedStatus200,
    ResponseErrorConfig<Error>,
    FileManagementDownloadSharedStatus200,
    typeof queryKey
  >({
    enabled: !!token,
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementDownloadShared(token!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/shared/:token}
 */
export function useFileManagementDownloadShared<
  TData = FileManagementDownloadSharedStatus200,
  TQueryData = FileManagementDownloadSharedStatus200,
  TQueryKey extends QueryKey = FileManagementDownloadSharedQueryKey,
>(
  token?: FileManagementDownloadSharedPathToken,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementDownloadSharedStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementDownloadSharedQueryKey(token);

  const query = useQuery(
    {
      ...fileManagementDownloadSharedQueryOptions(token, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
