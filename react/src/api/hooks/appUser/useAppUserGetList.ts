/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AppUserGetListOptions, AppUserGetListStatus200, AppUserGetListStatus400, AppUserGetListStatus401, AppUserGetListStatus403, AppUserGetListStatus404, AppUserGetListStatus500, AppUserGetListStatus501 } from '../../models/appUser/AppUserGetList'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { appUserGetList } from '../../clients/appUser/appUserGetList'

export const appUserGetListQueryKey = ({ query }: Omit<AppUserGetListOptions, 'headers'> = {}) => [{ url: '/api/app/app-user' }, ...(query ? [query] : [])] as const

type AppUserGetListQueryKey = ReturnType<typeof appUserGetListQueryKey>

export function appUserGetListQueryOptions({ query }: AppUserGetListOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = appUserGetListQueryKey({ query })
  return queryOptions<AppUserGetListStatus200, ResponseErrorConfig<AppUserGetListStatus400 | AppUserGetListStatus401 | AppUserGetListStatus403 | AppUserGetListStatus404 | AppUserGetListStatus500 | AppUserGetListStatus501>, AppUserGetListStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await appUserGetList({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/app-user}
 */
export function useAppUserGetList<TData = AppUserGetListStatus200, TQueryData = AppUserGetListStatus200, TQueryKey extends QueryKey = AppUserGetListQueryKey>({ query }: { query?: AppUserGetListOptions['query'] | (() => AppUserGetListOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<AppUserGetListStatus200, ResponseErrorConfig<AppUserGetListStatus400 | AppUserGetListStatus401 | AppUserGetListStatus403 | AppUserGetListStatus404 | AppUserGetListStatus500 | AppUserGetListStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? appUserGetListQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...appUserGetListQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AppUserGetListStatus400 | AppUserGetListStatus401 | AppUserGetListStatus403 | AppUserGetListStatus404 | AppUserGetListStatus500 | AppUserGetListStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
