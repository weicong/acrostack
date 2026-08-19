/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AbpApplicationLocalizationGetOptions, AbpApplicationLocalizationGetStatus200, AbpApplicationLocalizationGetStatus400, AbpApplicationLocalizationGetStatus401, AbpApplicationLocalizationGetStatus403, AbpApplicationLocalizationGetStatus404, AbpApplicationLocalizationGetStatus500, AbpApplicationLocalizationGetStatus501 } from '../../models/abpApplicationLocalization/AbpApplicationLocalizationGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { abpApplicationLocalizationGet } from '../../clients/abpApplicationLocalization/abpApplicationLocalizationGet'

export const abpApplicationLocalizationGetQueryKey = ({ query }: Omit<AbpApplicationLocalizationGetOptions, 'headers'>) => [{ url: '/api/abp/application-localization' }, ...(query ? [query] : [])] as const

type AbpApplicationLocalizationGetQueryKey = ReturnType<typeof abpApplicationLocalizationGetQueryKey>

export function abpApplicationLocalizationGetQueryOptions({ query }: AbpApplicationLocalizationGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = abpApplicationLocalizationGetQueryKey({ query })
  return queryOptions<AbpApplicationLocalizationGetStatus200, ResponseErrorConfig<AbpApplicationLocalizationGetStatus400 | AbpApplicationLocalizationGetStatus401 | AbpApplicationLocalizationGetStatus403 | AbpApplicationLocalizationGetStatus404 | AbpApplicationLocalizationGetStatus500 | AbpApplicationLocalizationGetStatus501>, AbpApplicationLocalizationGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await abpApplicationLocalizationGet({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/abp/application-localization}
 */
export function useAbpApplicationLocalizationGet<TData = AbpApplicationLocalizationGetStatus200, TQueryData = AbpApplicationLocalizationGetStatus200, TQueryKey extends QueryKey = AbpApplicationLocalizationGetQueryKey>({ query }: { query: AbpApplicationLocalizationGetOptions['query'] | (() => AbpApplicationLocalizationGetOptions['query']) }, options: {
  query?: Partial<QueryObserverOptions<AbpApplicationLocalizationGetStatus200, ResponseErrorConfig<AbpApplicationLocalizationGetStatus400 | AbpApplicationLocalizationGetStatus401 | AbpApplicationLocalizationGetStatus403 | AbpApplicationLocalizationGetStatus404 | AbpApplicationLocalizationGetStatus500 | AbpApplicationLocalizationGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? abpApplicationLocalizationGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...abpApplicationLocalizationGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AbpApplicationLocalizationGetStatus400 | AbpApplicationLocalizationGetStatus401 | AbpApplicationLocalizationGetStatus403 | AbpApplicationLocalizationGetStatus404 | AbpApplicationLocalizationGetStatus500 | AbpApplicationLocalizationGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
