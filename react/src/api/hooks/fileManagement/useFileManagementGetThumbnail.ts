/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementGetThumbnailOptions, FileManagementGetThumbnailStatus200 } from '../../models/fileManagement/FileManagementGetThumbnail'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { fileManagementGetThumbnail } from '../../clients/fileManagement/fileManagementGetThumbnail'

export const fileManagementGetThumbnailQueryKey = ({ path }: Omit<FileManagementGetThumbnailOptions, 'headers'>) => [{ url: '/api/app/file-management/files/:id/thumbnail', params: path }] as const

type FileManagementGetThumbnailQueryKey = ReturnType<typeof fileManagementGetThumbnailQueryKey>

export function fileManagementGetThumbnailQueryOptions({ path }: FileManagementGetThumbnailOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = fileManagementGetThumbnailQueryKey({ path })
  return queryOptions<FileManagementGetThumbnailStatus200, ResponseErrorConfig<Error>, FileManagementGetThumbnailStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await fileManagementGetThumbnail({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/file-management/files/:id/thumbnail}
 */
export function useFileManagementGetThumbnail<TData = FileManagementGetThumbnailStatus200, TQueryData = FileManagementGetThumbnailStatus200, TQueryKey extends QueryKey = FileManagementGetThumbnailQueryKey>({ path }: { path: FileManagementGetThumbnailOptions['path'] | (() => FileManagementGetThumbnailOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<FileManagementGetThumbnailStatus200, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetThumbnailQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...fileManagementGetThumbnailQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
