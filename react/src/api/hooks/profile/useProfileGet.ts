/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { ProfileGetStatus200, ProfileGetStatus400, ProfileGetStatus401, ProfileGetStatus403, ProfileGetStatus404, ProfileGetStatus500, ProfileGetStatus501 } from '../../models/profile/ProfileGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { profileGet } from '../../clients/profile/profileGet'

export const profileGetQueryKey = () => [{ url: '/api/account/my-profile' }] as const

type ProfileGetQueryKey = ReturnType<typeof profileGetQueryKey>

export function profileGetQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = profileGetQueryKey()
  return queryOptions<ProfileGetStatus200, ResponseErrorConfig<ProfileGetStatus400 | ProfileGetStatus401 | ProfileGetStatus403 | ProfileGetStatus404 | ProfileGetStatus500 | ProfileGetStatus501>, ProfileGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await profileGet({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/account/my-profile}
 */
export function useProfileGet<TData = ProfileGetStatus200, TQueryData = ProfileGetStatus200, TQueryKey extends QueryKey = ProfileGetQueryKey>(options: {
  query?: Partial<QueryObserverOptions<ProfileGetStatus200, ResponseErrorConfig<ProfileGetStatus400 | ProfileGetStatus401 | ProfileGetStatus403 | ProfileGetStatus404 | ProfileGetStatus500 | ProfileGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? profileGetQueryKey()

  const queryResult = useQuery({
   ...profileGetQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<ProfileGetStatus400 | ProfileGetStatus401 | ProfileGetStatus403 | ProfileGetStatus404 | ProfileGetStatus500 | ProfileGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
