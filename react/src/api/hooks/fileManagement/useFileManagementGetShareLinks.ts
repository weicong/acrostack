/* oxlint-disable */

import type { Client, RequestConfig, ResponseErrorConfig } from "@kubb/plugin-client/clients/axios";
import type {
  QueryKey,
  QueryClient,
  QueryObserverOptions,
  UseQueryResult,
} from "@tanstack/react-query";
import type {
  FileManagementGetShareLinksPathId,
  FileManagementGetShareLinksStatus200,
} from "../../models/fileManagement/FileManagementGetShareLinks.ts";
import { queryOptions, useQuery } from "@tanstack/react-query";
import { fileManagementGetShareLinks } from "../../clients/fileManagement/fileManagementGetShareLinks.ts";

export const fileManagementGetShareLinksQueryKey = (id?: FileManagementGetShareLinksPathId) =>
  [{ url: "/api/app/file-management/files/:id/share-links", params: { id: id } }] as const;

type FileManagementGetShareLinksQueryKey = ReturnType<typeof fileManagementGetShareLinksQueryKey>;

export function fileManagementGetShareLinksQueryOptions(
  id?: FileManagementGetShareLinksPathId,
  config: Partial<RequestConfig> & { client?: Client } = {},
) {
  const queryKey = fileManagementGetShareLinksQueryKey(id);
  return queryOptions<
    FileManagementGetShareLinksStatus200,
    ResponseErrorConfig<Error>,
    FileManagementGetShareLinksStatus200,
    typeof queryKey
  >({
    enabled: !!id,
    queryKey,
    queryFn: async ({ signal }) => {
      return fileManagementGetShareLinks(id!, { ...config, signal: config.signal ?? signal });
    },
  });
}

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function useFileManagementGetShareLinks<
  TData = FileManagementGetShareLinksStatus200,
  TQueryData = FileManagementGetShareLinksStatus200,
  TQueryKey extends QueryKey = FileManagementGetShareLinksQueryKey,
>(
  id?: FileManagementGetShareLinksPathId,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FileManagementGetShareLinksStatus200,
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
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetShareLinksQueryKey(id);

  const query = useQuery(
    {
      ...fileManagementGetShareLinksQueryOptions(id, config),
      ...resolvedOptions,
      queryKey,
    } as unknown as QueryObserverOptions,
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
