/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { PermissionsSearchResourceProviderKeyOptions, PermissionsSearchResourceProviderKeyStatus200, PermissionsSearchResourceProviderKeyStatus400, PermissionsSearchResourceProviderKeyStatus401, PermissionsSearchResourceProviderKeyStatus403, PermissionsSearchResourceProviderKeyStatus404, PermissionsSearchResourceProviderKeyStatus500, PermissionsSearchResourceProviderKeyStatus501 } from '../../models/permissions/PermissionsSearchResourceProviderKey'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { permissionsSearchResourceProviderKey } from '../../clients/permissions/permissionsSearchResourceProviderKey'

export const permissionsSearchResourceProviderKeyQueryKey = ({ query }: Omit<PermissionsSearchResourceProviderKeyOptions, 'headers'> = {}) => [{ url: '/api/permission-management/permissions/search-resource-provider-keys' }, ...(query ? [query] : [])] as const

type PermissionsSearchResourceProviderKeyQueryKey = ReturnType<typeof permissionsSearchResourceProviderKeyQueryKey>

export function permissionsSearchResourceProviderKeyQueryOptions({ query }: PermissionsSearchResourceProviderKeyOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = permissionsSearchResourceProviderKeyQueryKey({ query })
  return queryOptions<PermissionsSearchResourceProviderKeyStatus200, ResponseErrorConfig<PermissionsSearchResourceProviderKeyStatus400 | PermissionsSearchResourceProviderKeyStatus401 | PermissionsSearchResourceProviderKeyStatus403 | PermissionsSearchResourceProviderKeyStatus404 | PermissionsSearchResourceProviderKeyStatus500 | PermissionsSearchResourceProviderKeyStatus501>, PermissionsSearchResourceProviderKeyStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await permissionsSearchResourceProviderKey({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/permission-management/permissions/search-resource-provider-keys}
 */
export function usePermissionsSearchResourceProviderKey<TData = PermissionsSearchResourceProviderKeyStatus200, TQueryData = PermissionsSearchResourceProviderKeyStatus200, TQueryKey extends QueryKey = PermissionsSearchResourceProviderKeyQueryKey>({ query }: { query?: PermissionsSearchResourceProviderKeyOptions['query'] | (() => PermissionsSearchResourceProviderKeyOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<PermissionsSearchResourceProviderKeyStatus200, ResponseErrorConfig<PermissionsSearchResourceProviderKeyStatus400 | PermissionsSearchResourceProviderKeyStatus401 | PermissionsSearchResourceProviderKeyStatus403 | PermissionsSearchResourceProviderKeyStatus404 | PermissionsSearchResourceProviderKeyStatus500 | PermissionsSearchResourceProviderKeyStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? permissionsSearchResourceProviderKeyQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...permissionsSearchResourceProviderKeyQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<PermissionsSearchResourceProviderKeyStatus400 | PermissionsSearchResourceProviderKeyStatus401 | PermissionsSearchResourceProviderKeyStatus403 | PermissionsSearchResourceProviderKeyStatus404 | PermissionsSearchResourceProviderKeyStatus500 | PermissionsSearchResourceProviderKeyStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
