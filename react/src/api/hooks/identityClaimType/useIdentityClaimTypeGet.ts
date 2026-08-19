/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { IdentityClaimTypeGetOptions, IdentityClaimTypeGetStatus200, IdentityClaimTypeGetStatus400, IdentityClaimTypeGetStatus401, IdentityClaimTypeGetStatus403, IdentityClaimTypeGetStatus404, IdentityClaimTypeGetStatus500, IdentityClaimTypeGetStatus501 } from '../../models/identityClaimType/IdentityClaimTypeGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { identityClaimTypeGet } from '../../clients/identityClaimType/identityClaimTypeGet'

export const identityClaimTypeGetQueryKey = ({ path }: Omit<IdentityClaimTypeGetOptions, 'headers'>) => [{ url: '/api/app/identity-claim-type/:id', params: path }] as const

type IdentityClaimTypeGetQueryKey = ReturnType<typeof identityClaimTypeGetQueryKey>

export function identityClaimTypeGetQueryOptions({ path }: IdentityClaimTypeGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = identityClaimTypeGetQueryKey({ path })
  return queryOptions<IdentityClaimTypeGetStatus200, ResponseErrorConfig<IdentityClaimTypeGetStatus400 | IdentityClaimTypeGetStatus401 | IdentityClaimTypeGetStatus403 | IdentityClaimTypeGetStatus404 | IdentityClaimTypeGetStatus500 | IdentityClaimTypeGetStatus501>, IdentityClaimTypeGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await identityClaimTypeGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/identity-claim-type/:id}
 */
export function useIdentityClaimTypeGet<TData = IdentityClaimTypeGetStatus200, TQueryData = IdentityClaimTypeGetStatus200, TQueryKey extends QueryKey = IdentityClaimTypeGetQueryKey>({ path }: { path: IdentityClaimTypeGetOptions['path'] | (() => IdentityClaimTypeGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<IdentityClaimTypeGetStatus200, ResponseErrorConfig<IdentityClaimTypeGetStatus400 | IdentityClaimTypeGetStatus401 | IdentityClaimTypeGetStatus403 | IdentityClaimTypeGetStatus404 | IdentityClaimTypeGetStatus500 | IdentityClaimTypeGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? identityClaimTypeGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...identityClaimTypeGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<IdentityClaimTypeGetStatus400 | IdentityClaimTypeGetStatus401 | IdentityClaimTypeGetStatus403 | IdentityClaimTypeGetStatus404 | IdentityClaimTypeGetStatus500 | IdentityClaimTypeGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
