/* oxlint-disable */

import type { UseMutationOptions, UseMutationResult, QueryClient } from '@tanstack/react-query'
import type { RequestConfig, ResponseErrorConfig } from '../../.kubb/client'
import type { AuditLogDeleteOptions, AuditLogDeleteStatus200, AuditLogDeleteStatus204, AuditLogDeleteStatus400, AuditLogDeleteStatus401, AuditLogDeleteStatus403, AuditLogDeleteStatus404, AuditLogDeleteStatus500, AuditLogDeleteStatus501 } from '../../models/auditLog/AuditLogDelete'
import { mutationOptions, useMutation } from '@tanstack/react-query'
import { auditLogDelete } from '../../clients/auditLog/auditLogDelete'

export const auditLogDeleteMutationKey = () => [{ url: '/api/app/audit-log/:id' }] as const

export function auditLogDeleteMutationOptions<TContext = unknown>(config: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>> = {}) {
  const mutationKey = auditLogDeleteMutationKey()
  return mutationOptions<AuditLogDeleteStatus200 | AuditLogDeleteStatus204, ResponseErrorConfig<AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501>, AuditLogDeleteOptions, TContext>({
    mutationKey,
    mutationFn: async({ path }) => {
      const { data } = await auditLogDelete({ ...config, path, throwOnError: true })
      return data
    },
  })
}

/**
 * {@link /api/app/audit-log/:id}
 */
export function useAuditLogDelete<TContext>(options: {
  mutation?: UseMutationOptions<AuditLogDeleteStatus200 | AuditLogDeleteStatus204, ResponseErrorConfig<AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501>, AuditLogDeleteOptions, TContext> & { client?: QueryClient },
  client?: Partial<Omit<RequestConfig, 'path' | 'query' | 'body' | 'headers' | 'url'>>,
} = {}) {
  const { mutation = {}, client: config = {} } = options ?? {}
  const { client: queryClient, ...mutationOptions } = mutation;
  const mutationKey = mutationOptions.mutationKey ?? auditLogDeleteMutationKey()

  const baseOptions = auditLogDeleteMutationOptions(config) as UseMutationOptions<AuditLogDeleteStatus200 | AuditLogDeleteStatus204, ResponseErrorConfig<AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501>, AuditLogDeleteOptions, TContext>

  return useMutation<AuditLogDeleteStatus200 | AuditLogDeleteStatus204, ResponseErrorConfig<AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501>, AuditLogDeleteOptions, TContext>({
    ...baseOptions,
    mutationKey,
    ...mutationOptions,
  }, queryClient) as UseMutationResult<AuditLogDeleteStatus200 | AuditLogDeleteStatus204, ResponseErrorConfig<AuditLogDeleteStatus400 | AuditLogDeleteStatus401 | AuditLogDeleteStatus403 | AuditLogDeleteStatus404 | AuditLogDeleteStatus500 | AuditLogDeleteStatus501>, AuditLogDeleteOptions, TContext>
}
