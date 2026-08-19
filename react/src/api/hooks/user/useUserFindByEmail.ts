/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { UserFindByEmailOptions, UserFindByEmailStatus200, UserFindByEmailStatus400, UserFindByEmailStatus401, UserFindByEmailStatus403, UserFindByEmailStatus404, UserFindByEmailStatus500, UserFindByEmailStatus501 } from '../../models/user/UserFindByEmail'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { userFindByEmail } from '../../clients/user/userFindByEmail'

export const userFindByEmailQueryKey = ({ path }: Omit<UserFindByEmailOptions, 'headers'>) => [{ url: '/api/identity/users/by-email/:email', params: path }] as const

type UserFindByEmailQueryKey = ReturnType<typeof userFindByEmailQueryKey>

export function userFindByEmailQueryOptions({ path }: UserFindByEmailOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = userFindByEmailQueryKey({ path })
  return queryOptions<UserFindByEmailStatus200, ResponseErrorConfig<UserFindByEmailStatus400 | UserFindByEmailStatus401 | UserFindByEmailStatus403 | UserFindByEmailStatus404 | UserFindByEmailStatus500 | UserFindByEmailStatus501>, UserFindByEmailStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await userFindByEmail({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/identity/users/by-email/:email}
 */
export function useUserFindByEmail<TData = UserFindByEmailStatus200, TQueryData = UserFindByEmailStatus200, TQueryKey extends QueryKey = UserFindByEmailQueryKey>({ path }: { path: UserFindByEmailOptions['path'] | (() => UserFindByEmailOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<UserFindByEmailStatus200, ResponseErrorConfig<UserFindByEmailStatus400 | UserFindByEmailStatus401 | UserFindByEmailStatus403 | UserFindByEmailStatus404 | UserFindByEmailStatus500 | UserFindByEmailStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? userFindByEmailQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...userFindByEmailQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<UserFindByEmailStatus400 | UserFindByEmailStatus401 | UserFindByEmailStatus403 | UserFindByEmailStatus404 | UserFindByEmailStatus500 | UserFindByEmailStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
