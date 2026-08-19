/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AbpApplicationConfigurationGetOptions, AbpApplicationConfigurationGetStatus200, AbpApplicationConfigurationGetStatus400, AbpApplicationConfigurationGetStatus401, AbpApplicationConfigurationGetStatus403, AbpApplicationConfigurationGetStatus404, AbpApplicationConfigurationGetStatus500, AbpApplicationConfigurationGetStatus501 } from '../../models/abpApplicationConfiguration/AbpApplicationConfigurationGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { abpApplicationConfigurationGet } from '../../clients/abpApplicationConfiguration/abpApplicationConfigurationGet'

export const abpApplicationConfigurationGetQueryKey = ({ query }: Omit<AbpApplicationConfigurationGetOptions, 'headers'> = {}) => [{ url: '/api/abp/application-configuration' }, ...(query ? [query] : [])] as const

type AbpApplicationConfigurationGetQueryKey = ReturnType<typeof abpApplicationConfigurationGetQueryKey>

export function abpApplicationConfigurationGetQueryOptions({ query }: AbpApplicationConfigurationGetOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = abpApplicationConfigurationGetQueryKey({ query })
  return queryOptions<AbpApplicationConfigurationGetStatus200, ResponseErrorConfig<AbpApplicationConfigurationGetStatus400 | AbpApplicationConfigurationGetStatus401 | AbpApplicationConfigurationGetStatus403 | AbpApplicationConfigurationGetStatus404 | AbpApplicationConfigurationGetStatus500 | AbpApplicationConfigurationGetStatus501>, AbpApplicationConfigurationGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await abpApplicationConfigurationGet({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/abp/application-configuration}
 */
export function useAbpApplicationConfigurationGet<TData = AbpApplicationConfigurationGetStatus200, TQueryData = AbpApplicationConfigurationGetStatus200, TQueryKey extends QueryKey = AbpApplicationConfigurationGetQueryKey>({ query }: { query?: AbpApplicationConfigurationGetOptions['query'] | (() => AbpApplicationConfigurationGetOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<AbpApplicationConfigurationGetStatus200, ResponseErrorConfig<AbpApplicationConfigurationGetStatus400 | AbpApplicationConfigurationGetStatus401 | AbpApplicationConfigurationGetStatus403 | AbpApplicationConfigurationGetStatus404 | AbpApplicationConfigurationGetStatus500 | AbpApplicationConfigurationGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? abpApplicationConfigurationGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...abpApplicationConfigurationGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AbpApplicationConfigurationGetStatus400 | AbpApplicationConfigurationGetStatus401 | AbpApplicationConfigurationGetStatus403 | AbpApplicationConfigurationGetStatus404 | AbpApplicationConfigurationGetStatus500 | AbpApplicationConfigurationGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
