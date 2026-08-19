/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PermissionsGetOptions, PermissionsGetStatus200, PermissionsGetStatus400, PermissionsGetStatus401, PermissionsGetStatus403, PermissionsGetStatus404, PermissionsGetStatus500, PermissionsGetStatus501 } from '../../models/permissions/PermissionsGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { permissionsGet } from '../../clients/permissions/permissionsGet'

export const permissionsGetQueryKey = ({ query }: Omit<PermissionsGetOptions, 'headers'> = {}) => [{ url: '/api/permission-management/permissions' }, ...(query ? [query] : [])] as const

type PermissionsGetQueryKey = ReturnType<typeof permissionsGetQueryKey>

export function permissionsGetQueryOptions({ query }: PermissionsGetOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = permissionsGetQueryKey({ query })
  return queryOptions<PermissionsGetStatus200, ResponseErrorConfig<PermissionsGetStatus400 | PermissionsGetStatus401 | PermissionsGetStatus403 | PermissionsGetStatus404 | PermissionsGetStatus500 | PermissionsGetStatus501>, PermissionsGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await permissionsGet({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/permission-management/permissions}
 */
export function usePermissionsGet<TData = PermissionsGetStatus200, TQueryData = PermissionsGetStatus200, TQueryKey extends QueryKey = PermissionsGetQueryKey>({ query }: { query?: PermissionsGetOptions['query'] | (() => PermissionsGetOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<PermissionsGetStatus200, ResponseErrorConfig<PermissionsGetStatus400 | PermissionsGetStatus401 | PermissionsGetStatus403 | PermissionsGetStatus404 | PermissionsGetStatus500 | PermissionsGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? permissionsGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...permissionsGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<PermissionsGetStatus400 | PermissionsGetStatus401 | PermissionsGetStatus403 | PermissionsGetStatus404 | PermissionsGetStatus500 | PermissionsGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
