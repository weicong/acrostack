/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PagesPublicFindDefaultHomePageStatus200, PagesPublicFindDefaultHomePageStatus400, PagesPublicFindDefaultHomePageStatus401, PagesPublicFindDefaultHomePageStatus403, PagesPublicFindDefaultHomePageStatus404, PagesPublicFindDefaultHomePageStatus500, PagesPublicFindDefaultHomePageStatus501 } from '../../models/pagesPublic/PagesPublicFindDefaultHomePage'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { pagesPublicFindDefaultHomePage } from '../../clients/pagesPublic/pagesPublicFindDefaultHomePage'

export const pagesPublicFindDefaultHomePageQueryKey = () => [{ url: '/api/cms-kit-public/pages/home' }] as const

type PagesPublicFindDefaultHomePageQueryKey = ReturnType<typeof pagesPublicFindDefaultHomePageQueryKey>

export function pagesPublicFindDefaultHomePageQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = pagesPublicFindDefaultHomePageQueryKey()
  return queryOptions<PagesPublicFindDefaultHomePageStatus200, ResponseErrorConfig<PagesPublicFindDefaultHomePageStatus400 | PagesPublicFindDefaultHomePageStatus401 | PagesPublicFindDefaultHomePageStatus403 | PagesPublicFindDefaultHomePageStatus404 | PagesPublicFindDefaultHomePageStatus500 | PagesPublicFindDefaultHomePageStatus501>, PagesPublicFindDefaultHomePageStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await pagesPublicFindDefaultHomePage({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/pages/home}
 */
export function usePagesPublicFindDefaultHomePage<TData = PagesPublicFindDefaultHomePageStatus200, TQueryData = PagesPublicFindDefaultHomePageStatus200, TQueryKey extends QueryKey = PagesPublicFindDefaultHomePageQueryKey>(options: {
  query?: Partial<QueryObserverOptions<PagesPublicFindDefaultHomePageStatus200, ResponseErrorConfig<PagesPublicFindDefaultHomePageStatus400 | PagesPublicFindDefaultHomePageStatus401 | PagesPublicFindDefaultHomePageStatus403 | PagesPublicFindDefaultHomePageStatus404 | PagesPublicFindDefaultHomePageStatus500 | PagesPublicFindDefaultHomePageStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicFindDefaultHomePageQueryKey()

  const queryResult = useQuery({
   ...pagesPublicFindDefaultHomePageQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<PagesPublicFindDefaultHomePageStatus400 | PagesPublicFindDefaultHomePageStatus401 | PagesPublicFindDefaultHomePageStatus403 | PagesPublicFindDefaultHomePageStatus404 | PagesPublicFindDefaultHomePageStatus500 | PagesPublicFindDefaultHomePageStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
