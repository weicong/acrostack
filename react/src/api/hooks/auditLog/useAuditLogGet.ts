/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AuditLogGetOptions, AuditLogGetStatus200, AuditLogGetStatus400, AuditLogGetStatus401, AuditLogGetStatus403, AuditLogGetStatus404, AuditLogGetStatus500, AuditLogGetStatus501 } from '../../models/auditLog/AuditLogGet'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { auditLogGet } from '../../clients/auditLog/auditLogGet'

export const auditLogGetQueryKey = ({ path }: Omit<AuditLogGetOptions, 'headers'>) => [{ url: '/api/app/audit-log/:id', params: path }] as const

type AuditLogGetQueryKey = ReturnType<typeof auditLogGetQueryKey>

export function auditLogGetQueryOptions({ path }: AuditLogGetOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = auditLogGetQueryKey({ path })
  return queryOptions<AuditLogGetStatus200, ResponseErrorConfig<AuditLogGetStatus400 | AuditLogGetStatus401 | AuditLogGetStatus403 | AuditLogGetStatus404 | AuditLogGetStatus500 | AuditLogGetStatus501>, AuditLogGetStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await auditLogGet({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/audit-log/:id}
 */
export function useAuditLogGet<TData = AuditLogGetStatus200, TQueryData = AuditLogGetStatus200, TQueryKey extends QueryKey = AuditLogGetQueryKey>({ path }: { path: AuditLogGetOptions['path'] | (() => AuditLogGetOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<AuditLogGetStatus200, ResponseErrorConfig<AuditLogGetStatus400 | AuditLogGetStatus401 | AuditLogGetStatus403 | AuditLogGetStatus404 | AuditLogGetStatus500 | AuditLogGetStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...auditLogGetQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AuditLogGetStatus400 | AuditLogGetStatus401 | AuditLogGetStatus403 | AuditLogGetStatus404 | AuditLogGetStatus500 | AuditLogGetStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
