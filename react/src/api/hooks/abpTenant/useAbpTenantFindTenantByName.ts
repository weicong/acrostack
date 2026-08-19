/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AbpTenantFindTenantByNameOptions, AbpTenantFindTenantByNameStatus200, AbpTenantFindTenantByNameStatus400, AbpTenantFindTenantByNameStatus401, AbpTenantFindTenantByNameStatus403, AbpTenantFindTenantByNameStatus404, AbpTenantFindTenantByNameStatus500, AbpTenantFindTenantByNameStatus501 } from '../../models/abpTenant/AbpTenantFindTenantByName'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { abpTenantFindTenantByName } from '../../clients/abpTenant/abpTenantFindTenantByName'

export const abpTenantFindTenantByNameQueryKey = ({ path }: Omit<AbpTenantFindTenantByNameOptions, 'headers'>) => [{ url: '/api/abp/multi-tenancy/tenants/by-name/:name', params: path }] as const

type AbpTenantFindTenantByNameQueryKey = ReturnType<typeof abpTenantFindTenantByNameQueryKey>

export function abpTenantFindTenantByNameQueryOptions({ path }: AbpTenantFindTenantByNameOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = abpTenantFindTenantByNameQueryKey({ path })
  return queryOptions<AbpTenantFindTenantByNameStatus200, ResponseErrorConfig<AbpTenantFindTenantByNameStatus400 | AbpTenantFindTenantByNameStatus401 | AbpTenantFindTenantByNameStatus403 | AbpTenantFindTenantByNameStatus404 | AbpTenantFindTenantByNameStatus500 | AbpTenantFindTenantByNameStatus501>, AbpTenantFindTenantByNameStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await abpTenantFindTenantByName({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-name/:name}
 */
export function useAbpTenantFindTenantByName<TData = AbpTenantFindTenantByNameStatus200, TQueryData = AbpTenantFindTenantByNameStatus200, TQueryKey extends QueryKey = AbpTenantFindTenantByNameQueryKey>({ path }: { path: AbpTenantFindTenantByNameOptions['path'] | (() => AbpTenantFindTenantByNameOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<AbpTenantFindTenantByNameStatus200, ResponseErrorConfig<AbpTenantFindTenantByNameStatus400 | AbpTenantFindTenantByNameStatus401 | AbpTenantFindTenantByNameStatus403 | AbpTenantFindTenantByNameStatus404 | AbpTenantFindTenantByNameStatus500 | AbpTenantFindTenantByNameStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? abpTenantFindTenantByNameQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...abpTenantFindTenantByNameQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AbpTenantFindTenantByNameStatus400 | AbpTenantFindTenantByNameStatus401 | AbpTenantFindTenantByNameStatus403 | AbpTenantFindTenantByNameStatus404 | AbpTenantFindTenantByNameStatus500 | AbpTenantFindTenantByNameStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
