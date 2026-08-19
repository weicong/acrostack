/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { UserGetRolesOptions, UserGetRolesStatus200, UserGetRolesStatus400, UserGetRolesStatus401, UserGetRolesStatus403, UserGetRolesStatus404, UserGetRolesStatus500, UserGetRolesStatus501 } from '../../models/user/UserGetRoles'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { userGetRoles } from '../../clients/user/userGetRoles'

export const userGetRolesQueryKey = ({ path }: Omit<UserGetRolesOptions, 'headers'>) => [{ url: '/api/identity/users/:id/roles', params: path }] as const

type UserGetRolesQueryKey = ReturnType<typeof userGetRolesQueryKey>

export function userGetRolesQueryOptions({ path }: UserGetRolesOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = userGetRolesQueryKey({ path })
  return queryOptions<UserGetRolesStatus200, ResponseErrorConfig<UserGetRolesStatus400 | UserGetRolesStatus401 | UserGetRolesStatus403 | UserGetRolesStatus404 | UserGetRolesStatus500 | UserGetRolesStatus501>, UserGetRolesStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await userGetRoles({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/identity/users/:id/roles}
 */
export function useUserGetRoles<TData = UserGetRolesStatus200, TQueryData = UserGetRolesStatus200, TQueryKey extends QueryKey = UserGetRolesQueryKey>({ path }: { path: UserGetRolesOptions['path'] | (() => UserGetRolesOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<UserGetRolesStatus200, ResponseErrorConfig<UserGetRolesStatus400 | UserGetRolesStatus401 | UserGetRolesStatus403 | UserGetRolesStatus404 | UserGetRolesStatus500 | UserGetRolesStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? userGetRolesQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...userGetRolesQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<UserGetRolesStatus400 | UserGetRolesStatus401 | UserGetRolesStatus403 | UserGetRolesStatus404 | UserGetRolesStatus500 | UserGetRolesStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
