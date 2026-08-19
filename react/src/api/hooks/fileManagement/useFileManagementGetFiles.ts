/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FileManagementGetFilesOptions, FileManagementGetFilesStatus200 } from '../../models/fileManagement/FileManagementGetFiles'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { fileManagementGetFiles } from '../../clients/fileManagement/fileManagementGetFiles'

export const fileManagementGetFilesQueryKey = ({ query }: Omit<FileManagementGetFilesOptions, 'headers'> = {}) => [{ url: '/api/app/file-management/files' }, ...(query ? [query] : [])] as const

type FileManagementGetFilesQueryKey = ReturnType<typeof fileManagementGetFilesQueryKey>

export function fileManagementGetFilesQueryOptions({ query }: FileManagementGetFilesOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = fileManagementGetFilesQueryKey({ query })
  return queryOptions<FileManagementGetFilesStatus200, ResponseErrorConfig<Error>, FileManagementGetFilesStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await fileManagementGetFiles({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/file-management/files}
 */
export function useFileManagementGetFiles<TData = FileManagementGetFilesStatus200, TQueryData = FileManagementGetFilesStatus200, TQueryKey extends QueryKey = FileManagementGetFilesQueryKey>({ query }: { query?: FileManagementGetFilesOptions['query'] | (() => FileManagementGetFilesOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<FileManagementGetFilesStatus200, ResponseErrorConfig<Error>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? fileManagementGetFilesQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...fileManagementGetFilesQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
