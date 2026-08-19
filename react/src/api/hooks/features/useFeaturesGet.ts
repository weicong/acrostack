/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { FeaturesGetOptions, FeaturesGetStatus200, FeaturesGetStatus400, FeaturesGetStatus401, FeaturesGetStatus403, FeaturesGetStatus404, FeaturesGetStatus500, FeaturesGetStatus501 } from '../../models/features/FeaturesGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { featuresGet } from '../../clients/features/featuresGet'

export const featuresGetQueryKey = ({ query }: Omit<FeaturesGetOptions, 'headers'> = {}) => [{ url: '/api/feature-management/features' }, ...(query ? [query] : [])] as const

type FeaturesGetQueryKey = ReturnType<typeof featuresGetQueryKey>

export function featuresGetQueryOptions({ query }: FeaturesGetOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = featuresGetQueryKey({ query })
  return queryOptions<FeaturesGetStatus200, ResponseErrorConfig<FeaturesGetStatus400 | FeaturesGetStatus401 | FeaturesGetStatus403 | FeaturesGetStatus404 | FeaturesGetStatus500 | FeaturesGetStatus501>, FeaturesGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await featuresGet({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/feature-management/features}
 */
export function useFeaturesGet<TData = FeaturesGetStatus200, TQueryData = FeaturesGetStatus200, TQueryKey extends QueryKey = FeaturesGetQueryKey>({ query }: { query?: FeaturesGetOptions['query'] | (() => FeaturesGetOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<FeaturesGetStatus200, ResponseErrorConfig<FeaturesGetStatus400 | FeaturesGetStatus401 | FeaturesGetStatus403 | FeaturesGetStatus404 | FeaturesGetStatus500 | FeaturesGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? featuresGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...featuresGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<FeaturesGetStatus400 | FeaturesGetStatus401 | FeaturesGetStatus403 | FeaturesGetStatus404 | FeaturesGetStatus500 | FeaturesGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
