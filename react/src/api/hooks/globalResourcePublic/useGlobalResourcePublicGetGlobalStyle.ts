/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { GlobalResourcePublicGetGlobalStyleStatus200, GlobalResourcePublicGetGlobalStyleStatus400, GlobalResourcePublicGetGlobalStyleStatus401, GlobalResourcePublicGetGlobalStyleStatus403, GlobalResourcePublicGetGlobalStyleStatus404, GlobalResourcePublicGetGlobalStyleStatus500, GlobalResourcePublicGetGlobalStyleStatus501 } from '../../models/globalResourcePublic/GlobalResourcePublicGetGlobalStyle'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { globalResourcePublicGetGlobalStyle } from '../../clients/globalResourcePublic/globalResourcePublicGetGlobalStyle'

export const globalResourcePublicGetGlobalStyleQueryKey = () => [{ url: '/api/cms-kit-public/global-resources/style' }] as const

type GlobalResourcePublicGetGlobalStyleQueryKey = ReturnType<typeof globalResourcePublicGetGlobalStyleQueryKey>

export function globalResourcePublicGetGlobalStyleQueryOptions(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = globalResourcePublicGetGlobalStyleQueryKey()
  return queryOptions<GlobalResourcePublicGetGlobalStyleStatus200, ResponseErrorConfig<GlobalResourcePublicGetGlobalStyleStatus400 | GlobalResourcePublicGetGlobalStyleStatus401 | GlobalResourcePublicGetGlobalStyleStatus403 | GlobalResourcePublicGetGlobalStyleStatus404 | GlobalResourcePublicGetGlobalStyleStatus500 | GlobalResourcePublicGetGlobalStyleStatus501>, GlobalResourcePublicGetGlobalStyleStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await globalResourcePublicGetGlobalStyle({ ...config, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/cms-kit-public/global-resources/style}
 */
export function useGlobalResourcePublicGetGlobalStyle<TData = GlobalResourcePublicGetGlobalStyleStatus200, TQueryData = GlobalResourcePublicGetGlobalStyleStatus200, TQueryKey extends QueryKey = GlobalResourcePublicGetGlobalStyleQueryKey>(options: {
  query?: Partial<QueryObserverOptions<GlobalResourcePublicGetGlobalStyleStatus200, ResponseErrorConfig<GlobalResourcePublicGetGlobalStyleStatus400 | GlobalResourcePublicGetGlobalStyleStatus401 | GlobalResourcePublicGetGlobalStyleStatus403 | GlobalResourcePublicGetGlobalStyleStatus404 | GlobalResourcePublicGetGlobalStyleStatus500 | GlobalResourcePublicGetGlobalStyleStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const queryKey = resolvedOptions?.queryKey ?? globalResourcePublicGetGlobalStyleQueryKey()

  const queryResult = useQuery({
   ...globalResourcePublicGetGlobalStyleQueryOptions(config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<GlobalResourcePublicGetGlobalStyleStatus400 | GlobalResourcePublicGetGlobalStyleStatus401 | GlobalResourcePublicGetGlobalStyleStatus403 | GlobalResourcePublicGetGlobalStyleStatus404 | GlobalResourcePublicGetGlobalStyleStatus500 | GlobalResourcePublicGetGlobalStyleStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
