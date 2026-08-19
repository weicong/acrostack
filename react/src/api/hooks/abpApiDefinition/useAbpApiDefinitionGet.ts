/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AbpApiDefinitionGetOptions, AbpApiDefinitionGetStatus200, AbpApiDefinitionGetStatus400, AbpApiDefinitionGetStatus401, AbpApiDefinitionGetStatus403, AbpApiDefinitionGetStatus404, AbpApiDefinitionGetStatus500, AbpApiDefinitionGetStatus501 } from '../../models/abpApiDefinition/AbpApiDefinitionGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { abpApiDefinitionGet } from '../../clients/abpApiDefinition/abpApiDefinitionGet'

export const abpApiDefinitionGetQueryKey = ({ query }: Omit<AbpApiDefinitionGetOptions, 'headers'> = {}) => [{ url: '/api/abp/api-definition' }, ...(query ? [query] : [])] as const

type AbpApiDefinitionGetQueryKey = ReturnType<typeof abpApiDefinitionGetQueryKey>

export function abpApiDefinitionGetQueryOptions({ query }: AbpApiDefinitionGetOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = abpApiDefinitionGetQueryKey({ query })
  return queryOptions<AbpApiDefinitionGetStatus200, ResponseErrorConfig<AbpApiDefinitionGetStatus400 | AbpApiDefinitionGetStatus401 | AbpApiDefinitionGetStatus403 | AbpApiDefinitionGetStatus404 | AbpApiDefinitionGetStatus500 | AbpApiDefinitionGetStatus501>, AbpApiDefinitionGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await abpApiDefinitionGet({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/abp/api-definition}
 */
export function useAbpApiDefinitionGet<TData = AbpApiDefinitionGetStatus200, TQueryData = AbpApiDefinitionGetStatus200, TQueryKey extends QueryKey = AbpApiDefinitionGetQueryKey>({ query }: { query?: AbpApiDefinitionGetOptions['query'] | (() => AbpApiDefinitionGetOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<AbpApiDefinitionGetStatus200, ResponseErrorConfig<AbpApiDefinitionGetStatus400 | AbpApiDefinitionGetStatus401 | AbpApiDefinitionGetStatus403 | AbpApiDefinitionGetStatus404 | AbpApiDefinitionGetStatus500 | AbpApiDefinitionGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? abpApiDefinitionGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...abpApiDefinitionGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AbpApiDefinitionGetStatus400 | AbpApiDefinitionGetStatus401 | AbpApiDefinitionGetStatus403 | AbpApiDefinitionGetStatus404 | AbpApiDefinitionGetStatus500 | AbpApiDefinitionGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
