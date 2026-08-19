/* oxlint-disable */

import type { QueryKey, QueryClient, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AuditLogGetEntityChangesOptions, AuditLogGetEntityChangesStatus200, AuditLogGetEntityChangesStatus400, AuditLogGetEntityChangesStatus401, AuditLogGetEntityChangesStatus403, AuditLogGetEntityChangesStatus404, AuditLogGetEntityChangesStatus500, AuditLogGetEntityChangesStatus501 } from '../../models/auditLog/AuditLogGetEntityChanges'
import { queryOptions, useQuery } from '@tanstack/react-query'
import { auditLogGetEntityChanges } from '../../clients/auditLog/auditLogGetEntityChanges'

export const auditLogGetEntityChangesQueryKey = ({ path }: Omit<AuditLogGetEntityChangesOptions, 'headers'>) => [{ url: '/api/app/audit-log/entity-changes/:auditLogId', params: path }] as const

type AuditLogGetEntityChangesQueryKey = ReturnType<typeof auditLogGetEntityChangesQueryKey>

export function auditLogGetEntityChangesQueryOptions({ path }: AuditLogGetEntityChangesOptions, config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const queryKey = auditLogGetEntityChangesQueryKey({ path })
  return queryOptions<AuditLogGetEntityChangesStatus200, ResponseErrorConfig<AuditLogGetEntityChangesStatus400 | AuditLogGetEntityChangesStatus401 | AuditLogGetEntityChangesStatus403 | AuditLogGetEntityChangesStatus404 | AuditLogGetEntityChangesStatus500 | AuditLogGetEntityChangesStatus501>, AuditLogGetEntityChangesStatus200, typeof queryKey>({
   queryKey,
   queryFn: async ({ signal }) => {
      const { data } = await auditLogGetEntityChanges({ ...config, path, signal: config.signal ?? signal, throwOnError: true })
      return data
   },
  })
}

/**
 * {@link /api/app/audit-log/entity-changes/:auditLogId}
 */
export function useAuditLogGetEntityChanges<TData = AuditLogGetEntityChangesStatus200, TQueryData = AuditLogGetEntityChangesStatus200, TQueryKey extends QueryKey = AuditLogGetEntityChangesQueryKey>({ path }: { path: AuditLogGetEntityChangesOptions['path'] | (() => AuditLogGetEntityChangesOptions['path']) }, options: {
  query?: Partial<QueryObserverOptions<AuditLogGetEntityChangesStatus200, ResponseErrorConfig<AuditLogGetEntityChangesStatus400 | AuditLogGetEntityChangesStatus401 | AuditLogGetEntityChangesStatus403 | AuditLogGetEntityChangesStatus404 | AuditLogGetEntityChangesStatus500 | AuditLogGetEntityChangesStatus501>, TData, TQueryData, TQueryKey>> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>
} = {}) {
  const { query: queryConfig = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...resolvedOptions } = queryConfig
  const resolvedParams = { path: typeof path === 'function' ? path() : path }
  const queryKey = resolvedOptions?.queryKey ?? auditLogGetEntityChangesQueryKey(resolvedParams)

  const queryResult = useQuery({
   ...auditLogGetEntityChangesQueryOptions(resolvedParams, config),
   ...resolvedOptions,
   queryKey,
  } as unknown as QueryObserverOptions, queryClient) as UseQueryResult<TData, ResponseErrorConfig<AuditLogGetEntityChangesStatus400 | AuditLogGetEntityChangesStatus401 | AuditLogGetEntityChangesStatus403 | AuditLogGetEntityChangesStatus404 | AuditLogGetEntityChangesStatus500 | AuditLogGetEntityChangesStatus501>> & { queryKey: TQueryKey }

  queryResult.queryKey = queryKey as TQueryKey

  return queryResult
}
