/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { LoginLogoutStatus200, LoginLogoutStatus204, LoginLogoutStatus400, LoginLogoutStatus401, LoginLogoutStatus403, LoginLogoutStatus404, LoginLogoutStatus500, LoginLogoutStatus501 } from '../../models/login/LoginLogout'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { loginLogout } from '../../clients/login/loginLogout'

export const loginLogoutQueryKey = () => [{ url: '/api/account/logout' }] as const

type LoginLogoutQueryKey = ReturnType<typeof loginLogoutQueryKey>

export function loginLogoutQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = loginLogoutQueryKey()
  return queryOptions<LoginLogoutStatus200 | LoginLogoutStatus204, ResponseErrorConfig<LoginLogoutStatus400 | LoginLogoutStatus401 | LoginLogoutStatus403 | LoginLogoutStatus404 | LoginLogoutStatus500 | LoginLogoutStatus501>, LoginLogoutStatus200 | LoginLogoutStatus204, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await loginLogout({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/account/logout}
 */
export function useLoginLogout<TData = LoginLogoutStatus200 | LoginLogoutStatus204, TQueryData = LoginLogoutStatus200 | LoginLogoutStatus204, TQueryKey extends QueryKey = LoginLogoutQueryKey>(options: {
  query?: Partial<QueryObserverOptions<LoginLogoutStatus200 | LoginLogoutStatus204, ResponseErrorConfig<LoginLogoutStatus400 | LoginLogoutStatus401 | LoginLogoutStatus403 | LoginLogoutStatus404 | LoginLogoutStatus500 | LoginLogoutStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? loginLogoutQueryKey()

  const queryResult = useQuery({
   ...loginLogoutQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<LoginLogoutStatus400 | LoginLogoutStatus401 | LoginLogoutStatus403 | LoginLogoutStatus404 | LoginLogoutStatus500 | LoginLogoutStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
