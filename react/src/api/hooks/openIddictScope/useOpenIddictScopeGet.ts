/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { OpenIddictScopeGetOptions, OpenIddictScopeGetStatus200, OpenIddictScopeGetStatus400, OpenIddictScopeGetStatus401, OpenIddictScopeGetStatus403, OpenIddictScopeGetStatus404, OpenIddictScopeGetStatus500, OpenIddictScopeGetStatus501 } from '../../models/openIddictScope/OpenIddictScopeGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { openIddictScopeGet } from '../../clients/openIddictScope/openIddictScopeGet'

export const openIddictScopeGetQueryKey = ({ path }: Omit<OpenIddictScopeGetOptions, 'headers'>) => [{ url: '/api/app/open-iddict-scope/:id', params: path }] as const

type OpenIddictScopeGetQueryKey = ReturnType<typeof openIddictScopeGetQueryKey>

export function openIddictScopeGetQueryOptions({ path }: OpenIddictScopeGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = openIddictScopeGetQueryKey({ path })
  return queryOptions<OpenIddictScopeGetStatus200, ResponseErrorConfig<OpenIddictScopeGetStatus400 | OpenIddictScopeGetStatus401 | OpenIddictScopeGetStatus403 | OpenIddictScopeGetStatus404 | OpenIddictScopeGetStatus500 | OpenIddictScopeGetStatus501>, OpenIddictScopeGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await openIddictScopeGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/open-iddict-scope/:id}
 */
export function useOpenIddictScopeGet<TData = OpenIddictScopeGetStatus200, TQueryData = OpenIddictScopeGetStatus200, TQueryKey extends QueryKey = OpenIddictScopeGetQueryKey>({ path }: { path: OpenIddictScopeGetOptions['path'] | (() => OpenIddictScopeGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<OpenIddictScopeGetStatus200, ResponseErrorConfig<OpenIddictScopeGetStatus400 | OpenIddictScopeGetStatus401 | OpenIddictScopeGetStatus403 | OpenIddictScopeGetStatus404 | OpenIddictScopeGetStatus500 | OpenIddictScopeGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? openIddictScopeGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...openIddictScopeGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<OpenIddictScopeGetStatus400 | OpenIddictScopeGetStatus401 | OpenIddictScopeGetStatus403 | OpenIddictScopeGetStatus404 | OpenIddictScopeGetStatus500 | OpenIddictScopeGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
