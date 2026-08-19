/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { OpenIddictScopeGetListOptions, OpenIddictScopeGetListStatus200, OpenIddictScopeGetListStatus400, OpenIddictScopeGetListStatus401, OpenIddictScopeGetListStatus403, OpenIddictScopeGetListStatus404, OpenIddictScopeGetListStatus500, OpenIddictScopeGetListStatus501 } from '../../models/openIddictScope/OpenIddictScopeGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { openIddictScopeGetList } from '../../clients/openIddictScope/openIddictScopeGetList'

export const openIddictScopeGetListQueryKey = ({ query }: Omit<OpenIddictScopeGetListOptions, 'headers'> = {}) => [{ url: '/api/app/open-iddict-scope' }, ...(query ? [query] : [])] as const

type OpenIddictScopeGetListQueryKey = ReturnType<typeof openIddictScopeGetListQueryKey>

export function openIddictScopeGetListQueryOptions({ query }: OpenIddictScopeGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = openIddictScopeGetListQueryKey({ query })
  return queryOptions<OpenIddictScopeGetListStatus200, ResponseErrorConfig<OpenIddictScopeGetListStatus400 | OpenIddictScopeGetListStatus401 | OpenIddictScopeGetListStatus403 | OpenIddictScopeGetListStatus404 | OpenIddictScopeGetListStatus500 | OpenIddictScopeGetListStatus501>, OpenIddictScopeGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await openIddictScopeGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/open-iddict-scope}
 */
export function useOpenIddictScopeGetList<TData = OpenIddictScopeGetListStatus200, TQueryData = OpenIddictScopeGetListStatus200, TQueryKey extends QueryKey = OpenIddictScopeGetListQueryKey>({ query }: { query?: OpenIddictScopeGetListOptions['query'] | (() => OpenIddictScopeGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<OpenIddictScopeGetListStatus200, ResponseErrorConfig<OpenIddictScopeGetListStatus400 | OpenIddictScopeGetListStatus401 | OpenIddictScopeGetListStatus403 | OpenIddictScopeGetListStatus404 | OpenIddictScopeGetListStatus500 | OpenIddictScopeGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? openIddictScopeGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...openIddictScopeGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<OpenIddictScopeGetListStatus400 | OpenIddictScopeGetListStatus401 | OpenIddictScopeGetListStatus403 | OpenIddictScopeGetListStatus404 | OpenIddictScopeGetListStatus500 | OpenIddictScopeGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
