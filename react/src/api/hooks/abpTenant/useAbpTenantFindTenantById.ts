/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AbpTenantFindTenantByIdOptions, AbpTenantFindTenantByIdStatus200, AbpTenantFindTenantByIdStatus400, AbpTenantFindTenantByIdStatus401, AbpTenantFindTenantByIdStatus403, AbpTenantFindTenantByIdStatus404, AbpTenantFindTenantByIdStatus500, AbpTenantFindTenantByIdStatus501 } from '../../models/abpTenant/AbpTenantFindTenantById'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { abpTenantFindTenantById } from '../../clients/abpTenant/abpTenantFindTenantById'

export const abpTenantFindTenantByIdQueryKey = ({ path }: Omit<AbpTenantFindTenantByIdOptions, 'headers'>) => [{ url: '/api/abp/multi-tenancy/tenants/by-id/:id', params: path }] as const

type AbpTenantFindTenantByIdQueryKey = ReturnType<typeof abpTenantFindTenantByIdQueryKey>

export function abpTenantFindTenantByIdQueryOptions({ path }: AbpTenantFindTenantByIdOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = abpTenantFindTenantByIdQueryKey({ path })
  return queryOptions<AbpTenantFindTenantByIdStatus200, ResponseErrorConfig<AbpTenantFindTenantByIdStatus400 | AbpTenantFindTenantByIdStatus401 | AbpTenantFindTenantByIdStatus403 | AbpTenantFindTenantByIdStatus404 | AbpTenantFindTenantByIdStatus500 | AbpTenantFindTenantByIdStatus501>, AbpTenantFindTenantByIdStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await abpTenantFindTenantById({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/abp/multi-tenancy/tenants/by-id/:id}
 */
export function useAbpTenantFindTenantById<TData = AbpTenantFindTenantByIdStatus200, TQueryData = AbpTenantFindTenantByIdStatus200, TQueryKey extends QueryKey = AbpTenantFindTenantByIdQueryKey>({ path }: { path: AbpTenantFindTenantByIdOptions['path'] | (() => AbpTenantFindTenantByIdOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<AbpTenantFindTenantByIdStatus200, ResponseErrorConfig<AbpTenantFindTenantByIdStatus400 | AbpTenantFindTenantByIdStatus401 | AbpTenantFindTenantByIdStatus403 | AbpTenantFindTenantByIdStatus404 | AbpTenantFindTenantByIdStatus500 | AbpTenantFindTenantByIdStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? abpTenantFindTenantByIdQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...abpTenantFindTenantByIdQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AbpTenantFindTenantByIdStatus400 | AbpTenantFindTenantByIdStatus401 | AbpTenantFindTenantByIdStatus403 | AbpTenantFindTenantByIdStatus404 | AbpTenantFindTenantByIdStatus500 | AbpTenantFindTenantByIdStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
