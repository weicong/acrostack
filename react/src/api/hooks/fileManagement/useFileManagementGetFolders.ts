/* oxlint-disable */

import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type { RequestConfig, ResponseErrorConfig } from "../../.kubb/client";
import type {
  FileManagementGetFoldersOptions,
  FileManagementGetFoldersStatus200,
} from "../../models/fileManagement/FileManagementGetFolders";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetFolders } from "../../clients/fileManagement/fileManagementGetFolders";

export const fileManagementGetFoldersQueryKey = ({
  query,
}: Omit<FileManagementGetFoldersOptions, "headers"> = {}) =>
  [{ url: "/api/app/file-management/folders" }, ...(query ? [query] : [])] as const;

type FileManagementGetFoldersQueryKey = ReturnType<typeof fileManagementGetFoldersQueryKey>;

export function fileManagementGetFoldersQueryOptions(
  { query }: FileManagementGetFoldersOptions = {},
  config: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">> = {},
) {
  const queryKey = fileManagementGetFoldersQueryKey({ query });
  return queryOptions<
    FileManagementGetFoldersStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetFoldersStatus200,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      const { data } = await fileManagementGetFolders({
        ...config,
        query,
        signal: config.signal ?? signal,
        throwOnError: true,
      });
      return data;
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
  {
    query,
  }: {
    query?:
      | FileManagementGetFoldersOptions["query"]
      | (() => FileManagementGetFoldersOptions["query"]);
  } = {},
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
    client?: Partial<Omit<RequestConfig, "path" | "query" | "body" | "headers" | "url">>;
  } = {},
) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {};
  const { client: queryClient, ...resolvedOptions } = queryConfig;
  const resolvedParams = { query: typeof query === "function" ? query() : query };
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetFoldersQueryKey(resolvedParams);

  const queryResult = useQuery(
    {
      ...fileManagementGetFoldersQueryOptions(resolvedParams, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  queryResult.queryKey = queryKey as TQueryKey;

  return queryResult;
}
