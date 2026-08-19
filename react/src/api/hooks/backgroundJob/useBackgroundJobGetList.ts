/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { BackgroundJobGetListOptions, BackgroundJobGetListStatus200, BackgroundJobGetListStatus400, BackgroundJobGetListStatus401, BackgroundJobGetListStatus403, BackgroundJobGetListStatus404, BackgroundJobGetListStatus500, BackgroundJobGetListStatus501 } from '../../models/backgroundJob/BackgroundJobGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { backgroundJobGetList } from '../../clients/backgroundJob/backgroundJobGetList'

export const backgroundJobGetListQueryKey = ({ query }: Omit<BackgroundJobGetListOptions, 'headers'> = {}) => [{ url: '/api/app/background-job' }, ...(query ? [query] : [])] as const

type BackgroundJobGetListQueryKey = ReturnType<typeof backgroundJobGetListQueryKey>

export function backgroundJobGetListQueryOptions({ query }: BackgroundJobGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = backgroundJobGetListQueryKey({ query })
  return queryOptions<BackgroundJobGetListStatus200, ResponseErrorConfig<BackgroundJobGetListStatus400 | BackgroundJobGetListStatus401 | BackgroundJobGetListStatus403 | BackgroundJobGetListStatus404 | BackgroundJobGetListStatus500 | BackgroundJobGetListStatus501>, BackgroundJobGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await backgroundJobGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/background-job}
 */
export function useBackgroundJobGetList<TData = BackgroundJobGetListStatus200, TQueryData = BackgroundJobGetListStatus200, TQueryKey extends QueryKey = BackgroundJobGetListQueryKey>({ query }: { query?: BackgroundJobGetListOptions['query'] | (() => BackgroundJobGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<BackgroundJobGetListStatus200, ResponseErrorConfig<BackgroundJobGetListStatus400 | BackgroundJobGetListStatus401 | BackgroundJobGetListStatus403 | BackgroundJobGetListStatus404 | BackgroundJobGetListStatus500 | BackgroundJobGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? backgroundJobGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...backgroundJobGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<BackgroundJobGetListStatus400 | BackgroundJobGetListStatus401 | BackgroundJobGetListStatus403 | BackgroundJobGetListStatus404 | BackgroundJobGetListStatus500 | BackgroundJobGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
