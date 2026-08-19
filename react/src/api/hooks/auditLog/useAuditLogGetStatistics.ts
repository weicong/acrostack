/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AuditLogGetStatisticsOptions, AuditLogGetStatisticsStatus200, AuditLogGetStatisticsStatus400, AuditLogGetStatisticsStatus401, AuditLogGetStatisticsStatus403, AuditLogGetStatisticsStatus404, AuditLogGetStatisticsStatus500, AuditLogGetStatisticsStatus501 } from '../../models/auditLog/AuditLogGetStatistics'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { auditLogGetStatistics } from '../../clients/auditLog/auditLogGetStatistics'

export const auditLogGetStatisticsQueryKey = ({ query }: Omit<AuditLogGetStatisticsOptions, 'headers'> = {}) => [{ url: '/api/app/audit-log/statistics' }, ...(query ? [query] : [])] as const

type AuditLogGetStatisticsQueryKey = ReturnType<typeof auditLogGetStatisticsQueryKey>

export function auditLogGetStatisticsQueryOptions({ query }: AuditLogGetStatisticsOptions = {}, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = auditLogGetStatisticsQueryKey({ query })
  return queryOptions<AuditLogGetStatisticsStatus200, ResponseErrorConfig<AuditLogGetStatisticsStatus400 | AuditLogGetStatisticsStatus401 | AuditLogGetStatisticsStatus403 | AuditLogGetStatisticsStatus404 | AuditLogGetStatisticsStatus500 | AuditLogGetStatisticsStatus501>, AuditLogGetStatisticsStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await auditLogGetStatistics({ ...config, query, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/audit-log/statistics}
 */
export function useAuditLogGetStatistics<TData = AuditLogGetStatisticsStatus200, TQueryData = AuditLogGetStatisticsStatus200, TQueryKey extends QueryKey = AuditLogGetStatisticsQueryKey>({ query }: { query?: AuditLogGetStatisticsOptions['query'] | (() => AuditLogGetStatisticsOptions['query']) } = {}, options: {
  query?: Partial<QueryObserverOptions<AuditLogGetStatisticsStatus200, ResponseErrorConfig<AuditLogGetStatisticsStatus400 | AuditLogGetStatisticsStatus401 | AuditLogGetStatisticsStatus403 | AuditLogGetStatisticsStatus404 | AuditLogGetStatisticsStatus500 | AuditLogGetStatisticsStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { query: typeof query === 'function' ? query() : query }
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetStatisticsQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...auditLogGetStatisticsQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AuditLogGetStatisticsStatus400 | AuditLogGetStatisticsStatus401 | AuditLogGetStatisticsStatus403 | AuditLogGetStatisticsStatus404 | AuditLogGetStatisticsStatus500 | AuditLogGetStatisticsStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
