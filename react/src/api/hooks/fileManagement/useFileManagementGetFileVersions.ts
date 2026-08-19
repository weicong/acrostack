/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementGetFileVersionsOptions,
  FileManagementGetFileVersionsStatus200,
} from "../../models/fileManagement/FileManagementGetFileVersions";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetFileVersions } from "../../clients/fileManagement/fileManagementGetFileVersions";

export const fileManagementGetFileVersionsQueryKey = ({
  path,
}: Omit<FileManagementGetFileVersionsOptions, "headers">) =>
  [{ url: "/api/app/file-management/files/:id/versions", params: path }] as const;

type FileManagementGetFileVersionsQueryKey = ReturnType<
  typeof fileManagementGetFileVersionsQueryKey
>;

export function fileManagementGetFileVersionsQueryOptions(
  { path }: FileManagementGetFileVersionsOptions,
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = fileManagementGetFileVersionsQueryKey({ path });
  return queryOptions<
    FileManagementGetFileVersionsStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetFileVersionsStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await fileManagementGetFileVersions({
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
 * {@link /api/app/file-management/files/:id/versions}
 */
export function useFileManagementGetFileVersions<
  TData = FileManagementGetFileVersionsStatus200,
  TQueryData = FileManagementGetFileVersionsStatus200,
  TQueryKey extends QueryKey = FileManagementGetFileVersionsQueryKey,
>(
  {
    path,
  }: {
    path:
      | FileManagementGetFileVersionsOptions["path"]
      | (() => FileManagementGetFileVersionsOptions["path"]);
  },
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { path: typeof path === "function" ? path() : path };
  const queryKey =
    resolvedOptions?.queryKey ?? fileManagementGetFileVersionsQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...fileManagementGetFileVersionsQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
