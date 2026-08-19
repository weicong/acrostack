/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PagesPublicFindBySlugOptions, PagesPublicFindBySlugStatus200, PagesPublicFindBySlugStatus400, PagesPublicFindBySlugStatus401, PagesPublicFindBySlugStatus403, PagesPublicFindBySlugStatus404, PagesPublicFindBySlugStatus500, PagesPublicFindBySlugStatus501 } from '../../models/pagesPublic/PagesPublicFindBySlug'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { pagesPublicFindBySlug } from '../../clients/pagesPublic/pagesPublicFindBySlug'

export const pagesPublicFindBySlugQueryKey = ({ query }: Omit<PagesPublicFindBySlugOptions, 'headers'> = {}) => [{ url: '/api/cms-kit-public/pages/by-slug' }, ...(query ? [query] : [])] as const

type PagesPublicFindBySlugQueryKey = ReturnType<typeof pagesPublicFindBySlugQueryKey>

export function pagesPublicFindBySlugQueryOptions({ query }: PagesPublicFindBySlugOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = pagesPublicFindBySlugQueryKey({ query })
  return queryOptions<PagesPublicFindBySlugStatus200, ResponseErrorConfig<PagesPublicFindBySlugStatus400 | PagesPublicFindBySlugStatus401 | PagesPublicFindBySlugStatus403 | PagesPublicFindBySlugStatus404 | PagesPublicFindBySlugStatus500 | PagesPublicFindBySlugStatus501>, PagesPublicFindBySlugStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await pagesPublicFindBySlug({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/pages/by-slug}
 */
export function usePagesPublicFindBySlug<TData = PagesPublicFindBySlugStatus200, TQueryData = PagesPublicFindBySlugStatus200, TQueryKey extends QueryKey = PagesPublicFindBySlugQueryKey>({ query }: { query?: PagesPublicFindBySlugOptions['query'] | (() => PagesPublicFindBySlugOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<PagesPublicFindBySlugStatus200, ResponseErrorConfig<PagesPublicFindBySlugStatus400 | PagesPublicFindBySlugStatus401 | PagesPublicFindBySlugStatus403 | PagesPublicFindBySlugStatus404 | PagesPublicFindBySlugStatus500 | PagesPublicFindBySlugStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? pagesPublicFindBySlugQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...pagesPublicFindBySlugQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<PagesPublicFindBySlugStatus400 | PagesPublicFindBySlugStatus401 | PagesPublicFindBySlugStatus403 | PagesPublicFindBySlugStatus404 | PagesPublicFindBySlugStatus500 | PagesPublicFindBySlugStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
