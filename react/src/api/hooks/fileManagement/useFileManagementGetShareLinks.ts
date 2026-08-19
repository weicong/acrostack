/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementGetShareLinksOptions, FileManagementGetShareLinksStatus200 } from '../../models/fileManagement/FileManagementGetShareLinks'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { fileManagementGetShareLinks } from '../../clients/fileManagement/fileManagementGetShareLinks'

export const fileManagementGetShareLinksQueryKey = ({ path }: Omit<FileManagementGetShareLinksOptions, 'headers'>) => [{ url: '/api/app/file-management/files/:id/share-links', params: path }] as const

type FileManagementGetShareLinksQueryKey = ReturnType<typeof fileManagementGetShareLinksQueryKey>

export function fileManagementGetShareLinksQueryOptions({ path }: FileManagementGetShareLinksOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = fileManagementGetShareLinksQueryKey({ path })
  return queryOptions<FileManagementGetShareLinksStatus200, ResponseErrorConfig<Error>, FileManagementGetShareLinksStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await fileManagementGetShareLinks({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/file-management/files/:id/share-links}
 */
export function useFileManagementGetShareLinks<TData = FileManagementGetShareLinksStatus200, TQueryData = FileManagementGetShareLinksStatus200, TQueryKey extends QueryKey = FileManagementGetShareLinksQueryKey>({ path }: { path: FileManagementGetShareLinksOptions['path'] | (() => FileManagementGetShareLinksOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<FileManagementGetShareLinksStatus200, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetShareLinksQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...fileManagementGetShareLinksQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
