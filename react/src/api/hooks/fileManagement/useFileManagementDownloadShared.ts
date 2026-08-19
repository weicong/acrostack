/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementDownloadSharedOptions, FileManagementDownloadSharedStatus200 } from '../../models/fileManagement/FileManagementDownloadShared'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { fileManagementDownloadShared } from '../../clients/fileManagement/fileManagementDownloadShared'

export const fileManagementDownloadSharedQueryKey = ({ path }: Omit<FileManagementDownloadSharedOptions, 'headers'>) => [{ url: '/api/app/file-management/shared/:token', params: path }] as const

type FileManagementDownloadSharedQueryKey = ReturnType<typeof fileManagementDownloadSharedQueryKey>

export function fileManagementDownloadSharedQueryOptions({ path }: FileManagementDownloadSharedOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = fileManagementDownloadSharedQueryKey({ path })
  return queryOptions<FileManagementDownloadSharedStatus200, ResponseErrorConfig<Error>, FileManagementDownloadSharedStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await fileManagementDownloadShared({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/file-management/shared/:token}
 */
export function useFileManagementDownloadShared<TData = FileManagementDownloadSharedStatus200, TQueryData = FileManagementDownloadSharedStatus200, TQueryKey extends QueryKey = FileManagementDownloadSharedQueryKey>({ path }: { path: FileManagementDownloadSharedOptions['path'] | (() => FileManagementDownloadSharedOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<FileManagementDownloadSharedStatus200, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? fileManagementDownloadSharedQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...fileManagementDownloadSharedQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
