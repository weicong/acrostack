/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { UserGetAssignableRolesStatus200, UserGetAssignableRolesStatus400, UserGetAssignableRolesStatus401, UserGetAssignableRolesStatus403, UserGetAssignableRolesStatus404, UserGetAssignableRolesStatus500, UserGetAssignableRolesStatus501 } from '../../models/user/UserGetAssignableRoles'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { userGetAssignableRoles } from '../../clients/user/userGetAssignableRoles'

export const userGetAssignableRolesQueryKey = () => [{ url: '/api/identity/users/assignable-roles' }] as const

type UserGetAssignableRolesQueryKey = ReturnType<typeof userGetAssignableRolesQueryKey>

export function userGetAssignableRolesQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = userGetAssignableRolesQueryKey()
  return queryOptions<UserGetAssignableRolesStatus200, ResponseErrorConfig<UserGetAssignableRolesStatus400 | UserGetAssignableRolesStatus401 | UserGetAssignableRolesStatus403 | UserGetAssignableRolesStatus404 | UserGetAssignableRolesStatus500 | UserGetAssignableRolesStatus501>, UserGetAssignableRolesStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await userGetAssignableRoles({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/identity/users/assignable-roles}
 */
export function useUserGetAssignableRoles<TData = UserGetAssignableRolesStatus200, TQueryData = UserGetAssignableRolesStatus200, TQueryKey extends QueryKey = UserGetAssignableRolesQueryKey>(options: {
  query?: Partial<QueryObserverOptions<UserGetAssignableRolesStatus200, ResponseErrorConfig<UserGetAssignableRolesStatus400 | UserGetAssignableRolesStatus401 | UserGetAssignableRolesStatus403 | UserGetAssignableRolesStatus404 | UserGetAssignableRolesStatus500 | UserGetAssignableRolesStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? userGetAssignableRolesQueryKey()

  const queryResult = useQuery({
   ...userGetAssignableRolesQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<UserGetAssignableRolesStatus400 | UserGetAssignableRolesStatus401 | UserGetAssignableRolesStatus403 | UserGetAssignableRolesStatus404 | UserGetAssignableRolesStatus500 | UserGetAssignableRolesStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
