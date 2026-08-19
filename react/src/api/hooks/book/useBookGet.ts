/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BookGetOptions, BookGetStatus200, BookGetStatus400, BookGetStatus401, BookGetStatus403, BookGetStatus404, BookGetStatus500, BookGetStatus501 } from '../../models/book/BookGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { bookGet } from '../../clients/book/bookGet'

export const bookGetQueryKey = ({ path }: Omit<BookGetOptions, 'headers'>) => [{ url: '/api/app/book/:id', params: path }] as const

type BookGetQueryKey = ReturnType<typeof bookGetQueryKey>

export function bookGetQueryOptions({ path }: BookGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = bookGetQueryKey({ path })
  return queryOptions<BookGetStatus200, ResponseErrorConfig<BookGetStatus400 | BookGetStatus401 | BookGetStatus403 | BookGetStatus404 | BookGetStatus500 | BookGetStatus501>, BookGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await bookGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/book/:id}
 */
export function useBookGet<TData = BookGetStatus200, TQueryData = BookGetStatus200, TQueryKey extends QueryKey = BookGetQueryKey>({ path }: { path: BookGetOptions['path'] | (() => BookGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<BookGetStatus200, ResponseErrorConfig<BookGetStatus400 | BookGetStatus401 | BookGetStatus403 | BookGetStatus404 | BookGetStatus500 | BookGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? bookGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...bookGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BookGetStatus400 | BookGetStatus401 | BookGetStatus403 | BookGetStatus404 | BookGetStatus500 | BookGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
