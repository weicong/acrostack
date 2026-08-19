/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { RoleGetListOptions, RoleGetListStatus200, RoleGetListStatus400, RoleGetListStatus401, RoleGetListStatus403, RoleGetListStatus404, RoleGetListStatus500, RoleGetListStatus501 } from '../../models/role/RoleGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { roleGetList } from '../../clients/role/roleGetList'

export const roleGetListQueryKey = ({ query }: Omit<RoleGetListOptions, 'headers'> = {}) => [{ url: '/api/identity/roles' }, ...(query ? [query] : [])] as const

type RoleGetListQueryKey = ReturnType<typeof roleGetListQueryKey>

export function roleGetListQueryOptions({ query }: RoleGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = roleGetListQueryKey({ query })
  return queryOptions<RoleGetListStatus200, ResponseErrorConfig<RoleGetListStatus400 | RoleGetListStatus401 | RoleGetListStatus403 | RoleGetListStatus404 | RoleGetListStatus500 | RoleGetListStatus501>, RoleGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await roleGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/identity/roles}
 */
export function useRoleGetList<TData = RoleGetListStatus200, TQueryData = RoleGetListStatus200, TQueryKey extends QueryKey = RoleGetListQueryKey>({ query }: { query?: RoleGetListOptions['query'] | (() => RoleGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<RoleGetListStatus200, ResponseErrorConfig<RoleGetListStatus400 | RoleGetListStatus401 | RoleGetListStatus403 | RoleGetListStatus404 | RoleGetListStatus500 | RoleGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? roleGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...roleGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<RoleGetListStatus400 | RoleGetListStatus401 | RoleGetListStatus403 | RoleGetListStatus404 | RoleGetListStatus500 | RoleGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
