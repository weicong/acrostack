/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { TenantGetDefaultConnectionStringOptions, TenantGetDefaultConnectionStringStatus200, TenantGetDefaultConnectionStringStatus400, TenantGetDefaultConnectionStringStatus401, TenantGetDefaultConnectionStringStatus403, TenantGetDefaultConnectionStringStatus404, TenantGetDefaultConnectionStringStatus500, TenantGetDefaultConnectionStringStatus501 } from '../../models/tenant/TenantGetDefaultConnectionString'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { tenantGetDefaultConnectionString } from '../../clients/tenant/tenantGetDefaultConnectionString'

export const tenantGetDefaultConnectionStringQueryKey = ({ path }: Omit<TenantGetDefaultConnectionStringOptions, 'headers'>) => [{ url: '/api/multi-tenancy/tenants/:id/default-connection-string', params: path }] as const

type TenantGetDefaultConnectionStringQueryKey = ReturnType<typeof tenantGetDefaultConnectionStringQueryKey>

export function tenantGetDefaultConnectionStringQueryOptions({ path }: TenantGetDefaultConnectionStringOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = tenantGetDefaultConnectionStringQueryKey({ path })
  return queryOptions<TenantGetDefaultConnectionStringStatus200, ResponseErrorConfig<TenantGetDefaultConnectionStringStatus400 | TenantGetDefaultConnectionStringStatus401 | TenantGetDefaultConnectionStringStatus403 | TenantGetDefaultConnectionStringStatus404 | TenantGetDefaultConnectionStringStatus500 | TenantGetDefaultConnectionStringStatus501>, TenantGetDefaultConnectionStringStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await tenantGetDefaultConnectionString({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/multi-tenancy/tenants/:id/default-connection-string}
 */
export function useTenantGetDefaultConnectionString<TData = TenantGetDefaultConnectionStringStatus200, TQueryData = TenantGetDefaultConnectionStringStatus200, TQueryKey extends QueryKey = TenantGetDefaultConnectionStringQueryKey>({ path }: { path: TenantGetDefaultConnectionStringOptions['path'] | (() => TenantGetDefaultConnectionStringOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<TenantGetDefaultConnectionStringStatus200, ResponseErrorConfig<TenantGetDefaultConnectionStringStatus400 | TenantGetDefaultConnectionStringStatus401 | TenantGetDefaultConnectionStringStatus403 | TenantGetDefaultConnectionStringStatus404 | TenantGetDefaultConnectionStringStatus500 | TenantGetDefaultConnectionStringStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? tenantGetDefaultConnectionStringQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...tenantGetDefaultConnectionStringQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<TenantGetDefaultConnectionStringStatus400 | TenantGetDefaultConnectionStringStatus401 | TenantGetDefaultConnectionStringStatus403 | TenantGetDefaultConnectionStringStatus404 | TenantGetDefaultConnectionStringStatus500 | TenantGetDefaultConnectionStringStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
